import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../pages/login';
import { useLocalStorage } from '../components/utils';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [token, setToken, removeToken] = useLocalStorage({
    key: 'accessToken',
    initialValue: null,
  });

  // when a refresh happens, the token is lost so users are redirected to login
  // while the token is being fetched from localStorage
  if (token == null) {
    return (
      <Login
        token={token}
        setToken={(userToken: string) => setToken(userToken)}
      />
    );
  }

  return (
    <>
      <Header token={token} />
      <Component
        token={token}
        setToken={(userToken: string) => setToken(userToken)}
        removeToken={removeToken}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
