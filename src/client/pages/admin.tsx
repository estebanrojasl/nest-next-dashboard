import React from 'react';
import { NextPage } from 'next';

import PageTitle from '../components/PageTitle';
import UserCard from '../components/UserCard';
import UsageCard from '../components/UsageCard';

const Admin: NextPage = () => {
  return (
    <div className="p-4 mt-14 ml-64" style={{ minHeight: 700 }}>
      <PageTitle title="Admin" />
      <div className="p-2" />

      <div className="grid grid-cols-3 gap-4 mb-4">
        <UserCard />
        <UsageCard />

        <div className="flex flex-col justify-center items-center w-full max-w-md p-8 bg-gray-200 border border-gray-200 rounded-lg shadow cursor-not-allowed">
          <p className="text-2xl text-gray-400">+</p>
          <p className="text-lg text-gray-400">Add new widget</p>
        </div>
      </div>
      {/* <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-200">
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
      </div>*/}
    </div>
  );
};

export default Admin;
