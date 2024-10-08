// src/components/PlainPage.js
import React from "react";

function PlainPage() {
  return (
    <div className="plain-page">
      <h2>Milestone Timeline - Plain</h2>
      <div className="timeline">
        <div className="milestone">
          <h3>Job Title 1</h3>
          <p>Description of job title 1...</p>
        </div>
        {/* More milestones can go here */}
      </div>
    </div>
  );
}

export default PlainPage;
