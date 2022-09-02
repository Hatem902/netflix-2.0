import Header from '../components/Header';
import Banner from '../components/Banner';
import Head from 'next/head';
import requests from '../utils/requests';
import { Movie } from '../typings';
import { useEffect, useState } from 'react';
import Row from '../components/Row';
import { RowsTitles } from '../components-data/rows-titles';

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

const Home = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}: Props) => {
  const propsTable = [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ];

  const [randomMovie, setRandomMovie] = useState<Movie>(netflixOriginals[0]);

  useEffect(() => {
    setRandomMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, []);

  const rowsTitles = RowsTitles;

  return (
    <div className='relative bg-gradient-to-b h-[100vh] sm:h-[140vh]'>
      <Head>
        <title>Netflix home page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16 '>
        <Banner movie={randomMovie} />

        <section className='md:space-y-24'>
          {propsTable.map((category, index) => (
            <Row movies={category} title={rowsTitles[index]} key={index} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
