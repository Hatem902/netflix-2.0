import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex  items-center px-6 py-4 sm:px-10 sm:py-6 justify-between transition-all'>
      <div className='flex space-x-10'>
        <h1>NETFLIX</h1>
        <ul className='flex space-x-4 text-light text-gray-500'>
          <li className='hover:text-white transition-color duration-[0.4s]'>
            <Link href='/'>Home</Link>
          </li>
          <Link href='/'>TV Shows</Link>
          <Link href='/'>Movies</Link>
          <Link href='/'>New & Popular</Link>
          <Link href='/'>My List</Link>
        </ul>
      </div>

      <ul className='flex space-x-2'>
        <li>S</li>
        <li>Kids</li>
        <li>B</li>
        <li>Si</li>
      </ul>
    </header>
  );
};

export default Header;
