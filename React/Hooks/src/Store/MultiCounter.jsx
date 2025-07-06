import React, { useReducer } from "react";

const MultiCounter = () => {
  const initialValue = {
    counter1: 0,
    counter2: 0,
  };

  const reducer = (state, action) => {
    switch (action) {
      case "increment_counter_1":
        return { ...state, counter1: state.counter1 + 1 };
      case "increment_counter_2":
        return { ...state, counter2: state.counter2 + 1 };
      case "decrement_counter_1":
        return { ...state, counter1: state.counter1 > 0 ? state.counter1 - 1 : state.counter1};
      case "decrement_counter_2":
        return { ...state, counter2: state.counter2 - 1 };
      case "reset":
        return initialValue;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1>{count.counter1}</h1>
      <button onClick={() => dispatch("increment_counter_1")}>
        Increment By 1
      </button>
      <button onClick={() => dispatch("decrement_counter_1")}>
        Decrement By 1
      </button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <br />
      <h1>{count.counter2}</h1>
      <button onClick={() => dispatch("increment_counter_2")}>
        Increment By 1
      </button>
      <button onClick={() => dispatch("decrement_counter_2")}>
        Decrement By 1
      </button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default MultiCounter;
