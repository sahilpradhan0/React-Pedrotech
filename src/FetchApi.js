import React, { useEffect, useState } from 'react'
import Axios from 'axios'
const FetchApi = () => {

    const [catFact,setCatFact] = useState("")
    const handleClick = () => {
        // fetch("https://catfact.ninja/fact")
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data.fact);
        //     setCatFact(data.fact);
        // })
        
        Axios.get("https://catfact.ninja/fact")
        .then(res => setCatFact(res.data.fact))
    } 
    useEffect(() => {
        handleClick();
    },[])
  return (
    <div>
      <button onClick={handleClick}>Generate Cat Fact</button>
      <h3>{catFact}</h3>
    </div>
  )
}

export default FetchApi
