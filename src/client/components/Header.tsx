import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import router from 'next/router';

import Logo from '../assets/logo.png';

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const wrapperRef = useRef(null);

  const isLogged = false;

  return (
    <header className="p-4 px-16 relative bg-black z-10 justify-between">
      <div className="h-16 flex justify-between items-center">
        <Link href="/">
          <Image src={Logo} alt="logo" className="w-16" />
        </Link>

        <div className="flex items-center">
          <div className="p-6" />
          {isLogged ? (
            <Link
              href="/login"
              style={{ fontFamily: "'Orbitron', sans-serif", color: '#FFE81F' }}
            >
              Login
            </Link>
          ) : (
            <button
              ref={wrapperRef}
              className="flex flex-row items-center justify-between"
              onClick={() => setShowMenu(!showMenu)}
            >
              <Image src={Logo} alt="avatar" className="rounded-full w-12" />{' '}
            </button>
          )}
        </div>
      </div>

      {showMenu === true ? (
        <div className="absolute right-14 top-18">
          <ul className="space-y-2">
            <li>
              <button
                className="flex items-center p-2 text-base font-normal text- rounded-lg text-white bg-gray-700 hover:bg-gray-500"
                onClick={() => {
                  setShowMenu(!showMenu);
                  router.push('/admin');
                }}
              >
                <span className="mr-6">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
