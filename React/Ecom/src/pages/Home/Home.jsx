import React, { use } from 'react'
import { useNavigate } from 'react-router'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar';
const Home = () => {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate("/products");
  }

  return (
    <>
    <Navbar/>
    <div className='home'>
        <h1>Home Page</h1>
        <p>Welcome to LPU Store Page</p>
        <br />
        <button onClick={handleClick}>Products</button>
    </div>
    </>
  )
}

export default Home
