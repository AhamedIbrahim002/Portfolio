// src/Components/Certification.js
import React from "react";
import "./Certification.css";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "AWS Internship (July – August 2024)",
    file: "/certificates/aws-july-august.pdf"
  },
  {
    title: "AWS Internship (November – December 2024)",
    file: "/certificates/aws-nov-december.pdf"
  },
  {
    title: "Nptel-Programming in Java",
    file: "/certificates/Nptel.pdf"
  },
  {
    title: "Prophecy Internship(Feb – Apr 2025) ",
    file: "/certificates/Props.pdf"
  },
   {
    title: "IBM cybersecurity badge ",
    file: "/certificates/IBM.pdf"
  }
];

const Certification = () => {
  return (
    <motion.div
      className="cert-section"
      id="certifications"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <h3>{cert.title}</h3>
            <a 
              href={cert.file} 
              download 
              target="_blank" 
              rel="noopener noreferrer"
              className="download-btn"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certification;
