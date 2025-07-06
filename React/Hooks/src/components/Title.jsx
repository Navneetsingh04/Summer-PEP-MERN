import React from 'react'

const Title = (props) => {
    const {text} = props;
    console.log("Title component render");
  return (
    <div>
      {text}
    </div>
  )
}

export default Title
