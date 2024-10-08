// Header.js
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import csLogo from '../IMAGES/cslogo.jpg';
import carrito from '../IMAGES/carrito.png';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { isLightTheme } = useContext(ThemeContext);

  return (
    <header className={isLightTheme ? 'light-mode' : 'dark-mode'}>
      <div className="logoynombre">
        <img id="logo" src={csLogo} alt="cslogo" />
        <h1 id="nombre">Pibardo <br /> Skins</h1>
      </div>
      <ThemeToggle />
      <div id="carrito" onClick={() => alert("Aún no agregamos un carrito.")}>
        <img src={carrito} alt="carrito" />
      </div>
    </header>
  );
};

export default Header;
