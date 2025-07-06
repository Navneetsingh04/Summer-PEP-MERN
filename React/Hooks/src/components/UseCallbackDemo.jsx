// useCallback is a React hook that is used to memoize functions. it lets you cache a function definition so that it does not get recreated on every render, which can help optimize performance, especially in components that re-render frequently.
// it is particularly useful when passing callbacks to child components that rely on reference equality to prevent unnecessary re-renders.

// reference equality is a concept in JavaScript where two objects are considered equal if they reference the same memory location. in the context of React, this means that if a function is recreated on every render, child components that depend on that function will re-render even if their props haven't changed.

import React, { useCallback, useState } from 'react'
import Header from './Header';

const UseCallbackDemo = () => {

    const [count,setCount] = useState(0);

    const newFun = useCallback(() => {},[])
  return (
    <>
        <Header newFun = {newFun}/>
        <h1>{count}</h1>
        <button onClick={() => setCount(prev => prev+1)}>click here</button>
      
    </>
  )
}

export default UseCallbackDemo
