import React, { useState } from 'react';
import './styles/Help.css'; // Ensure the path is correct

const Help = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/send', {
        method: 'POST', // Ensure the method is POST
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        const errorText = await response.text();
        console.error('Failed to send message:', errorText);
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Feel free to reach out for any inquiries or support.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
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

export default Help;
