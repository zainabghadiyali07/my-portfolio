import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="my-portfolio/" className={activeLink === '/'? 'active':''} onClick={() => handleLinkClick('/')} > Home</Link>
        <Link to="my-portfolio/about" className={activeLink === '/about'? 'active':''} onClick={() => handleLinkClick('about')}>About </Link>
        <Link to="my-portfolio/project"className={activeLink === '/project'? 'active':''} onClick={() => handleLinkClick('project')}>Projects</Link>
      </div>
      </div>
      
    
    
  )
}

export default Navbar