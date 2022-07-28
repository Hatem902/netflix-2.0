import Header from '../components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import requests from '../utils/requests';
import { Movie } from '../typings';

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
  console.log(netflixOriginals);
  return (
    <div className='bg-gradient-to-b from-black to-gray-800 h-[100vh] sm:h-[140vh]'>
      <Head>
        <title>Netflix home page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className=''>
        {/* banner */}
        <section>
          {/* row */}
          {/* row */}
          {/* row */}
          {/* row */}
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
      netflixOriginals: netflixOriginals,
      trendingNow: trendingNow,
      topRated: topRated,
      actionMovies: actionMovies,
      comedyMovies: comedyMovies,
      horrorMovies: horrorMovies,
      romanceMovies: romanceMovies,
      documentaries: documentaries,
    },
  };
};
