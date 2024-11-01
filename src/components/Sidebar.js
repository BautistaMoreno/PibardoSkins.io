import React, { useState, useEffect } from "react";
import "../styles/Sidebar.css";
import ThemeToggle from "./ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({});

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (menu) => {
    setSubMenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="sidebar-container">
      <button className="toggle-button" onClick={toggleSidebar}>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <button><Link to="/terminos" onClick={() => setIsOpen(false)} className="sidebar-link" target="_blank">
              <FontAwesomeIcon icon={faStar} />
              Términos y condiciones
            </Link></button>
            {/* 
            {subMenuOpen['opcion1'] && (
              <ul className="submenu">
                <li>Skins doradas</li>
                <li>Skins ancestrales</li>
                <li>Skins legendarias</li>
                <li>Skins miticas</li>
                <li>Skins raras</li>
              </ul>
            )} */}
          </li>
          <li>
            <button>
            <Link to="/contacto" onClick={() => setIsOpen(false)} className="sidebar-link" target="_blank">
              <FontAwesomeIcon icon={faUser} /> Contacto
            </Link></button>
            {/* 
            {subMenuOpen['opcion2'] && (
              <ul className="submenu">
                <li>Agentes de la operacion Riptide</li>
                <li>Agentes de Shatered Web</li>
              </ul>
            )} */}
          </li>
          
        </ul>
        <div className="theme-toggle-section">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
