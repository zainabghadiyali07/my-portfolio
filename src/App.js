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
      <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/linkedin' element={<LinkedIn/>}/>
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
