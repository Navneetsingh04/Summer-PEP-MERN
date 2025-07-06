import React, { useContext } from 'react'
import { AppContext } from '../context/AppContenxt'

const Contact = () => {
    const phone = useContext(AppContext)
  return (
    <div>
      <h1>Contact</h1>
      <h2>Phone: {phone}</h2>
    </div>
  )
}

export default Contact
