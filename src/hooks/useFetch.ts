import { useEffect, useState } from 'react';

type FetchData<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export const useFetch = <T,>(fetchFunction: () => Promise<T>): FetchData<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async() => {
      try {
        // Ejecutar la función que simula el fetch
        const results = await fetchFunction();
        setData(results);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction]);

  return { data, isLoading, error };
};
