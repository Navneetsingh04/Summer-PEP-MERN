import React from 'react'
import useCounter from './Counter'

const Parent = () => {
     const {incrementCounter,decrementCounter,reset,count} = useCounter(0);
  return (
    <div>
        <h1>Parent component</h1>
        <h3>{count}</h3>
        <button onClick={incrementCounter}>increment</button>
        <button onClick={decrementCounter}>decrement</button>
        <button onClick={reset}>reset</button>

    </div>
  )
}

export default Parent
