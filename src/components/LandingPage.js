// src/components/LandingPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { iDontCareRoute } from "../utils/paths";
import '../styles/LandingPage.css'; // Separate CSS for the landing page

function LandingPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="landing-page">
      <div className="overlay">
        <h1 className="landing-title">Welcome to My Portfolio</h1>
        <p className="landing-subtitle">Choose how you'd like to explore</p>
        <div className="landing-buttons">
          <button className="btn interactive-btn" onClick={() => handleNavigation("/interactive")}>Interactive</button>
          <button className="btn plain-btn" onClick={() => handleNavigation("/plain")}>Plain</button>
          <button className="btn dont-care-btn" onClick={() => handleNavigation(iDontCareRoute())}>I Don't Care</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
