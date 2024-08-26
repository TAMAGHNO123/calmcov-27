import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Resources from './components/Resources';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import ContactDoctor from './components/ContactDoctor';
import Help from './components/Help';
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
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact-doctor" element={<ContactDoctor />} />
              <Route path="/help" element={<Help />} />
              <Route path="*" element={<Navigate to="/home" />} /> {/* Redirect unknown routes to Home */}
            </Routes>
          </div>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect unknown routes to Login */}
        </Routes>
      )}
    </Router>
  );
};

export default App;
