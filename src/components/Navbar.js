import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🦀 Cangrejito Creativo
        </Link>
        
        <button 
          className={`menu-toggle ${menuActive ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuActive(false)}>Inicio</Link></li>
          <li><Link to="/quienes-somos" onClick={() => setMenuActive(false)}>Quiénes Somos</Link></li>
          <li><Link to="/acerca-de" onClick={() => setMenuActive(false)}>Acerca de</Link></li>
          <li><Link to="/contacto" onClick={() => setMenuActive(false)}>Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;