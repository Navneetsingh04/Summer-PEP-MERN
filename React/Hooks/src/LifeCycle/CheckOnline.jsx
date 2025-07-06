import React, { useEffect, useState } from "react";

const CheckOnline = () => {
  const [check, SetCheck] = useState(navigator.onLine);

  const handleOnline = () => {
    SetCheck(true);
  };

  const handleOffline = () => {
    SetCheck(false);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    }
  }, []);

  return (
    <div>
      <h1>Internet Check</h1>
      <h2>{check ? "Online " : "offline"}</h2>
    </div>
  );
};

export default CheckOnline;
