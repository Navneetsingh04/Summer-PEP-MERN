import React, { useContext } from 'react'
import { AppContext } from '../context/AppContenxt'

const Footer = () => {

    const phone = useContext(AppContext)
  return (
    <div>
      <h1>Footer</h1>
      <h2>Phone: {phone}</h2>
    </div>
  )
}

export default Footer
