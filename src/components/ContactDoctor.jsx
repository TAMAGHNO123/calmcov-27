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
    <div className="contact-doctor-container">
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

      <h2>Meet Our Professionals</h2>
      <div className="professional-list">
        <section className="professional-item">
          <img src="/download (12).jpeg" alt="Dr. John Doe" />
          <div>
            <h3>Dr. John Doe</h3>
            <p>Specialty: Clinical Psychology</p>
            <p>Dr. Doe specializes in cognitive-behavioral therapy for anxiety and depression.</p>
          </div>
        </section>

        <section className="professional-item">
          <img src="/images.jpeg" alt="Dr. Jane Smith" />
          <div>
            <h3>Dr. Jane Smith</h3>
            <p>Specialty: Psychiatry</p>
            <p>Dr. Smith has a focus on medication management for mood disorders.</p>
          </div>
        </section>

        <section className="professional-item">
          <img src="/images (5).jpeg" alt="Dr. Emily White" />
          <div>
            <h3>Dr. Emily White</h3>
            <p>Specialty: Child Psychology</p>
            <p>Dr. White works with children and adolescents, specializing in developmental disorders.</p>
          </div>
        </section>

        <section className="professional-item">
          <img src="/download.jpeg" alt="Dr. Michael Brown" />
          <div>
            <h3>Dr. Michael Brown</h3>
            <p>Specialty: Marriage and Family Therapy</p>
            <p>Dr. Brown provides counseling for couples and families in crisis.</p>
          </div>
        </section>

        <section className="professional-item">
          <img src="/download (18).jpeg" alt="Dr. Alice Green" />
          <div>
            <h3>Dr. Alice Green</h3>
            <p>Specialty: Neuropsychology</p>
            <p>Dr. Green specializes in brain-behavior relationships and cognitive disorders.</p>
          </div>
        </section>

        <section className="professional-item">
          <img src="/images (1).jpeg" alt="Dr. Tom Blue" />
          <div>
            <h3>Dr. Tom Blue</h3>
            <p>Specialty: Addiction Medicine</p>
            <p>Dr. Blue focuses on treating patients with substance use disorders.</p>
          </div>
        </section>

        <section className="professional-item">
          <img src="/download (14).jpeg" alt="Dr. Anna Yellow" />
          <div>
            <h3>Dr. Anna Yellow</h3>
            <p>Specialty: Geriatric Psychiatry</p>
            <p>Dr. Yellow specializes in mental health care for older adults.</p>
          </div>
        </section>

        <section className="professional-item">
          <img src="/download (13).jpeg" alt="Dr. James Violet" />
          <div>
            <h3>Dr. James Violet</h3>
            <p>Specialty: Occupational Therapy</p>
            <p>Dr. Violet provides therapeutic support for individuals to develop, recover, or maintain daily living and work skills.</p>
          </div>
        </section>
        <section className="professional-item">
          <img src="/male_doc.jpeg" alt="Dr. James Violet" />
          <div>
            <h3>Dr. Samuel Harris</h3>
            <p>Specialty: Occupational Therapy</p>
            <p>Dr. Violet provides therapeutic support for individuals to develop, recover, or maintain daily living and work skills.</p>
          </div>
        </section>
        <section className="professional-item">
          <img src="/download (17).jpeg" alt="Dr. James Violet" />
          <div>
            <h3>Dr. Benjamin Lee</h3>
            <p>Specialty: Occupational Therapy</p>
            <p>Dr. Violet provides therapeutic support for individuals to develop, recover, or maintain daily living and work skills.</p>
          </div>
        </section>
        <section className="professional-item">
          <img src="/download (16).jpeg" alt="Dr. James Violet" />
          <div>
            <h3>Dr. John Nightingale</h3>
            <p>Specialty: Occupational Therapy</p>
            <p>Dr. Violet provides therapeutic support for individuals to develop, recover, or maintain daily living and work skills.</p>
          </div>
        </section>
        <section className="professional-item">
          <img src="/download (15).jpeg" alt="Dr. James Violet" />
          <div>
            <h3>Dr. Michael Pine</h3>
            <p>Specialty: Occupational Therapy</p>
            <p>Dr. Violet provides therapeutic support for individuals to develop, recover, or maintain daily living and work skills.</p>
          </div>
        </section>
        <section className="professional-item">
          <img src="/download (19).jpeg" alt="Dr. James Violet" />
          <div>
            <h3>Dr. Sarah Willow</h3>
            <p>Specialty: Occupational Therapy</p>
            <p>Dr. Violet provides therapeutic support for individuals to develop, recover, or maintain daily living and work skills.</p>
          </div>
        </section>
      </div>

      <div className="more-button-container">
        <button className="more-button">Load More Professionals</button>
      </div>
    </div>
  );
};

export default ContactDoctor;
