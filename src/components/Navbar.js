import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const activeLink = location.pathname;

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h5>Zainab Ghadiyali</h5>
      </div>
      <div className="navbar-right">
        <Link
          to="my-portfolio/"
          className={activeLink === "/my-portfolio/" ? "active" : ""}
        >
          {" "}
          Home
        </Link>
        <Link
          to="my-portfolio/about"
          className={activeLink === "/my-portfolio/about" ? "active" : ""}
        >
          About{" "}
        </Link>
        <Link
          to="my-portfolio/project"
          className={activeLink === "/my-portfolio/project" ? "active" : ""}
        >
          Projects
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
