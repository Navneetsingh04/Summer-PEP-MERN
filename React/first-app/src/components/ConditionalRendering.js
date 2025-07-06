import { useState } from "react";
import LikeCounter from "./LikeCounter";
import Timer from "./Timer";
const ConditionalRendering = () => {
  const [isUpdated, setIsUpdated] = useState(false);

  const handleClick = () => {
    setIsUpdated(!isUpdated);
  };
  return (
    <div>
      <h2>Conditional Rendering Example</h2>
      {isUpdated ? <LikeCounter /> : <Timer />}
      <button onClick={handleClick}>CLick Here</button>
    </div>
  );
};

export default ConditionalRendering;
