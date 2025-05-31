import React from "react";
import { Link } from "react-router-dom";
import "./componentCss/Header.css"; 

function Header() {
  return (
    <header className="portfolio-header">
      <nav className="navbar">
        <h1 className="logo">Muhammad Aliyan</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
