import React, { useState } from 'react'

const Listner = () => {

  const [change,setChange] = useState(false);

    window.addEventListener("resize" ,() =>{
        console.log("Window Resize")
    })
  return (
    <div>
      Listner
    </div>
  )
}

export default Listner
