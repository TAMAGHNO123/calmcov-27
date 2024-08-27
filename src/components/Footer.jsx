// src/components/Footer.jsx
import React from 'react';
import './styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 CalmCove. All rights reserved.</p>
      <p>Follow us on:
        <a href="https://x.com/calm_cove4you" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} /> Twitter
        </a>,
        <a href="https://www.facebook.com/profile.php?id=61564454926612" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} /> Facebook
        </a>,
        <a href="https://www.instagram.com/calmcov2024/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
      </p>
    </footer>
  );
};

export default Footer;
