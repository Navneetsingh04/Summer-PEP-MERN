import React, { useContext } from "react";
import { counterContext } from "./Parent";

const Counter = () => {
  const {state,dispatch} = useContext(counterContext);
  return (
    <div>
      <h1>Counter: {state}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default Counter;
