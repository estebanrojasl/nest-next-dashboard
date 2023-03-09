import { useEffect, useState } from 'react';
import router from 'next/router';
import axios from 'axios';

export function useAxiosFetch({
  url,
  method = 'GET',
  token,
  payload,
}: {
  url: string;
  method?: 'POST' | 'GET';
  token: string;
  payload?: string;
}) {
  const [resource, setResource] = useState();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<number>();

  useEffect(() => {
    async function getResource() {
      if (token === '') return;

      try {
        setLoading(true);
        const { data } = await axios.request({
          data: {
            ...(payload != null ? { payload } : {}),
          },
          method,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
          url,
        });

        setResource(data);
      } catch (error) {
        setError(error.response.status);
        if (error.response.status === 401) {
          router.push('/logout');
        }
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
  }, [url, token, payload]);

  return { resource, loading, error };
}

export const useLocalStorage = ({
  key,
}: {
  key: string;
}): [string, (value: string) => void, () => void] => {
  const [storedValue, setStoredValue] = useState('');

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      setStoredValue(item != null ? JSON.parse(item) : null);
    } catch (error) {
      console.log(error);
      return setStoredValue(null);
    }
  }, []);
  return [storedValue, setValue, removeValue];
};

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
