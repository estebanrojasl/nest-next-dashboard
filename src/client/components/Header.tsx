import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../assets/logo.png';
import Avatar from '../assets/avatar.png';
import { useAxiosFetch } from './utils';
import { User } from '../types';

const Header = ({ token }: { token }) => {
  const [showMenu, setShowMenu] = React.useState(false);

  const { resource: user } = useAxiosFetch({
    url: 'http://localhost:3000/api/users/me',
    token,
  }) as { resource: User };

  const isAdmin = user?.role === 'admin';

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <a href="/" className="flex ml-2 mr-24">
                <Image src={Logo} className="w-32 h-auto" alt="Logo" />
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col ml-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                    aria-expanded="false"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <Image
                      className="w-8 h-8 rounded-full"
                      src={Avatar}
                      alt="user photo"
                    />
                  </button>
                </div>
                {showMenu && (
                  <div
                    className="absolute right-4 z-50 text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg"
                    style={{ top: '60px' }}
                  >
                    <div className="px-4 py-3">
                      <p className="text-sm text-gray-900">Neil Sims</p>
                    </div>
                    <ul className="py-1">
                      <li>
                        <Link
                          href="/logout"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Sign out
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform translate-x-0 bg-white border-r border-gray-200">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            {isAdmin && (
              <li>
                <a
                  href="/users"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Header;
