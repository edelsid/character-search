import { useState, useEffect } from "react";

export function useFetch(url) {
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  const fetchData = (url) => {
    if (!url) return;
    else {
      setLoading(true);
      fetch(url)
        .then((response) => {
          if (response.status === 404) {
            throw Error("No characters found");
          } else if (!response.ok) {
            throw Error("Oops! Looks like something went wrong...");
          }
          return response.json();
        })
        .then((response) => {
          const delay = Math.trunc((Math.random() * 2000));
          setTimeout(() => {
            setData(response);
            setLoading(false);
            setError(null);
          }, delay);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        })
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, error, loading };
}
