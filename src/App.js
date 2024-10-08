// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import InteractivePage from "./components/InteractivePage";
import PlainPage from "./components/PlainPage";
import './styles/App.css';
import { ThemeProvider } from './utils/ThemeContext'; // Import the ThemeProvider

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          {/* Navigation Bar */}
          {/* <nav>
            <div className="nav-left">
              <a href="/">Home</a>
              <a href="/interactive">Interactive</a>
              <a href="/plain">Plain</a>
              <a href="#hobbies">Hobbies</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="nav-right">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:youremail@gmail.com">Gmail</a>
              <a href="#" id="download-resume">Download Resume</a>
            </div>
          </nav> */}

          {/* Route Configurations */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/interactive" element={<InteractivePage />} />
            <Route path="/plain" element={<PlainPage />} />
          </Routes>
          
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
