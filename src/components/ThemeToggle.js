import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import themeIcon from '../IMAGES/sol-luna.png';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle-button"
    >
      <img src={themeIcon} alt="Cambiar tema" style={{ width: '50px', height: '50px' }} />
    </button>
  );
};

export default ThemeToggle;
