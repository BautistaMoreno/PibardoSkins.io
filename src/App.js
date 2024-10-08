import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeProvider from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Terms from "./pages/Terms";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/terminos" element={<Terms />} /> 
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
