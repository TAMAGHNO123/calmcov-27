import React, { useState, useEffect } from 'react';
import './styles/Contact.css'; // Make sure this path is correct

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check localStorage for submission status on component mount
    const submissionStatus = localStorage.getItem('contactFormSubmitted');
    if (submissionStatus === 'true') {
      setIsSubmitted(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate successful form submission using fetch API
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Form submission response:', data);
      setIsSubmitted(true);
      localStorage.setItem('contactFormSubmitted', 'true'); // Save submission status
      setFormData({ name: '', email: '', message: '' }); // Clear form
      alert('Message sent successfully!'); // Optional: Alert the user
    })
    .catch((error) => {
      console.error('Error during form submission:', error);
      alert('There was an error sending your message. Please try again later.');
    });
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Feel free to reach out for any inquiries or support.</p>
      {isSubmitted ? (
        <p>Your message has been submitted. Thank you!</p>
      ) : (
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
      )}
      <p>Email: <a href="mailto:supportcalmcove@gmail.com">supportcalmcove@gmail.com</a></p>
      <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
      <p>Address: 123 Mental Health St, Wellness City, HC 12345</p>
    </div>
  );
};

export default Contact;