import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import { HeaderItems } from '../components-data/header-items';
import useAuth from '../hooks/use-auth';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScrolled = () => {
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener('scroll', handleScrolled);

    return () => {
      window.removeEventListener('scroll', handleScrolled);
    };
  }, []);

  const headerItems = HeaderItems;
  const { logout } = useAuth();

  return (
    <header
      className={`${
        scrolled && 'bg-[#141414]'
      }  fixed top-0 z-50 flex w-full  items-center justify-between px-4 py-4 transition-all lg:px-10 lg:py-6 `}
    >
      <div className='flex items-center space-x-2 md:space-x-10'>
        {/* Netflix Logo : */}
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
          width={100}
          height={100}
          className='cursor-pointer object-contain'
        />

        <ul className='hidden text-[#e5e5e5] space-x-4 md:flex'>
          {headerItems.map((headerItem) =>
            headerItem === headerItems[0] ? (
              <li
                className='text-sm cursor-pointer font-semibold text-white hover:text-white'
                key={headerItem}
              >
                {headerItem}
              </li>
            ) : (
              <li
                className='cursor-pointer text-sm font-light  transition duration-[.4s] hover:text-[#b3b3b3]'
                key={headerItem}
              >
                {headerItem}
              </li>
            )
          )}
          {/* <li className='headerLink cursor-default font-semibold text-white hover:text-white'>
            Home
          </li>
          <li className='cursor-pointer text-sm font-light  transition duration-[.4s] hover:text-[#b3b3b3]'>
            TV Shows
          </li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New & Popular</li>
          <li className='headerLink'>My List</li> */}
        </ul>
      </div>
      <ul className='flex items-center space-x-4 text-sm font-light'>
        <SearchIcon className='cursor-pointer sm hidden h-6 w-6 sm:inline' />
        <p className='cursor-pointer hidden lg:inline'>Kids</p>
        <BellIcon className='cursor-pointer h-6 w-6' />
        <Link href='/account'>
          <img
            src='https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41'
            alt=''
            className='cursor-pointer rounded'
            onClick={logout}
          />
        </Link>
      </ul>
    </header>
  );
};

export default Header;
