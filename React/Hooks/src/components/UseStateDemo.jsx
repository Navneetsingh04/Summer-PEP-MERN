// useState is a React hook that allows you to add state to functional components. it returns an array with two elements: the current state value and a function to update that state value. this hook is useful for managing local component state without needing to convert a functional component into a class component.
// it is particularly useful for managing simple state values like numbers, strings, booleans, or even objects and arrays.
// 

import { useState } from 'react';
const UseStateDemo = () => {

    const [car,setCar] = useState({
        brand : "Ferrari",
        model : "Roma",
        year : "2023",
        color: "red"
      });
    
      const changeColor = () =>{
    setCar((prev) => {
      return {...prev,color : "blue"}
    });
  }
  return (
    <div>
      <h1>My {car.brand}</h1>
      <h3>It is a {car.color} {car.model}  from {car.year} </h3>
      <button onClick={changeColor}>Blue</button>
    </div>
  )
}

export default UseStateDemo
