import React, { useState, useEffect } from 'react';
import { useLocation,Link } from 'react-router-dom';
function Navbar() {
  const location = useLocation();
  const[activeLink,setActiveLink]=useState(location.pathname);
  console.log(location.pathname)
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
        <Link to="/" className={activeLink === '/'? 'active':''} onClick={() => handleLinkClick('/')} > Home</Link>
        <Link to="/about" className={activeLink === '/about'? 'active':''} onClick={() => handleLinkClick('about')}>About </Link>
        <Link to="/project"className={activeLink === '/project'? 'active':''} onClick={() => handleLinkClick('project')}>Projects</Link>
        <Link to="/skills"className={activeLink === '/skills'? 'active':''} onClick={() => handleLinkClick('skills')}>Skills</Link>
        
      </div>
      </div>
      
    
    
  )
}

export default Navbar