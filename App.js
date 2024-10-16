import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeProvider from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Sidebar from "./Sidebar"; 
import './App.css'; 

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="app-container">
          <Sidebar /> 
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/terminos" element={<Terms />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
