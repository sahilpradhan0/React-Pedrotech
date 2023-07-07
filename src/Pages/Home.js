import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../UseContetDemo';

const Home = () => {
  const {username} = useContext(AppContext);
  return (
    <div>
      <h1>Home Page</h1>
      <h2>{username}</h2>
    </div>
  )
}

export default Home
