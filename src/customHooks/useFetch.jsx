import { useEffect, useState } from 'react';

const useFetch = (initialValue, url) => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      let ignore = false;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then(
          (response) => {
            if (!ignore) {
              console.log(response);
              setState(response);
              setLoading(false);
            }
          },
          (err) => {
            if (!ignore) {
              console.error(err);
            }
          }
        )
        .catch((err) => {
          if (!ignore) {
            console.error(err);
          }
        })
        .finally(() => {
          ignore = true;
        });
    }, 3000);

    return () => {};
  }, []);

  return [state, loading];
};

export default useFetch;
