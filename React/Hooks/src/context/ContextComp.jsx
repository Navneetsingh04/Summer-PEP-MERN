import React, { createContext, useState } from "react";
import ComponentD from "./ComponentD";

export const NameContext = createContext();
export const CollegeContext = createContext();

const ContextComp = () => {
  const [name, setName] = useState("Navneet Singh");

  return (
    <div>
      <NameContext.Provider value={name}>
        <CollegeContext.Provider value={"LPU"}>
          <ComponentD />
        </CollegeContext.Provider>
      </NameContext.Provider>
    </div>
  );
};

export default ContextComp;
