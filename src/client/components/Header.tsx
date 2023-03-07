import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import router from 'next/router';

import Logo from '../assets/logo.png';
import Avatar from '../assets/avatar.png';

// <header classNameName="p-4 px-16 relative justify-between">
//   <div classNameName="h-16 flex justify-between items-center">
//     <Link href="/">
//       <Image src={Logo} alt="logo" classNameName="w-32" />
//     </Link>

//     <div classNameName="flex items-center">
//       <div classNameName="p-6" />
//       {isLogged ? (
//         <Link
//           href="/login"
//           style={{ fontFamily: "'Orbitron', sans-serif", color: '#FFE81F' }}
//         >
//           Login
//         </Link>
//       ) : (
//         <button
//           ref={wrapperRef}
//           classNameName="flex flex-row items-center justify-between"
//           onClick={() => setShowMenu(!showMenu)}
//         >
//           <Image src={Avatar} alt="avatar" classNameName="rounded-full w-12" />{' '}
//         </button>
//       )}
//     </div>
//   </div>

//   {showMenu === true ? (
//     <div classNameName="absolute right-14 top-18">
//       <ul classNameName="space-y-2">
//         <li>
//           <button
//             classNameName="flex items-center p-2 text-base font-normal text- rounded-lg text-white bg-gray-700 hover:bg-gray-500"
//             onClick={() => {
//               setShowMenu(!showMenu);
//               router.push('/admin');
//             }}
//           >
//             <span classNameName="mr-6">Logout</span>
//           </button>
//         </li>
//       </ul>
//     </div>
//   ) : null}
// </header>

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const wrapperRef = useRef(null);

  const isLogged = false;

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/" className="flex ml-2 md:mr-24">
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
                    <div className="px-4 py-3" role="none">
                      <p className="text-sm text-gray-900" role="none">
                        Neil Sims
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
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
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Header;
