import React, { useContext } from "react";
import { CollegeContext, NameContext } from "./ContextComp";

const ComponentF = () => {
  return (
    <div>
         <h3>From component F</h3>
      <NameContext.Consumer>
        {(name) => {
          return (
            <CollegeContext.Consumer>
              {(college) => {
                return (
                  <h1>
                    Hello {name} from {college}
                  </h1>
                );
              }}
            </CollegeContext.Consumer>
          );
        }}
      </NameContext.Consumer>
    </div>
  );
};

export default ComponentF;
