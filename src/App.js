import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import Content from './components/content';
import './components/style.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from './Page/Login';
import SignUp from './Page/SignUp';


import Layout from "./Pages/Layout";
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
    <Router>
      {/* <Navbar/> */}
      <Layout/>
      <Content/>
      <Routes>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/SignUp" element={<SignUp/>}/>
        <Route exact path="/" element={<Layout />}/>
        <Route index element={<Home />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/menu" element={<Menu/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/*" element={<NoPage />} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
