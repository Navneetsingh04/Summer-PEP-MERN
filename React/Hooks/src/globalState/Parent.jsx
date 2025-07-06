import React, { useReducer } from "react";
import { createContext } from "react";
import Counter from "./Counter";

const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      console.log("Increment By 1");
      return state + 1;
    case "decrement":
      console.log("Decrement By 1");
      return state - 1;
    case "increment by 5":
      console.log("Increment By 5");
      return state + 5;
    case "decrement by 5":
      console.log("Decrement By 5");
      return state - 5;
    case "reset":
      console.log("Reset");
      return 0;
    default:
      return state;
  }
};

export const counterContext = createContext();

const Parent = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1>Parent</h1>
      <counterContext.Provider value={{ state, dispatch }}>
        <Counter />
      </counterContext.Provider>
    </div>
  );
};

export default Parent;
