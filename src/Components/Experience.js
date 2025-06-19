import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Development Intern",
    company: "PROPHECY TECHNOLOGIES",
    duration: "February2025-April 2025",
    location: "Chennai, Tamil Nadu",
    description: [
      "Developed and integrated key modules of an internal ERP system using React, Node.js, and SQL.",
      "Participated in debugging and code optimization, reducing load time by 30%.",
      "Deployed the application on an Ubuntu server via IONOS VPS."
    ],
    tech: ["React", "Node.js", "SQL", "Ubuntu", "IONOS VPS"],
    certificates: [
      { name: "Internship Certificate", file: "/certificates/props.pdf" }
    ]
  },
  {
    role: "Cloud Intern – AWS",
    company: "VDART GLOBAL CAPABILITIES",
    duration: "July – August & November – December 2024",
    location: "Trichy, Tamil Nadu",
    description: [
      "Created interactive dashboards using Amazon QuickSight to improve data analytics visibility.",
      "Gained hands-on experience with AWS services (EC2, S3, IAM, RDS, Amplify) through a mock cloud deployment project."
    ],
    tech: ["AWS", "EC2", "S3", "IAM", "RDS", "Amplify", "QuickSight"],
    certificates: [
      { name: "July – August 2024", file: "/certificates/aws-july-august.pdf" },
      { name: "November – December 2024", file: "/certificates/aws-nov-dec.pdf" }
    ]
  }
];

const Experience = () => {
  return (
    <motion.div
      className="experience-section"
      id="experience"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div className="exp-card" key={index}>
          <h3>
            {exp.role} <span className="company">@ {exp.company}</span>
          </h3>
          <span className="exp-time">
            {exp.duration} | {exp.location}
          </span>
          <ol className="exp-points">
            {exp.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ol>
          <div style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>
            <strong>Technologies:</strong> {exp.tech.join(", ")}
          </div>

          {/* Certificate Download Buttons */}
          {exp.certificates &&
            exp.certificates.map((cert, certIdx) => (
              <a
                key={certIdx}
                href={cert.file}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="exp-download-btn"
              >
                Download Certificate ({cert.name})
              </a>
            ))}
        </div>
      ))}
    </motion.div>
  );
};

export default Experience;
