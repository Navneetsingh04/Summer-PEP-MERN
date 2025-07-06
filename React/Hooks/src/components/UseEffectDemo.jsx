// useEffect is a React Hook that allows us to handle side effects in function components. It is called after the component renders and can be used for tasks like data fetching from API, Updating the DOM, or timers like setTimeout or setInterval.
// It can also be used to clean up resources when the component unmounts or when dependencies change.

// useEffect required two arguments:
// 1. A callback function that contains the side effect logic.
// 2. An array of dependencies that determines when the effect should run. 
// If the array is empty, the effect runs only once after the initial render. If it contains variables, the effect runs whenever those variables change. 

// useEffect(() => {Side effect logic here}, [dependencies]);

import { useEffect, useState } from 'react'

const UseEffectDemo = () => {

  const [count,setCount] = useState(0);
  const[name,setName] = useState("Navneet");

  useEffect(() => {
    setTimeout(() => {
      setCount(count => count+1)
    },2000)
  },[count,name])

  return (
    <>
    <h1>I have rendered {count} times!</h1>
    </>
  )
}

export default UseEffectDemo
