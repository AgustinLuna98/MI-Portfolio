import React from "react";
import "./services.css";
import { HiCheck } from "react-icons/hi";

const sanjo = [
  "Hardware y Redes",
  "HTML, CSS",
  "JavaScript",
  "Programacion de Arduino C++",
  "Genexus",
  "Pasantias Legado IT",
  "Ingles",
];
const belgrano = [
  "JavaScript Avanzado",
  "C# (Unity)",
  "GitHub",
  "MySQL",
  "Haskell",
  "PHP",
  "Base de Datos",
  "Metodologias Agiles",
];
const cursos = ["React JS", "React Native", "Bootstrap", "Python", "Node JS"];
const Services = () => {
  return (
    <section id="services">
      <h5>Que Puedo Ofrecer</h5>
      <h2>Mi Estudios</h2>

      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>Colegio San Jose N°2043</h3>

            <h5>Tecnico informatico</h5>
          </div>
          <ul className="service-list">
            {sanjo.map((text) => {
              return (
                <li>
                  <HiCheck className="service-list-icon" />
                  <p>{text}</p>
                </li>
              );
            })}
          </ul>
        </article>
        <article className="service">
          <div className="service-head">
            <h3>Instituto Belgrano</h3>
            <h5>Desarrollador de Software</h5>
          </div>
          <ul className="service-list">
            {belgrano.map((text) => {
              return (
                <li>
                  <HiCheck className="service-list-icon" />
                  <p>{text}</p>
                </li>
              );
            })}
          </ul>
        </article>
        <article className="service">
          <div className="service-head">
            <h3>Cursos</h3>
            <h5>Autodidacta</h5>
          </div>
          <ul className="service-list">
            {cursos.map((text) => {
              return (
                <li>
                  <HiCheck className="service-list-icon" />
                  <p>{text}</p>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
