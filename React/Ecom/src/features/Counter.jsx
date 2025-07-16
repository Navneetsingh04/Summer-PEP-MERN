import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,reset } from "../slices/CounterSlice";
import { increment as increment2, decrement as decrement2, reset as reset2 } from "../slices/CounterSlice2";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const count2 = useSelector((state) => state.counter2.value);
  const dispatch = useDispatch();
  return (
    <>
    <div style={{ textAlign: "center", margin:"20px" }}>
    <h1> Counter1: {count}</h1>
    <br />
      <button onClick={() => dispatch(increment())}>Increament</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
    <br />
    <div style={{ textAlign: "center", margin:"20px" }}>
    <h1> Counter2: {count2}</h1>
    <br />
      <button onClick={() => dispatch(increment2())}>Increament by 5</button>
      <button onClick={() => dispatch(decrement2())}>Decrement by 5</button>
      <button onClick={() => dispatch(reset2())}>Reset</button>
    </div>
    </>
  );
};

export default Counter;
