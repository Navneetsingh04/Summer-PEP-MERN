import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Signup.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }
    const userData = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      timestamp: new Date().toISOString(),
    };

    if (password !== confirmPassword) {
      alert("Passwords is not matched");
      return;
    }

    const users = JSON.parse(localStorage.getItem("userData")) || [];
    users.push(userData);
    localStorage.setItem("userData", JSON.stringify(users));
    alert("Registration successful");
    navigate("/signin");
  };

  return (
    <div className="container">
      <form>
        <p className="heading">Sign Up</p>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm your Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={handleRegister}>
          Sign Up
        </button>
        <div className="signup-link">
          Already have an account? <span onClick={() => navigate("/signin")}>Sign In</span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
