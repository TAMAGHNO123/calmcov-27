import React, { useState } from 'react';
import './styles/ContactDoctor.css';

const ContactDoctor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to an API or email
    console.log(formData);
    alert('Your message has been sent!');
  };

  return (
    <div className="contact-doctor">
      <h1>Contact a Doctor</h1>
      <p>If you have any concerns or need advice, please fill out the form below to contact a healthcare professional.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        
        <button type="submit">Send Message</button>
      </form>
      <p>Email: <a href="mailto:supportcalmcove@gmail.com">supportcalmcove@gmail.com</a></p>
      <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
      <p>Address: 123 Mental Health St, Wellness City, HC 12345</p>
    </div>
  );
};

export default ContactDoctor;
