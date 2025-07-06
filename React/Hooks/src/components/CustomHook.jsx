// customHook is a React component that demonstrates the use of custom hooks.
// Custom hooks are functions that allow you to extract and reuse stateful logic across multiple components.
// it is a way to encapsulate complex logic and share it between components without changing the component hierarchy.

import React, { useEffect, useState } from "react";
import UseLocalStorage from "./UseLocalStorage";

const CustomHook = () => {

  const [name,setName] = UseLocalStorage('username','')
  const [id,setId] = UseLocalStorage('userid','')

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello , {name}!</h2>
      <br />
      <br />
      <input
        type="text"
        placeholder="User Id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <h2>Your Id is {id}!</h2>
    </div>
  );
};

export default CustomHook;
