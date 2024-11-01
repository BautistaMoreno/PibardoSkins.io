import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeProvider from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Contact from "./pages/Contac"; // Asegúrate de importar correctamente
import Sidebar from "./components/Sidebar";
import Login from "./Login"; 
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Router>
      <ThemeProvider>
        <div className="app-container">
          {!isAuthenticated ? (
            <Login onLoginSuccess={handleLogin} />
          ) : (
            <>
              <Sidebar />
              <div className="content">
                <Routes>
                  <Route path="/PibardoSkins.io/" element={<Home onLogout={handleLogout} />} />
                  <Route path="/terminos" element={<Terms />} />
                  <Route path="/contacto" element={<Contact />} />
                </Routes>
              </div>
            </>
          )}
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
