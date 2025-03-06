import { useState, useCallback } from 'react';

const useFetchData = (fetchFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const callApi = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const result = await fetchFunction();
      setData(result);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }, [fetchFunction]);

  return { data, loading, error, callApi };
};

export default useFetchData;
