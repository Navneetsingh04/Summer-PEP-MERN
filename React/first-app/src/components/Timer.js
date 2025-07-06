import React, { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const startTimer = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };
  const stopTimer = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  };
  const resetTimer = () => {
    clearInterval(intervalId);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>
        Timer: {time} {time <= 9 ? "Second" : "Seconds"}
      </h1>
      <div>
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={stopTimer} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={resetTimer}>Reset</button>
        <p>{isRunning ? "Timer is running" : "Timer is stopped"}</p>
      </div>
    </div>
  );
};

export default Timer;
