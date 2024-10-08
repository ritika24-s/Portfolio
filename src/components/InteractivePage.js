// src/components/InteractivePage.js
import React, { useState } from "react";

function InteractivePage() {
  const [showFAQ, setShowFAQ] = useState(false);

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  };

  return (
    <div className="interactive-page">
      <h2>Milestone Grid - Interactive</h2>
      <div className="grid-container">
        {/* Dynamic Grid Items */}
        {Array(9)
          .fill(null)
          .map((_, idx) => (
            <div key={idx} className="grid-item">
              Milestone {idx + 1}
            </div>
          ))}
      </div>

      <button onClick={toggleFAQ}>Got a question?</button>
      {showFAQ && (
        <div id="faq-section">
          <div className="faq">
            <h3>What are your key skills?</h3>
            <p>Answer: My key skills are ...</p>
          </div>
          <button id="not-satisfied" onClick={() => window.location.href = "mailto:youremail@gmail.com"}>Not Satisfied?</button>
        </div>
      )}
    </div>
  );
}

export default InteractivePage;
