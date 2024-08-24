import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';

import Resources from './components/Resources';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import ContactDoctor from './components/ContactDoctor'; // Import the new component
import Help from './components/Help'
import './components/styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resources" element={<Resources />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact-doctor" element={<ContactDoctor />} /> {/* Add this line */}
              <Route path="/help" element={<Help />} />
            </Routes>
          </div>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;