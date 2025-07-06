import React from 'react'
import Child from './child'
const Parent = (props) => {
  return (
    <div>
      <Child name={props.name} />
    </div>
  )
}

export default Parent
