import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./components/About";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LinkedIn from "./components/LinkedIn";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='my-portfolio/' element={<Home/>}/>
        <Route path='my-portfolio/about' element={<About/>}/>
        <Route path='my-portfolio/project' element={<Project/>}/>
        <Route path='my-portfolio/linkedin' element={<LinkedIn/>}/>
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
