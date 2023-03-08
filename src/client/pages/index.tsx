import React from 'react';
import { NextPage } from 'next';

import { capitalize, useAxiosFetch } from '../components/utils';
import { User } from '../types';
import PageTitle from '../components/PageTitle';

const Home: NextPage = ({ token }: { token?: string }) => {
  const { resource } = useAxiosFetch({
    url: 'http://localhost:3000/api/users/me',
    token,
  }) as { resource?: User };

  const username = resource?.username;

  return (
    <div className="p-4 mt-14 ml-64" style={{ minHeight: 700 }}>
      <PageTitle
        title={username == null ? null : `Welcome ${capitalize(username)}`}
      />
    </div>
  );
};

export default Home;
