import React from 'react';
import { NextPage } from 'next';
import { useAxiosFetch } from '../components/utils';

import Loading from '../components/Loading';

type User = {
  _id: number;
  username: string;
};

const Users: NextPage = () => {
  const { resource: users } = useAxiosFetch({
    url: 'http://localhost:3000/api/users',
  }) as { resource: User[] | undefined };

  if (users == null) return <Loading />;

  return (
    <>
      <h1>Users</h1>
      {users?.map((user) => (
        <p>{user.username}</p>
      ))}
    </>
  );
};

export default Users;
