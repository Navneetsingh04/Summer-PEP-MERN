// UseReducer is a React Hook that allows you to manage complex state logic in functional components. It is particularly useful when you have multiple state variables that depend on each other or when the state logic is complex.

// UseReducer is an alternative to the useState hook and is often preferred when dealing with state that involves multiple sub-values or when the next state depends on the previous one. It provides a way to centralize state management and makes it easier to understand how state changes over time.

// The useReducer hook takes two arguments: a reducer function and an initial state. The reducer function is responsible for determining how the state should change based on the action dispatched to it.
//  The useReducer hook returns the current state and a dispatch function that you can use to send actions to the reducer.
import { useReducer } from "react";

const UseReducerDemo = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return { count: state.count + 1 };
      }
      case "decrease": {
        return { count: state.count - 1 };
      }
      case "input": {
        return { count: action.payload };
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrease" })}>decrease</button>

      <br />
      <input
        value={state.count}
        onChange={(e) =>
          dispatch({ type: "input", payload: Number(e.target.value) })
        }
        type="number"
      />
    </div>
  );
};

export default UseReducerDemo;
