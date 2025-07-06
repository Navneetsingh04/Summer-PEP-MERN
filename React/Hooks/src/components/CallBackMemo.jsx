import React, { useCallback, useState } from "react";
import Title from "./Title";
import Button from "./Button";

const CallBackMemo = () => {
  const [counterone, setCounterone] = useState(0);
  const [countertwo, setCountertwo] = useState(0);

  console.log("CallBackMemo component Render!");
  const handleCounterone = () => {
    setCounterone((prev) => prev + 1);
  };
  const handleCountertwo = useCallback(() => {
    setCountertwo((prev) => prev + 1);
  }, [countertwo]);

  return (
    <div>
      <h1>UseCallback </h1>
      <Title text={counterone} />
      <Button btnText={"counterone"} handleClick={handleCounterone} />
      <Title text={countertwo} />
      <Button btnText={"countertwo"} handleClick={handleCountertwo} />
    </div>
  );
};

export default CallBackMemo;
