import React, {useState} from "react";
import "./Navigation.css";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Bimisha</span>

      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/service">Skills</a>
        <a href="/project">Projects</a>
        <a href="/contact">Contact</a>
      </div>


      {/* Toggle button */}
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navigation;
