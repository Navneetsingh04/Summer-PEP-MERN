// useLayoutEffect is a React Hook that is similar to useEffect, but it called before the user interface gets mounted or updated.
// useEffect gets called after the DOM elementsm, while useLayoutEffect gets called before printing the DOM elemets.
// This can be useful for measuring the size or position of elements before the browser has a chance to paint.
// It is often used for tasks that require immediate updates to the DOM, such as animations or synchronizing state with the layout.

// it takes two arguments:
// 1. A callback function that contains the side effect logic.
// 2. An array of dependencies that determines when the effect should run.

import React, { useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  useEffect(() => {
    console.log("Message from useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("Message from useLayoutEffect");
  }, []);

  return (
    <div>
      <h2>Test Message</h2>
      {Array(40000)
        .fill("")
        .map((iteam, index) => (
          <li key={index}>{Math.pow(Math.random(),10)}</li>
        ))}
    </div>
  );
};

export default UseLayoutEffect;
