import React from "react";
import "./Footer.css";
import { FaInstagram, FaXTwitter, FaLinkedin, FaBriefcase } from "react-icons/fa6"; // using Fa6 for X (Twitter)

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-icons">
        <a href="https://www.instagram.com/dusk_soulx?igsh=MTRiNXNpcjhoYW9mMA==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
          
        <a href="https://x.com/Ahamed_Ad10?t=feV8Yq5IuTKRkQ_nT6NbCA&s=08" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
        <a href="https://www.linkedin.com/in/ad2003" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
       
      
      </div>
      <p>&copy; {new Date().getFullYear()} Ahamed Ibrahim. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
