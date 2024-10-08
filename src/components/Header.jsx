// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="CalmCove Logo" className="logo" />
        <h1 className="site-title">CalmCove</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/contact-doctor">Contact a Doctor</Link></li> {/* Add this line */}
          <li><Link to="/help">Help</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;