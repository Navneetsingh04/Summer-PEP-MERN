import React, { use, useEffect } from 'react'

const Counter1 = ({number}) => {

    useEffect(() => {
        console.log("Function component : Updaing..")

        return () =>{
        console.log("Functional Component : Removed")
    }

    },[number])

  return (
    <div>
      <h1>{number}</h1>
    </div>
  )
}

export default Counter1
