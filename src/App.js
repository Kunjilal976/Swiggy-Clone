import React from 'react';
import './App.css';
import Content from './components/content';
import './components/style.css'
import {Route,Routes, BrowserRouter} from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from "./Pages/Navbar";
import Offers from "./Pages/Offer";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu"
import About from "./Pages/About";
import "./Pages/pages.css"

function App() {
  return (
   <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Content/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/signUp" element={<SignUp/>}/>
        <Route  path="/blogs" element={<Offers />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/menu" element={<Menu/>}/>
        <Route  path="about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
