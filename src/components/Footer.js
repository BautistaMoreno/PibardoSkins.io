import React from 'react';
import steam from "../IMAGES/steam-icon-2026x2048-3b7rynay.png";
import contacto from "../IMAGES/asistencia.png";
import github from "../IMAGES/github-icon-2048x2048-eyd5tyuo.png";
import terminosImg from "../IMAGES/condicion.png";

const Footer = () => (
  <footer>
    <div className="new-section">
      <a href="https://store.steampowered.com/" className="footer-link">
        <img src={steam} alt="Steam Icon" /> Steam
      </a>
      <a href="/contacto" className="footer-link" target="_blank">
        <img src={contacto} alt="Contacto Icon" /> Contacto
      </a>
      <a href="https://github.com/BautistaMoreno/PibardoSkins.io" className="footer-link">
        <img src={github} alt="GitHub Icon" /> GitHub
      </a>
      <a href="/terminos" className="footer-link" target="_blank"> 
        <img src={terminosImg} alt="Términos Icon" /> Términos y condiciones
      </a>
    </div>
    <div className="footer-container">
      <a href="#">Blog</a>
      <a href="#">Foros</a>
      <a href="https://html.spec.whatwg.org/" target="_blank">Powered by HTML</a>
    </div>
    <p>Derechos reservados a PibardoSkinsTecnolgi™</p>
  </footer>
);

export default Footer;
