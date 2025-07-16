import React from "react";
import { Navigate } from "react-router";

function AuthRoute(props) {
  const user = JSON.parse(localStorage.getItem("loggedInUser")) || [];
  const isAuthenticated = user.length;

  return isAuthenticated ? <Navigate to={"/"} /> : props.children;
}

export default AuthRoute;