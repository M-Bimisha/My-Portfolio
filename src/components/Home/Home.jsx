import React, { useEffect } from "react";
import "./Home.css";
import Typed from "typed.js";
//import profileImage from "./path/to/your/image.jpg";  // Replace with the path to your image

const Home = () => {
  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: ["Full Stack Developer", "UI/UX designer"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: false,
      //cursorChar: "|"
    };

    const typed = new Typed(".typed-text", options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home-container">
      <div className="text-container">
        <h1>Hi, my name is Bimisha Mishra</h1>
        <h3 className="typed-text"></h3>
      </div>
      {/* <div className="image-container">
        <img src={profileImage} alt="Profile" />
      </div> */}
    </div>
  );
};

export default Home;
