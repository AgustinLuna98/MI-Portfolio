import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a3upkhr",
        "template_yo98ome",
        form.current,
        "5bkEUgdqgTONcpA_V"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Entra en el Enlace</h5>
      <h2>Contactame</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <HiOutlineMail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>agustinalejandroluna1998 @gmail.com</h5>
            <a
              href="mailto:agustinalejandroluna1998@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Envia un mensaje
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>Whats App</h4>
            <h5>+54 341 309 0574</h5>
            <a
              href="https://api.whatsapp.com/send?phone=3413090574"
              target="_blank"
              rel="noopener noreferrer"
            >
              Envia un mensaje
            </a>
          </article>
          <article className="contact-option">
            <BsLinkedin className="contact-option-icon" />
            <h4>Linkedin</h4>
            <h5>Agustin Luna</h5>
            <a
              href="https://www.linkedin.com/in/agustin-luna-089579182"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a Linkedin
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Nombre Completo..."
            name="name"
            required
          />
          <input type="text" placeholder="Email..." name="email" required />
          <textarea name="message" placeholder="Mensaje..." rows="7"></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
