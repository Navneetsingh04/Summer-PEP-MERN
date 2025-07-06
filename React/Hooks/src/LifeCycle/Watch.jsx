import React, { useEffect, useState } from "react";

const Watch = () => {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState("start");

  useEffect(() => {
    let interval;
    if (status === "start") {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } 
    if (status === "stop") {
      clearInterval(interval);
    } 

    return () => {
      clearInterval(interval);
    }
  }, [status]);

  const handleMin = () => {
    const min = Math.floor(time/60);
    const sec = time%60;
    return `0${min} Min : ${sec < 10 ? `${sec}` : sec} Sec`;
  }

  return (
    <div>
      <h1>Stop watch</h1>
      <h1>{handleMin()}</h1>
      <div>
        <button onClick={() => setStatus("stop")}>Stop</button>
      </div>
    </div>
  );
};

export default Watch;
