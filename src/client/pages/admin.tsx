import React from 'react';
import { NextPage } from 'next';

import PageTitle from '../components/PageTitle';

const Admin: NextPage = () => {
  return (
    <div className="p-4 mt-14 ml-64" style={{ minHeight: 700 }}>
      <PageTitle title="Admin" />
      {/* mock something here */}
    </div>
  );
};

export default Admin;
