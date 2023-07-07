import React from "react";
import ChangeProfile from "../Component/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../UseContetDemo";

const About = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>About Page</h1>
      <h2>{username}</h2>
      <ChangeProfile />
    </div>
  );
};

export default About;
