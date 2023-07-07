import React, { useEffect, useState } from 'react'

const Text = () => {
    const [text,setText] = useState("");
    useEffect(() => {
        console.log("Component Mouted");

        //Cleanup function
        return () => {
            console.log("Component Unmounted");
        }
    },[])
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)}/>
      <h1>{text}</h1>
    </div>
  )
}

export default Text
