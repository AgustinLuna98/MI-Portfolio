import React from "react";
import { FaAward } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { RiFolderChartLine } from "react-icons/ri";

const Cards = () => {
  return (
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
  );
};

export default Cards;
