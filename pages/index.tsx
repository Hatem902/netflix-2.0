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

      <main className=''>
        <h1>hello</h1>
      </main>
    </div>
  );
};

export default Home;
