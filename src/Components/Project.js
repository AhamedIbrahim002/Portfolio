import React from "react";
import "./Project.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ERP Module Development",
    description: "Built internal ERP features during my internship at PROPHECY TECHNOLOGIES, including UI and backend modules.",
    tech: "React, Node.js, SQL, VPS",
    link: "/certificates/props.pdf" // Optional: link to project or certificate
  },
  {
    title: "AWS Cloud Deployment Project",
    description: "Created dashboards using Amazon QuickSight and simulated cloud environments using multiple AWS services.",
    tech: "EC2, S3, IAM, RDS, Amplify, QuickSight",
    link: "/certificates/aws-july-august.pdf"
  },
 
];

const Projects = () => {
  return (
    <motion.div 
      className="projects-container"
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="projects-title">Internship Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="tech">{project.tech}</span>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View</a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
