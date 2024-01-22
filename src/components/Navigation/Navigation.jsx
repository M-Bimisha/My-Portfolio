import React, {useState} from "react";
import "./Navigation.css";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Bimisha</span>

      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home" onClick={() => onSectionChange("home")}>Home</a>
        <a href="/skills" onClick={() => onSectionChange("skills")}>Skills</a>
        <a href="/projects" onClick={() => onSectionChange("projects")}>Projects</a>
        <a href="/contact" onClick={() => onSectionChange("contact")}>Contact</a>
      </div>


      {/* Toggle button */}
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navigation;
