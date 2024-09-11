import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Navbar() {
  const location = useLocation();
  const activeLink = location.pathname;

  // State to handle the visibility of the menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h5 className="header-name">Zainab Ghadiyali</h5>
      </div>
      <div className="hamburger-icon" onClick={toggleMenu}>
        {/* Hamburger icon: three lines */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <Link
          to="my-portfolio/"
          className={activeLink === "/my-portfolio/" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to="my-portfolio/about"
          className={activeLink === "/my-portfolio/about" ? "active" : ""}
        >
          About
        </Link>
        <Link
          to="my-portfolio/project"
          className={activeLink === "/my-portfolio/project" ? "active" : ""}
        >
          Projects
        </Link>
        <Link
          to="my-portfolio/skills"
          className={activeLink === "/my-portfolio/skills" ? "active" : ""}
        >
          Skills
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
