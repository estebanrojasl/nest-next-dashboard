import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/Login';
import { useGetToken } from '../components/utils';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const token = useGetToken();

  console.log('token', token);

  if (token == null) {
    return (
      <Login
        setToken={(userToken: string) => {
          localStorage.setItem('token', JSON.stringify(userToken));
          window.dispatchEvent(new Event('storage'));
        }}
      />
    );
  }

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
