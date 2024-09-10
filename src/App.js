import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
      
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        
        <Route path='/skills' element={<Skills/>}/>
      </Routes>
      
    </BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="my-portfolio/" element={<Home />} />
          <Route path="my-portfolio/about" element={<About />} />
          <Route path="my-portfolio/project" element={<Project />} />
          <Route path="my-portfolio/linkedin" element={<LinkedIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
