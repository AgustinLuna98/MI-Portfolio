import React from "react";
import "./about.css";
import GBA from "../../assets/Goku-Black-about.png";
import { FaAward } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { RiFolderChartLine } from "react-icons/ri";

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
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experiencia</h5>
              <small>+4 años Programando</small>
            </article>
            <article className="about-card">
              <GiBrain className="about-icon" />
              <h5>Conocimientos</h5>
              <small>+5 Lenguajes Nivel Junior</small>
            </article>
            <article className="about-card">
              <RiFolderChartLine className="about-icon" />
              <h5>Proyectos</h5>
              <small>+3 Terminados y mas por hacer</small>
            </article>
          </div>
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
