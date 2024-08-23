// src/components/Profile.jsx
import React from 'react';
import { auth } from '../firebase'; // Ensure this import path is correct
import './styles/Profile.css'; // Import the profile CSS

const Profile = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut(); // Ensure signOut is awaited if it's a promise
      alert('Logged out successfully!');
      window.location.href = '/login'; // Redirect to login page
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Failed to log out.');
    }
  };

  return (
    <div className="profile-container">
      <h1>Welcome to your Profile</h1>
      <button
        className="logout-button"
        onClick={handleLogout}
        aria-label="Logout"
        title="Logout"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
