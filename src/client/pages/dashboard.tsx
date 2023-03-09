import React from 'react';
import { NextPage } from 'next';

import PageTitle from '../components/PageTitle';
import UserCard from '../components/UserCard';
import UsageCard from '../components/UsageCard';

const Dashboard: NextPage = () => {
  return (
    <div className="p-4 mt-14 ml-64" style={{ minHeight: 700 }}>
      <PageTitle title="Dashboard" />

      <div className="p-2" />

      <div className="grid grid-cols-3 gap-4 mb-4">
        <UserCard />
        <UsageCard />
      </div>
    </div>
  );
};

export default Dashboard;
