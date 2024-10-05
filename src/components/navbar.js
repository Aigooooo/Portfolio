import "../css/navbar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log(isOpen);
    setIsOpen((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    console.log("Menu closed");
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "active" : ""}`}></div>
        <div className={`line ${isOpen ? "active" : ""}`}></div>
        <div className={`line ${isOpen ? "active" : ""}`}></div>
      </div>
      <ul className={`menu ${isOpen ? "open" : "close"}`}>
        <li>
          <NavLink
            to="/home"
            onClick={handleLinkClick}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={handleLinkClick}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <a href="">PORTFOLIO</a>
        </li>
        <li>
          <a href="">GALLERY</a>
        </li>
        <li>
          <a href="">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
