import React from "react";
import { Navigate } from "react-router";

const AdminRoute = (props) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser")) || [];

  const isAuthenticated = user.length
  const isAdmin = user[0]?.role === "navneet@gmail.com"; 

  return isAuthenticated ? props.children : <Navigate to={"/profile"} />;
};

export default AdminRoute;
