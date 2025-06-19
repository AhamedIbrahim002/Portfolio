// src/Components/Education.js
import React from "react";
import "./Education.css";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div 
      className="education-section"
      id="education"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Education</h2>

      <div className="edu-card">
        <h3>Bachelor of Technology - Information Technology</h3>
        <span className="edu-time">2021 – 2025 | Anjalai Ammal Mahalingam Engineering College,
[Anna University]-Tiruvarur, Tamil Nadu
</span>
        <p><strong>CGPA:</strong> 7.68 / 10</p>
        <ul className="edu-points">
        </ul>
      </div>

      <div className="edu-card">
        <h3>Higher Secondary Certificate (HSC)</h3>
        <span className="edu-time">2019 – 2021 |Fathima Matriculation Higher Secondary School –
Kovilur, Tamil Nadu
</span>
        <p><strong>Percentage:</strong> 86.06%</p>
        <ul className="edu-points">
         
    
        </ul>
      </div>
    </motion.div>
  );
};

export default Education;
