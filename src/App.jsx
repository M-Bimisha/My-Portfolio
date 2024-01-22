import "./App.css";
import React, {useState} from "react";
import Navigation from "./components/Navigation/Navigation";
import ParticleBackground from "./components/ParticleBackground/ParticleBackgroud";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skill";
import Projects from "./components/Projects/Project";
import Contact from "./components/Contacts/Contact";

const App = () => {
  //function to track the active section and handle it
  const [activeSection, setActiveSection] = useState("home");
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  return (
    <div className="App">
      <Navigation onSectionChange={handleSectionChange} />
      

      {activeSection === "home" && <ParticleBackground />}

      {activeSection === "home" && <Home />}
      {activeSection === "skills" &&<Skills />}
      {activeSection === "projects" &&<Projects />}
      {activeSection === "contact" &&<Contact />}
    </div>
  );
};
export default App;
