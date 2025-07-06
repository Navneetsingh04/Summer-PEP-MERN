import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState("start");

  useEffect(() => {
    let interval;
    if (status === "start") {
      interval = setInterval(() => {
        console.log(time)
        setTime((prev) => prev + 1);
      }, 1000);
    } 
    if (status === "stop") {
      clearInterval(interval);
    } 
    // if (status === "reset") {
    //   setTime(0);
    //   clearInterval(interval);
    // }

    return () => {
      clearInterval(interval);
    }
  }, [status]);

  return (
    <div>
      <h1>Stop watch</h1>
      <h1>{time}</h1>
      <div>
        {/* <button onClick={() => setStatus("start")}>Start</button> */}
        <button onClick={() => setStatus("stop")}>Stop</button>
        {/* <button onClick={() => setStatus("reset")}>Reset</button> */}
      </div>
    </div>
  );
};

export default StopWatch;
