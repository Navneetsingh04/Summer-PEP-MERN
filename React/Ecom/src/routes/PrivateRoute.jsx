import React from 'react'
import { Navigate } from 'react-router';

const PrivateRoute = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser")) || [];

  const isAuthenticated = user.length;

  return isAuthenticated ? props.children : <Navigate to={"/signup"} />
}

export default PrivateRoute
