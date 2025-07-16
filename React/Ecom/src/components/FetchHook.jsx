import React, { useEffect, useState } from "react";

const useFetchHook = ({ url, method }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    await fetch(url, {
      method: method,
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err));

    setLoading(false);
  };

  // console.log({data,error,loading})
  useEffect(() => {
    handleFetch()
  }, [url]);

  return { data, error, loading };
};

export default useFetchHook;
