import { useState, useEffect, useRef } from "react";

export function useSupabaseQuery(fetchFn, deps = []) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);
  const abortRef              = useRef(false);

  useEffect(() => {
    abortRef.current = false;
    setLoading(true);
    setError(null);

    fetchFn()
      .then((result) => {
        if (!abortRef.current) {
          setData(result);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!abortRef.current) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      abortRef.current = true;
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, loading, error };
}
