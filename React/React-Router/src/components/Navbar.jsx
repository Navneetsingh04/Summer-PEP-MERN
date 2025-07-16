import React from 'react'
import logo from "../assets/logo.png"
import { Link ,NavLink, useNavigate} from 'react-router'
const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <img src={logo} alt="logo"  width={100} />
      <ul>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/products'><li>Products</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
        <NavLink to='/jobs'><li>Jobs</li></NavLink>
      </ul>
      <button onClick={() => navigate('/about' ,{replace: true})}>Get Started</button>
    </div>
  )
}

export default Navbar


// NavLink is used instead of Link to apply active styles automatically to the active route.
// The main difference is that NavLink can accept an `activeClassName` prop to apply styles when the link is active, while Link does not have this feature.

// useNavigate is a hook that provides a function to programmatically navigate to different routes. It can be used to redirect users or navigate based on certain conditions, such as button clicks or form submissions.