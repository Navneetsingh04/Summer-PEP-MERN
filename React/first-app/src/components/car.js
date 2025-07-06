import React, { useState } from 'react'

const car = () => {
    const [car,setCar] = useState({
        brand: "Tata",
        model: "Punch",
        year: "2024",
        color: "Blue"
    });


  return (
    <div>
      <h1>My {car.brand}</h1>
      <p></p>
    </div>
  )
}

export default car
