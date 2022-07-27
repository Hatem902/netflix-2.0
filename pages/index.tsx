import Header from '../components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className=''>
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
