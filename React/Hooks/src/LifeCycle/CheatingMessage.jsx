import React, { useEffect, useState } from "react";

const CheatingMessage = () => {
  const [change, setChange] = useState(false);

    const handleResize = () => {
        setChange(true);
    }
    const handleNormal = () => {
        setChange(true);
    }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleNormal);
    }
  }, []);

  return (
    <div>
      <h1>{change ? "Cheating Detected" : "No Cheating Detected"}</h1>
    </div>
  );
};

export default CheatingMessage;
