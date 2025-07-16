import React from "react";
import "./Footer.css";
import { NavLink } from "react-router";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-logo">
          <h1>LPU Store</h1>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj5ex_8N_q5md4hGwQ5yE6Q3Pq-t5UgwU14w&s"
              alt="lpu-logo"
            />
          </li>
        </div>

        <div className="footer-right">
          <h2>Quick Links</h2>
          <ul className="footer-links">
            <li>
              <NavLink to={'/home'}>Home </NavLink>
            </li>
            <li>
              <NavLink to={'/dashboard'}>Dashboard </NavLink>
            </li>
            <li>
              <NavLink to={'/products'} >Products</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
