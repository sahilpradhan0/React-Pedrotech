import React, { useState } from 'react';
import Axios  from 'axios';

const PredictAge = () => {
    const [input, setInput] = useState("");
    const [info,setInfo] = useState(null);
    const handleClick = () => {
        Axios.get(`https://api.agify.io/?name=${input}`)
        .then(resp => {
            setInfo(resp.data);
            setInput('');  
            console.log(resp.data);
        })
        // (resp.data.age)
    }
  return (
    <div>
        <input type="text" placeholder='Enter your name' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={handleClick}>Predict Age</button>
        <h3>Name : {info?.name}</h3>
        <h3>Predicted Age : {info?.age}</h3>
        <h3>Count : {info?.count}</h3>
    </div>
  )
}

export default PredictAge
