import React, { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../UseContetDemo';

const ChangeProfile = () => {
  const {username, setUserName} = useContext(AppContext);
    const [newUserName, setNewUserName] = useState("");
  return (
    <div>
      <input type='text'onChange={(e) => setNewUserName(e.target.value)}/>
      <button onClick={() => setUserName(newUserName)}>Change User Name</button>
    </div>
  )
}

export default ChangeProfile
