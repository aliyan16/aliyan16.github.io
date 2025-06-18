import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faBars } from '@fortawesome/free-solid-svg-icons';
import "./componentCss/Header.css";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const handleDownload = () => {
    const resumeUrl = '/AliyanResearchResume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Muhammad_Aliyan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="portfolio-header">
      <nav className="navbar">
        <h1 className="logo">Muhammad Aliyan</h1>
        
        <button 
          className="menu-toggle" 
          onClick={() => setMenuActive(!menuActive)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuActive(false)}>Home</Link></li>
          <li><Link to="/projects" onClick={() => setMenuActive(false)}>Projects</Link></li>
          <li> <Link to='/services' onClick={()=> setMenuActive(false)} >Services</Link> </li>
          <li>
            <button className="download-btn" onClick={handleDownload}>
              Download Resume <FontAwesomeIcon icon={faDownload} className="download-icon" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;