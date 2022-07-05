import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Nav } from "./Nav";
import { Link } from "react-router-dom";
function Form() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5075c5f",
        "template_5bo91he",
        form.current,
        "LJxk8RDvB5yC1I31d"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.value = ""
          alert("mensagem enviada")
        },
        (error) => {
          console.log(error.text);
          alert("erro ao enviar mensagem")
        }
      );
  };

  return (
    <main className="form-main">
      <Nav
        navMain={<Link to="/">Home</Link>}
        navA={<Link to="/conhecimento">Conhecimento</Link>}
        navB={<Link to="/projetos">Projetos</Link>}
      />
      <section className="form-section">
        <form ref={form} onSubmit={sendEmail}>
        <label>Nome</label>
        <input type="text" name="user_name" required/>
        <label>Email</label>
        <input type="email" name="user_email" required/>
        <label>Mensagem</label>
        <textarea name="message" />
        <input type="submit" value="Enviar" required/>
      </form>
      </section>
    </main>
  );
}

export { Form };
