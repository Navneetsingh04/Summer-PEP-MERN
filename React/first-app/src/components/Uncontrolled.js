import React, { useRef } from 'react'

const Uncontrolled = () => {
    const nameRef = useRef("");
    const handleSubmit = () => {
        console.log("Typed...", nameRef.current.value);
    }
  return (
    <div>
        <h1>Student form</h1>
        <input ref={nameRef} placeholder='Name' />
        <br/> 
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Uncontrolled
