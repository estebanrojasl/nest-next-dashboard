import React from 'react';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return <h1>Hello, World!</h1>;
};

// export const getServerSideProps = async () => {
//   const res = await fetch('http://localhost:3000/api/auth/me');
//   const users = await res.json();
//   return { props: { users } };
// };

export default Home;
