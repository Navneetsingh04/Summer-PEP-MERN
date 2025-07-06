import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { CollegeContext, NameContext } from "./ContextComp";

const ComponentE = () => {
  const name = useContext(NameContext);
  const coll = useContext(CollegeContext);
  return (
    <div>
        <h3>From component E</h3>
        <h2>Hello {name} From {coll}</h2>
      <ComponentF />
    </div>
  );
};

export default ComponentE;
