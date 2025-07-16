import React from "react";
import { useNavigate, useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="error">
      <h3>An Error Occured</h3>
      <p>{error.message}</p>
      <button onClick={() => navigate("/")}>Go to home Page</button>
    </div>
  );
};

export default Error;
