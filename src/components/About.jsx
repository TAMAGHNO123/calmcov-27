import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Welcome to CalmCove, Our mission is to provide a safe harbor where individuals can explore, understand, and find support for various mental health challenges.
      </p>
      <h2>Here’s what you’ll discover at CalmCove:</h2>
      {/* Existing sections */}
      <section className="about-section">
        <img src="/WhatsApp Image 2024-07-09 at 14.24.17_d940fe16.jpg" alt="Comprehensive Information" className="about-image" />
        <div>
          <h3>Comprehensive Information</h3>
          <p>
            Explore a curated collection of mental health issues, each accompanied by clear descriptions. Whether it’s anxiety, depression, or stress, we’ve got you covered. Dive into the nuances of each condition, understanding its impact on daily life and relationships.
          </p>
        </div>
      </section>
      <section className="about-section">
        <img src="/WhatsApp Image 2024-07-09 at 14.24.18_f8224979.jpg" alt="Holistic Solutions" className="about-image" />
        <div>
          <h3>Holistic Solutions</h3>
          <p>
            Beyond awareness, we offer practical solutions. Discover coping strategies, self-care practices, and evidence-based approaches to manage mental health challenges. Our goal is to empower you with actionable steps toward well-being.
          </p>
        </div>
      </section>
      <section className="about-section">
        <img src="/WhatsApp Image 2024-07-09 at 14.24.19_247cd6f7.jpg" alt="In-Depth Articles" className="about-image" />
        <div>
          <h3>In-Depth Articles</h3>
          <p>
            Delve into our rich library of articles written by experts. From mindfulness techniques to understanding trauma, our content covers a wide spectrum. Stay informed, inspired, and equipped to navigate life’s emotional tides.
          </p>
        </div>
      </section>
      <section className="about-section">
        <img src="/WhatsApp Image 2024-07-09 at 14.24.19_8e6b5c18.jpg" alt="Connecting with Professionals" className="about-image" />
        <div>
          <h3>Connecting with Professionals</h3>
          <p>
            Soon, CalmCove will introduce a network of compassionate doctors and counselors. Whether you seek guidance or need someone to listen, we’ll be here. Your mental health journey is not solitary; it’s a shared voyage.
          </p>
        </div>
      </section>

      {/* New section */}
      <h2>Meet Our Professionals</h2>
      <div className="professional-list">
        <section className="professional-item">
         <img src="/download (12).jpeg" alt="" />
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
          <img src="/images (4).jpeg" alt="Dr. Laura Green" />
          <div>
            <h3>Dr. Laura Green</h3>
            <p>Specialty: Behavioral Therapy</p>
            <p>Dr. Green focuses on behavioral therapy for obsessive-compulsive disorder.</p>
          </div>
        </section>

        <section className="professional-item">
          <img src="/images (2).jpeg" alt="Dr. Robert Davis" />
          <div>
            <h3>Dr. Robert Davis</h3>
            <p>Specialty: Substance Abuse Counseling</p>
            <p>Dr. Davis offers counseling for individuals battling addiction.</p>
          </div>
        </section>

        <section className="professional-item">
          <img src="/images (3).jpeg" alt="Dr. Linda Harris" />
          <div>
            <h3>Dr. Linda Harris</h3>
            <p>Specialty: Neuropsychology</p>
            <p>Dr. Harris specializes in brain-behavior relationships and rehabilitation.</p>
          </div>
        </section>

        <section className="professional-item">
          <img src="/images (1).jpeg" alt="Dr. Mark Wilson" />
          <div>
            <h3>Dr. Mark Wilson</h3>
            <p>Specialty: Trauma Counseling</p>
            <p>Dr. Wilson helps clients navigate post-traumatic stress and recovery.</p>
          </div>
        </section>

        <section className="professional-item">
          <img src="/download (14).jpeg" alt="Dr. Sarah Thompson" />
          <div>
            <h3>Dr. Sarah Thompson</h3>
            <p>Specialty: Eating Disorders</p>
            <p>Dr. Thompson provides therapy for individuals with eating disorders.</p>
          </div>
        </section>

        <section className="professional-item">
          <img src="/download (13).jpeg" alt="Dr. James Lee" />
          <div>
            <h3>Dr. James Lee</h3>
            <p>Specialty: Geriatric Psychiatry</p>
            <p>Dr. Lee focuses on mental health care for older adults.</p>
          </div>
        </section>
      </div>

      {/* Next page or more button */}
      <div className="more-button-container">
        <button className="more-button">More Professionals</button>
      </div>
    </div>
  );
};

export default About;
