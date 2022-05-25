import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Form = () => {
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
  )
}

export default Form