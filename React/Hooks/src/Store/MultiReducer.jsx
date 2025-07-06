import React, { useReducer } from "react";

const MultiReducer = () => {
  const initialValue1 = 0;
  const initialValue2 = 0;

  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state+1;
      case "decrement":
        return state-1;
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
      <button onClick={() => dispatch("increment")}>
        Increment By 1
      </button>
      <button onClick={() => dispatch("decrement")}>
        Decrement By 1
      </button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <br />
      <h1>{count1}</h1>
      <button onClick={() => dispatch1("increment")}>
        Increment By 1
      </button>
      <button onClick={() => dispatch1("decrement")}>
        Decrement By 1
      </button>
      <button onClick={() => dispatch1("reset")}>Reset</button>
    </div>
  );
};

export default MultiReducer;
