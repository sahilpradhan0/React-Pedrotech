import React, { useState } from 'react';
import Axios from "axios";

const Excuse = () => {
    const [excuse, setExcuse] = useState("");

    const handleParty = (excuse) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
        .then(res => setExcuse(res.data[0].excuse))

    }
  return (
    <div>
      <h1>Generate an Excuse</h1>
      <button onClick={() =>handleParty("party")}>Party</button>
      <br />
      <button onClick={() =>handleParty("family")}>Family</button>
      <br />
      <button onClick={() =>handleParty("office")}>Office</button>
      <h3>{excuse}</h3>
    </div>
  )
}

export default Excuse
