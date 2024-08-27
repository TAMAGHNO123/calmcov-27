// src/components/Footer.jsx
import React from 'react';
import './styles/Footer.css'; // Ensure this path is correct

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 CalmCove. All rights reserved.</p>
      <p>Follow us on:
        <a href="https://x.com/calm_cove4you" target="_blank" rel="noopener noreferrer"> Twitter</a>,
        <a href="https://www.facebook.com/profile.php?id=61564454926612" target="_blank" rel="noopener noreferrer"> Facebook</a>,
        <a href="https://www.instagram.com/calmcov2024/" target="_blank" rel="noopener noreferrer"> Instagram</a>
      </p>
    </footer>
  );
};

export default Footer;