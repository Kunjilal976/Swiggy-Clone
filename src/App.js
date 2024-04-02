import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import Content from './components/content';
import './components/style.css'
import {Route,Routes, BrowserRouter} from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/SignUp';


import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
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
        <Route path='/' element={<Home />} />
        <Route  path="/blogs" element={<Blogs />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/menu" element={<Menu/>}/>
        <Route  path="about" element={<About/>}/>
        <Route  path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
