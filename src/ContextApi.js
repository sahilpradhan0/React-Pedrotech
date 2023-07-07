import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import Navbar from './Component/Navbar'

const ContextApi = () => {
    const [username,setUserName] = useState("Sahil");
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path='/' element={<Home username={username}/>}></Route>
          <Route path='/about' element={<About username={username} setUserName={setUserName}/>}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default ContextApi
