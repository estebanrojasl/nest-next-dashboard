import React from 'react';
import { NextPage } from 'next';

import PageTitle from '../components/PageTitle';

const Dashboard: NextPage = () => {
  return (
    <div className="p-4 mt-14 ml-64" style={{ minHeight: 700 }}>
      <PageTitle title="Dashboard" />

      <div className="p-6" />

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center justify-center h-24 rounded bg-gray-200">
          <p className="text-2xl text-gray-400">+</p>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-gray-200">
          <p className="text-2xl text-gray-400">+</p>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-gray-200">
          <p className="text-2xl text-gray-400">+</p>
        </div>
      </div>
      <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-200">
        <p className="text-2xl text-gray-400">+</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center justify-center rounded bg-gray-200 h-28">
          <p className="text-2xl text-gray-400">+</p>
        </div>
        <div className="flex items-center justify-center rounded bg-gray-200 h-28">
          <p className="text-2xl text-gray-400">+</p>
        </div>
        <div className="flex items-center justify-center rounded bg-gray-200 h-28">
          <p className="text-2xl text-gray-400">+</p>
        </div>
      </div>
    </div>
  );
};

// export const getServerSideProps = async () => {
//   const res = await fetch('http://localhost:3000/api/auth/me');
//   const users = await res.json();
//   return { props: { users } };
// };

export default Dashboard;