import React from 'react'
import { NavLink } from 'react-router'
import './Navbar.css'
const Navbar = () => {
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
        <button className='logout-btn' onClick={() => console.log("logout successfully")}> logout</button>
      </header>
    </>
  )
}

export default Navbar
