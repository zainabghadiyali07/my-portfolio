import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const activeLink = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const links = [
    { path: "my-portfolio/", label: "Home" },
    { path: "my-portfolio/about", label: "About" },
    { path: "my-portfolio/project", label: "Projects" },
    { path: "my-portfolio/skills", label: "Skills" },
  ];

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h5 className="header-name">Zainab Ghadiyali</h5>
      </div>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={closeMenu}
            className={activeLink === `/${link.path}` ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
