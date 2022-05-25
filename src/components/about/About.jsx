import React from "react";
import "./about.css";
import GBA from "../../assets/Goku-Black-about.png";
import Cards from "./Cards";

const About = () => {
  return (
    <section id="about">
      <h5>Conoce mas </h5>
      <h2>Acerca de mi</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={GBA} className="img-fluid " alt=""/>
          </div>
        </div>
        <div className="about-content">
          <Cards/>
          <p>
            Me considero alguien con mucha paciencia, dedicada, con gran
            disposición hacia los demás y con ganas de aprender. Aprendo rápido
            y me puedo adaptar muy bien a cualquier lenguaje.
          </p>
          <a href="#contact" className="btn btn-primary">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
