import React from "react";

const Greet = (props) => {
  console.log(props);
  const { name,branch ,...prop} = props;
  return (
    <div>
      <h1>Hello {props.name}! {props.college} {props.branch}</h1>
    </div>
  );
};
export default Greet;
