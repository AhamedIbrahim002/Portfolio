import React, { useEffect, useState } from "react";
import "./Menu.css";
import {
  FaHome, FaProjectDiagram, FaUser,
  FaGraduationCap, FaLaptopCode,
  FaBriefcase, FaFileAlt, FaCertificate
} from "react-icons/fa";
import profileImage from "../assets/Profile.jpg";

const Menu = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`menu-bar ${isSticky ? "sidebar" : ""}`}>
      {isSticky && (
        <div className="sidebar-profile">
          <img src={profileImage} alt="Ahamed Ibrahim" className="sidebar-pic" />
        </div>
      )}

      <ul className="menu-list">
        <li><a href="#Home" title="Home"><FaHome /> <span>Home</span></a></li>
        <li><a href="#experience" title="Experience"><FaBriefcase /> <span>Experience</span></a></li>
        <li><a href="#education" title="Education"><FaGraduationCap /> <span>Education</span></a></li>
        <li><a href="#projects" title="Projects"><FaProjectDiagram /> <span>Projects</span></a></li>
        <li><a href="#skills" title="Skills"><FaLaptopCode /> <span>Skills</span></a></li>
        <li><a href="#certifications" title="Certifications"><FaCertificate /> <span>Certifications</span></a></li>
        <li><a href="#about" title="About"><FaUser /> <span>About</span></a></li>
        <li>
          <a
            href="/Ahamed_Ibrahim_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            title="Resume"
          >
            <FaFileAlt /> <span>Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
