import { useEffect, useState } from 'react';
import router from 'next/router';
import axios from 'axios';

export function useAxiosFetch({ url, token }: { url: string; token: string }) {
  const [resource, setResource] = useState();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<number>();

  useEffect(() => {
    async function getResource() {
      if (token == null) return;
      try {
        setLoading(true);
        const { data } = await axios.get(url, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
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
  }, [url, token]);

  return { resource, loading, error };
}

export const useLocalStorage = ({
  key,
  initialValue,
}: {
  key: string;
  initialValue;
}) => {
  const [storedValue, setStoredValue] = useState(initialValue);

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
    console.log('here', key);
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      setStoredValue(item ? JSON.parse(item) : initialValue);
    } catch (error) {
      console.log(error);
      return setStoredValue(initialValue);
    }
  }, []);
  return [storedValue, setValue, removeValue];
};
