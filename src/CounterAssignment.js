import React, { useState } from 'react'

const CounterAssignment = () => {
    const [count,setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Set to Zero</button>
    </div>
  )
}

export default CounterAssignment
