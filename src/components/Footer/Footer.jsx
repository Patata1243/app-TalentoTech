import "./Footer.css";
import { Link } from "react-router-dom";
import { Contact } from "../Contact/Contact.page";
import { Home } from "../Home/Home.page";

//mejorar los className

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <section className="footer-brand">
          <h2>Título</h2>
          <p>Descripción</p>
        </section>

        <section className="footer-links">
          <h3>Enlaces</h3>
          <Link to="/" element={<Home />}>
            Inicio
          </Link>
          <a href="/about">Sobre Nosotros</a>
          <Link to="/contact" element={<Contact />}>
            Contactanos
          </Link>
        </section>

        <section className="footer-social-media">
          <h3>Redes Sociales</h3>
          <a href="">Instagram</a>
          <a href="">GitHub</a>
          <a href="">LinkedIn</a>
        </section>
      </div>

      <div className="footer-bottom">
        <p>@ 2026 Mi Proyecto. Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
