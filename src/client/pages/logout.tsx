import React, { useEffect } from 'react';

import Loading from '../components/Loading';
import { useRouter } from 'next/router';

const Logout = ({
  token,
  setToken,
  removeToken,
}: {
  token: string;
  setToken: (userToken: null) => void;
  removeToken: () => void;
}) => {
  const router = useRouter();
  useEffect(() => {
    setToken(null);

    removeToken();
  }, [token]);

  router.push('/login');

  return <Loading />;
};
export default Logout;
