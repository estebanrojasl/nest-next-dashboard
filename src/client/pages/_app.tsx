import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/Login';
import { useLocalStorage } from '../components/utils';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useLocalStorage({
    key: 'accessToken',
    initialValue: null,
  });

  if (token == null) {
    return <Login setToken={(userToken: string) => setToken(userToken)} />;
  }

  return (
    <>
      <Header token={token} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
