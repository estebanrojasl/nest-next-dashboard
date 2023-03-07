import React, { useEffect } from 'react';

import { useLocalStorage } from '../components/utils';
import Loading from '../components/Loading';

const Logout = () => {
  const [_, setToken, removeToken] = useLocalStorage({
    key: 'accessToken',
    initialValue: null,
  });

  useEffect(() => {
    removeToken('accessToken');
  }, [setToken]);

  return <Loading />;
};
export default Logout;
