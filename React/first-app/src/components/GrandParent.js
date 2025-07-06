import React from 'react'
import Parent from './Parent'
const GrandParent = (props) => {

  return (
    <div>
      <Parent props = {props.name} />
    </div>
  )
}

export default GrandParent
