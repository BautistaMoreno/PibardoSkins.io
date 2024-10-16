import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import ThemeToggle from './components/ThemeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog,  } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({});

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (menu) => {
    setSubMenuOpen(prevState => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="sidebar-container">
      <button className="toggle-button" onClick={toggleSidebar}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
  <li>
    <button onClick={() => toggleSubMenu('opcion1')}>
      <FontAwesomeIcon icon={faStar} /> Armas
    </button>
    {subMenuOpen['opcion1'] && (
      <ul className="submenu">
        <li>Skins doradas</li>
        <li>Skins ancestrales</li>
        <li>Skins legendarias</li>
        <li>Skins miticas</li>
        <li>Skins raras</li>
      </ul>
    )}
  </li>
  <li>
    <button onClick={() => toggleSubMenu('opcion2')}>
      <FontAwesomeIcon icon={faUser} /> Agentes
    </button>
    {subMenuOpen['opcion2'] && (
      <ul className="submenu">
        <li>Agentes de la operacion Riptide</li>
        <li>Agentes de Shatered Web</li>
      </ul>
    )}
  </li>
  <li>
    <button onClick={() => toggleSubMenu('opcion3')}>
      <FontAwesomeIcon icon={faCog} /> Opción 3
    </button>
    {subMenuOpen['opcion3'] && (
      <ul className="submenu">
        <li>Subopción 3.1</li>
        <li>Subopción 3.2</li>
      </ul>
    )}
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
