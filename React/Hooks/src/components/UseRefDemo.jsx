// useRef is a React Hook that allows us to directly interact with DOM elements or store mutable values that do not cause re-renders when changed. It is often used for accessing DOM nodes, managing focus, or keeping track of previous values without triggering a re-render.
// It returns a mutable ref object with a `current` property that can be set to any value. The `current` property can be updated without causing a re-render of the component, making it useful for storing values that need to persist across renders but do not require a re-render when changed.
// The `useRef` hook is commonly used for:
// 1. Accessing DOM elements: You can use `useRef` to get a reference to a DOM element and manipulate it      directly.
// 2. Storing mutable values: You can store values that you want to persist across
//    renders without causing a re-render when they change.
// 3. Keeping track of previous values: You can use `useRef` to store the previous value of a state or prop, allowing you to compare the current and previous values without triggering a re-render.

import { useEffect, useRef, useState } from "react";

const UseRefDemo = () => {

//   const [value, setValue] = useState(0);
//   const count = useRef(0);
//   useEffect(() => {
//     count.current = count.current + 1;
//   });

    const inputElem = useRef();

    const btnClicked = () =>{
        console.log(inputElem.current)
        inputElem.current.style.background = "blue";
    }

  return (
    // <div>
    //   <button
    //     onClick={() => {
    //       setValue((prev) => prev - 1);
    //     }}
    //   >
    //     -1
    //   </button>
    //   <h1>{value}</h1>
    //   <button
    //     onClick={() => {
    //       setValue((prev) => prev + 1);
    //     }}
    //   >
    //     +1
    //   </button>
    //   <h3>Render Count: {count.current} </h3>
    // </div>

    <div>
        <input type="text" ref={inputElem}/>
        <button onClick={btnClicked}>Click Here</button>
    </div>
  );
};

export default UseRefDemo;
