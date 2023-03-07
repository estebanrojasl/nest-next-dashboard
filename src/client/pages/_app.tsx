import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/login';

import { useToken } from '../components/utils';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { token, setToken } = useToken();

  console.log('token', token);

  if (token == null) {
    return <Login setToken={setToken} />;
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
