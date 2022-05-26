import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const conotimientos = [
  { tipo: "frontend", name: "HTML", lvl: "Avanzados" },
  { tipo: "frontend", name: "CSS", lvl: "Intermedio" },
  { tipo: "frontend", name: "JavaScript", lvl: "Avanzados" },
  { tipo: "frontend", name: "React", lvl: "Basico" },
  { tipo: "frontend", name: "Bootstrap", lvl: "Basico" },
  { tipo: "backend", name: "C#", lvl: "Intermedio" },
  { tipo: "backend", name: "Python", lvl: "Basico" },
  { tipo: "backend", name: "Node JS", lvl: "Basico" },
  { tipo: "backend", name: "MySQL", lvl: "Intermedio" },
  { tipo: "backend", name: "PHP", lvl: "Basico" },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>Experiencia</h5>
      <h2>Mis Conocimientos</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            {conotimientos.map(({ tipo, name, lvl }) => {
              let article;
              if (tipo === "frontend") {
                article = (
                  <article className="experience-details">
                    <BsFillPatchCheckFill className="experience-details-icon" />
                    <div>
                      <h4>{name}</h4>
                      <small className="text-light">{lvl}</small>
                    </div>
                  </article>
                );
              }
              return article;
            })}
          </div>
        </div>
        <div className="esperience-backend">
          <h3>Backtend Development</h3>
          <div className="experience-content">
            {conotimientos.map(({ tipo, name, lvl }) => {
              let article;
              if (tipo === "frontend") {
                article = (
                  <article className="experience-details">
                    <BsFillPatchCheckFill className="experience-details-icon" />
                    <div>
                      <h4>{name}</h4>
                      <small className="text-light">{lvl}</small>
                    </div>
                  </article>
                );
              }
              return article;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
