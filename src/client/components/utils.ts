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

export function useGetToken() {
  const [isLogged, setIsLogged] = useState<string>();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleStorage = () => {
      const token = localStorage.getItem('token');
      setIsLogged(token);
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return isLogged;
}
