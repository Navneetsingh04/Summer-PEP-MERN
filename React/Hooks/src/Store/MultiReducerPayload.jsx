import React, { useReducer } from "react";

const MultiReducerPayload = () => {
  const initialValue1 = 0;
  const initialValue2 = 0;

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + action.payload;
      case "decrement":
        return state - action.payload;
      case "reset":
        return 0;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialValue1);
  const [count1, dispatch1] = useReducer(reducer, initialValue2);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({type : "increment", payload : 1})}>
        Increment
      </button>
      <button onClick={() => dispatch({type : "decrement" , payload : 1})}>
        Decrement
      </button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <br />
      <h1>{count1}</h1>
      <button onClick={() => dispatch1({type : "increment", payload : 5})}>
        Increment
      </button>
      <button onClick={() => dispatch1({type : "decrement" , payload : 5})}>
        Decrement
      </button>
      <button onClick={() => dispatch1("reset")}>Reset</button>
    </div>
  );
};

export default MultiReducerPayload;
