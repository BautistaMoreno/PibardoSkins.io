// HamburgerMenu.js (Componente en React)

import React, { useState } from 'react';
import './HamburgerMenu.css'; // Para los estilos CSS

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <ul className="menu-options">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;

///////////////////////////////////////////////////////

// HamburgerMenu.css (Estilos CSS)

.menu-container {
  position: relative;
}

.hamburger {
  cursor: pointer;
  width: 30px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bar {
  width: 100%;
  height: 4px;
  background-color: #333;
  transition: all 0.3s ease;
}

.menu-options {
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
  background-color: #f1f1f1;
  position: absolute;
  top: 30px;
  left: 0;
  width: 100px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.menu-options li {
  padding: 10px;
  cursor: pointer;
}

.menu-options li:hover {
  background-color: #ddd;
}

///////////////////////////////////////////////////////

// App.js (Aplicación principal)

import React from 'react';
import HamburgerMenu from './HamburgerMenu';

function App() {
  return (
    <div className="App">
      <HamburgerMenu />
    </div>
  );
}

export default App;
