import { useState, useEffect } from "react";

export function useFetch(url) {
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  const fetchData = (url) => {
    setLoading(true);
    if (!url) return;
    else {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("Oops! Looks like something went wrong");
          }
          return response.json();
        })
        .then((response) => {
          setData(response.results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        })
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, error, loading };
}
