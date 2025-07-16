import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import SignIn from "../Login/SignIn";
import "./Navbar.css";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    const userData = JSON.parse(localStorage.getItem("loggedInUser")) || [];
    if (userData && userData.length > 0) {
      localStorage.removeItem("loggedInUser");
      alert("Logout successful");
      navigate("/");
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("loggedInUser")) || [];
    if (userData && userData.length > 0) {
      setUser(userData[0]);
    } else {
      setUser(null);
    }
  }, [localStorage.getItem("loggedInUser")]);

  return (
    <>
      <header>
        <h1>LPU Store</h1>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/about"}>About Us</NavLink>
          <NavLink to={"/profile"}>Profile</NavLink>
        </nav>
        <div className="right-section">
          {user ? (
            <>
              <span className="username"> <Avatar/>{user.username}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <NavLink to={"/signin"}>
              <button>Login</button>
            </NavLink>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;

