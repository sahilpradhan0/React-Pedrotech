import React from 'react';
import User from './User';

const Lists = () => {
    // const names = ["Sahil","Anmol","Aditya","Krish","Rehan"];
    const users = [
        {name : "Sahil", age : 23},
        {name : "Anmol", age : 22},
        {name : "Aditya", age : 21},
        {name : "Krish", age : 19},
        {name : "Rehan", age : 7}
    ]
  return (
    <div>
        {/* { names.map((name) => 
            <h1>{name}</h1>
        )} */}

        {
            users.map((user) => {
                return (
                    <User name={user.name} age={user.age}/>
                )
            })
        }
    </div>
  )
}

export default Lists
