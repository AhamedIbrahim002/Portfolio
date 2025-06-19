// src/Components/About.js
import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      className="about-section"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>About Me</h2>
      <div className="about-cards">
        <div className="about-card">
          <h3>Who I Am</h3>
          <p>
            I’m a highly curious and driven IT student with a passion for building clean, user-focused web experiences. I thrive on solving problems, learning new technologies, and translating ideas into digital solutions.
          </p>
        </div>
        <div className="about-card">
          <h3>How I Work</h3>
          <p>
            I enjoy collaborating in teams, using tools like Git and Agile methodologies to stay organized and productive. I believe good communication is as important as good code.
          </p>
        </div>
        <div className="about-card">
          <h3>My Aspirations</h3>
          <p>
            I aim to become a full-stack developer who not only writes efficient code but also contributes meaningfully to product design and cloud infrastructure. I'm especially excited by the fields of cloud-native development and data visualization.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
