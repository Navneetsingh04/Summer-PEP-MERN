import React from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h2>Error 404 Page Not Found</h2>
      <br />
      <button onClick={() => navigate("/")}>Go to home Page</button>
    </div>
  )
}

export default NotFound
