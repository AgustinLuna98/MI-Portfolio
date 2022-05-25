import React from 'react'
import "./footer.css"
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">Agustin Luna</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">Acerca de mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Estudios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      
      <div className="footer-socials">
        <a href="https://www.instagram.com/agustin_luna1998/" target="_blank"
          rel="noopener noreferrer"><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/agustin-luna-089579182/" target="_blank"
          rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://api.whatsapp.com/send?phone=3413090574" target="_blank"
          rel="noopener noreferrer"><BsWhatsapp/></a>

      </div>
      <div className="footer-copyright">
        <small>&copy; Agustin Luna. All rights reserved. Web made with ReactJS</small>
      </div>
    </footer>
  )
}

export default Footer