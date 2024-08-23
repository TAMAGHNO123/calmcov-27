import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../firebase';
import './styles/Auth.css';

const RegisterPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        console.log('Recaptcha successful!'); // Debugging
        handlePhoneSignIn();
      }
    }, auth);
  };

  const handlePhoneSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setVerificationId(confirmationResult.verificationId);
      console.log('OTP sent, verificationId:', confirmationResult.verificationId); // Debugging
      alert('OTP sent!');
      setIsLoading(false); // Stop loading after OTP is sent
    } catch (error) {
      console.error('Error signing in with phone number:', error);
      alert('Failed to sign in with phone number.');
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithCredential(auth, credential);
      console.log('Successfully registered!');
      alert('Successfully registered!');
      navigate('/home');
      setIsLoading(false); // Stop loading after successful registration
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Failed to verify OTP.');
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <>
          <h1>Register with Phone</h1>
          <form onSubmit={handlePhoneSignIn}>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <div id="recaptcha-container"></div>
            <button type="submit">Send OTP</button>
          </form>
          {verificationId && (
            <form onSubmit={handleVerifyOtp}>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button type="submit">Verify OTP</button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default RegisterPhone;
