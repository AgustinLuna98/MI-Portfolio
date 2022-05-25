import React from "react";
import "./contact.css";
import Form from "./Form";
import Socials from "./Socials";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Entra en el Enlace</h5>
      <h2>Contactame</h2>
      <div className="container contact-container">
        <Socials />
        <Form />
      </div>
    </section>
  );
};

export default Contact;
