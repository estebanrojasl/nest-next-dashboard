import axios from 'axios';
import { useEffect, useState } from 'react';

export function useAxiosFetch({ url }: { url: string }) {
  const [resource, setResource] = useState();
  const [loading, setLoading] = useState<boolean>();
  console.log('here');

  useEffect(() => {
    async function getResource() {
      try {
        setLoading(true);
        const { data } = await axios.get(url, {
          withCredentials: true,
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

  const removeValue = (key) => {
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
