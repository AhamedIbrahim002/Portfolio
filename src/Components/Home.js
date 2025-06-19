// src/Components/Home.js
import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import profileImage from "../assets/Profile.jpg"; // 👈 Add this line

const Home = () => {
  return (
    <motion.div 
      className="home-container"
         id="Home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* 👇 Add Profile Image Section */}
      <div className="profile-pic-wrapper">
  <a href={profileImage} target="_blank" rel="noopener noreferrer">
    <img src={profileImage} alt="Ahamed Ibrahim" className="profile-pic" />
  </a>
</div>


      <h1 className="home-title">Ahamed Ibrahim Abdul Samadhu</h1>
      <p className="home-role">
        Bridging Code and Cloud | Entry Level Web Developer | Passionate about Data Insights
      </p>
      <p className="home-description">
        As an aspiring web developer with hands-on experience in both full-stack development and cloud technologies...
      </p>
     <div className="home-details">
  <p><strong>📍 Location:</strong> Thanjavur, India</p>
  <p>
    <strong>📧 Email:</strong> <a href="mailto:ahamedibrahiminfo@gmail.com">ahamedibrahiminfo@gmail.com</a>
  </p>
  <p><strong>📞 Phone:</strong> +91 9360978178</p>
  <p className="home-links">
    <a href="https://leetcode.com/u/AhamedIbrahim2003/" target="_blank" rel="noopener noreferrer">🔗 LeetCode</a> |{" "}
    <a href="https://github.com/AhamedIbrahim002" target="_blank" rel="noopener noreferrer">🐙 GitHub</a> |{" "}
    <a href="https://www.linkedin.com/in/ad2003" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
  </p>
</div>

    </motion.div>
  );
};

export default Home;
