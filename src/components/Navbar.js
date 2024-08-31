import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function Navbar() {
  const location = useLocation();
  const[activeLink,setActiveLink]=useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  
 const handleLinkClick = (link) => {
  setActiveLink(link);
 };
  
  return (
    

    <div className="navbar">
      <div className="navbar-left">
        <h5>Zainab Ghadiyali</h5>
      </div>
      
      <div className="navbar-right">
        <a href="/" className={activeLink === '/'? 'active':''} onClick={() => handleLinkClick('/')} > Home</a>
        <a href="/about" className={activeLink === '/about'? 'active':''} onClick={() => handleLinkClick('about')}>About </a>
        <a href="/project"className={activeLink === '/project'? 'active':''} onClick={() => handleLinkClick('project')}>Projects</a>
      </div>
      </div>
      
    
    
  )
}

export default Navbar