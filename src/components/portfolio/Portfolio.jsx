import React from "react";
import "./portfolio.css";
import DDGSC from "../../assets/GDD-Space-Cadet.pdf";
import SpaceCadetImg from "../../assets/Space-Cadet-Img.PNG";
import MiPortfolioImg from "../../assets/Mi-Portfolio-img.PNG";

const proyectos = [
  {
    image: SpaceCadetImg,
    titulo: "Space Cadet (Unity)",
    descarga: DDGSC,
    githubLink: "https://github.com/AgustinLuna98/Space-Cadet",
  },
  {
    image: MiPortfolioImg,
    titulo: "Mi Portfolio (React JS)",
    descarga: "",
    githubLink: "https://github.com/AgustinLuna98/MI-Portfolio",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mis Proyectos</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {proyectos.map(({ image, titulo, descarga, githubLink }) => {
          let descargable;
          if (descarga !== "") {
            descargable = (
              <a href={descarga} download className="btn btn-primary ">
                Descargar DDG
              </a>
            );
          }
          let article = (
            <article className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} class="img-fluid" alt="" />
              </div>
              <h3>{titulo}</h3>
              <div className="portfolio-item-cta">
                {descargable}
                <a
                  href={githubLink}
                  className="btn "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </article>
          );
          return article;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
