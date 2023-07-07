import React from 'react';
import { useState } from 'react';

const States = () => {
    // const [showText,setShowText] = useState(true);
    const [textColor,setTextColor] = useState("black");

  return (
    <div>
        {/* {showText ? <button onClick={() => setShowText(false)}>Hide</button> : <button onClick={() => setShowText(true)}>Show</button>} */}
        {/* <button onClick={() => setShowText(!showText)}>Show/Hide</button>
        {showText && <h1>HI MY NAME IS SAHIL</h1>} */}

        <button onClick={() => setTextColor(textColor === "black" ? "red" : "black")}>Show/Hide</button>
        <h1 style={{color : textColor}}>HI MY NAME IS SAHIL</h1>
    </div>
  )
}

export default States
