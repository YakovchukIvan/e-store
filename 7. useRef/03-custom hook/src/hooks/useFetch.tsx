import { useEffect, useState } from 'react';

type UseFetchProps = {
  url: string;
};

type UseFetchReturn<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export default function useFetch<T>({ url }: UseFetchProps): UseFetchReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP ERROR: ${res.status}`);
        }
        const data: T = await res.json();
        setData(data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchData(url);
  }, [url]);

  return { data, loading, error };
}
