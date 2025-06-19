// src/Components/Skills.js
import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

const skills = ["HTML", "CSS", "JavaScript", "React", "GitHub", "Node.js","Java","C","PowerBI"];

const Skills = () => {
  return (
    <motion.div 
      className="skills-section"
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <span key={idx} className="skill-item">{skill}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
