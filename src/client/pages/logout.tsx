import React, { useEffect } from 'react';
import Image from 'next/image';

import Logo from '../assets/logo.png';

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem('token');
    // window.dispatchEvent(new Event('storage'));
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="p-8">
        <h3 className="text-gray-500">You are logged out!</h3>
      </div>

      <Image src={Logo} alt="logo" className="px-8" style={{ height: 400 }} />
    </div>
  );
};
export default Logout;
