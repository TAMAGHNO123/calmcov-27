import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, db } from '../firebase'; // Import Firebase and Firestore configuration
import './styles/Auth.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Register user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Create a user document in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        createdAt: new Date(),
        // Add other profile fields as needed
      });

      // Show success toast and redirect to login after 3 seconds
      toast.success('Successfully registered! Redirecting to login...', {
        onClose: () => {
          navigate('/login');
        }, // Redirect to login page after toast closes
        autoClose: 3000, // 3 seconds
      });
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error('This email is already in use.');
      } else if (error.code === 'auth/weak-password') {
        toast.error('Password is too weak.');
      } else {
        console.error('Error registering:', error);
        toast.error('Failed to register.');
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      // Sign in with Google
      const userCredential = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = userCredential.user;

      // Create a user document in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        createdAt: new Date(),
        // Add other profile fields as needed
      });

      // Show success toast and redirect to login after 3 seconds
      toast.success('Successfully signed in with Google! Redirecting to login...', {
        onClose: () => {
          navigate('/login');
        }, // Redirect to login page after toast closes
        autoClose: 3000, // 3 seconds
      });
    } catch (error) {
      console.error('Error signing in with Google:', error);
      toast.error('Failed to sign in with Google.');
    }
  };

  return (
    <div className="auth-container">
      <ToastContainer />
      <h1 className="auth-title">Register</h1>
      <form onSubmit={handleRegister} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="auth-input"
        />
        <button type="submit" className="auth-button">Register</button>
      </form>
      <button onClick={handleGoogleSignIn} className="auth-button">
        Sign in with Google
      </button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Register;
