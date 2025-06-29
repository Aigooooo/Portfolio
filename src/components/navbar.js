import "../css/navbar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'PORTFOLIO', path: '/portfolio' },
  { name: 'GALLERY', path: '/gallery' },
  { name: 'CONTACT', path: '/contact' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLinkClick = () => {
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
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
