import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Navbar from "./Component/Navbar";

export const AppContext = createContext();

const UseContextDemo = () => {
  const [username, setUserName] = useState("Sahil");
  return (
    <div>
      <AppContext.Provider value={{ username, setUserName }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
};

export default UseContextDemo;
