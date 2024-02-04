import React from 'react';
import './About.css'; // Assuming you have a separate CSS file for styling

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-content">
          <h2>About Us</h2>
          <p className="about-paragraph">
            Welcome to our website! We are a dedicated team passionate about providing high-quality services and products to our customers.
          </p>
          <p className="about-paragraph">
            Our mission is to connect those who are in need of blood donation with willing donors.
          </p>
          <p className="about-paragraph">
            Feel free to explore our website to learn more about what we offer and how we can make a positive impact in our community.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
