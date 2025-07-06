import React, { useState } from "react";

const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const incrementCounter = () => setCount((prev) => prev + 1);
  const decrementCounter = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);
  return { incrementCounter, decrementCounter, reset, count };
};

export default useCounter;
