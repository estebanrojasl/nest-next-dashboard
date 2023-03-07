import React from 'react';
import axios from 'axios';

export function useAxiosFetch({ url }: { url: string }) {
  const [resource, setResource] = React.useState();
  const [loading, setLoading] = React.useState<boolean>();
  console.log('here');

  React.useEffect(() => {
    async function getResource() {
      try {
        setLoading(true);
        const { data } = await axios.get(url, {
          headers: {
            Accept: 'application/json',
            // Authorization: `Bearer ${token}`,
          },
        });

        setResource(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      } finally {
        setLoading(false);
      }
    }

    getResource();
  }, [url]);

  return { resource, loading };
}

export function useToken() {
  if (typeof window === 'undefined') return;

  const getToken = (): string => {
    const tokenString = localStorage.getItem('token');
    return tokenString == null ? null : JSON.parse(tokenString);
  };

  const [token, setToken] = React.useState<string>(getToken());

  console.log('token: ', token);

  const saveToken = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    token: 'as',
    setToken: saveToken,
  };
}
