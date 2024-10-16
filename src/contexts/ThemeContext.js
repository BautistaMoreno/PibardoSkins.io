import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
      <div className={isLightTheme ? 'light-mode' : 'dark-mode'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
