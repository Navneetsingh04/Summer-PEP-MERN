import React from 'react'

const Button = (props) => {

    const {btnText,handleClick} = props
    console.log("button component Render")
  return (
    <div>
      <button onClick={handleClick}>{btnText}</button>
    </div>
  )
}

export default Button
