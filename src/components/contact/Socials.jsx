import React from "react";

import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";

const Socials = () => {
  return (
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
  );
};

export default Socials;
