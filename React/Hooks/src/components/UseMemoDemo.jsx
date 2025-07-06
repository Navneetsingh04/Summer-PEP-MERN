// useMemo Hooks retuns a memoized value. (it's like caching a value so that it doesn't have to be recalculated on every render)
// the useMemo hook only runs when one of its dependencies has changed.
// It is useful for optimizing performance by avoiding expensive calculations on every render.

// there is one more hook called useCallback for improving performance.
// useMemo is used to memoize values, while useCallback is used to memoize functions

// useMemo hook takes two arguments:
// 1. A function that returns a value to be memoized.
// 2. An array of dependencies that determines when the memoized value should be recalculated. If the dependencies haven't changed since the last render, the cached value is returned instead of recalculating it.


import { useMemo, useState } from "react";

const UseMemoDemo = () => {

  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("Calcualtion done!");
    return Math.pow(num, 3);
  }

  const result = useMemo(() => {
    return cubeNum(number);
  }, [number]); 

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h2>
        Cube of {number} is : {result}
      </h2>
      <button
        onClick={() => {
          setCounter((counter) => counter + 1);
        }}
      >
        counter
      </button>
      <h3>Counter: {counter}</h3>
    </div>
  );
};

export default UseMemoDemo;
