import { useState } from "react";

const Counter = () => {
    const [count,setCount] = useState(0);
      
      function onClickHandler(){
        setCount(count+1)
      }
  return (
    <div>
       <div>
        <button onClick={onClickHandler}>Counter {count}</button>
      </div>
    </div>
  )
}

export default Counter
