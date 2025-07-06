import React, { useMemo, useState } from 'react'

const MemoComp = () => {
    
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);

    const handleCount = useMemo(() => {
        console.log("Function called..");
        let a = count;
        for(let i = 0;i<2e9;i++){
            a++;
        }
        return a;
    },[count])
 

  return (
    <div>
      <h1>{handleCount}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Update Count</button>
      <button onClick={() => setCount2((prev) => prev + 2)}>Update Count2 {count2}</button>
    </div>
  )
}

export default React.memo(MemoComp)
