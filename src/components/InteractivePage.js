// src/components/InteractivePage.js
import React, { useState } from 'react';
import Layout from './Layout'; // Import Layout component
import '../styles/InteractivePage.css'; // CSS for the grid layout and pins
import MilestoneModal from './MilestoneModal'; // Modal component to show milestone details

const milestones = [
  { id: 1, title: 'Started College', description: 'Joined XYZ University for Computer Science.', x: 2, y: 2 },
  { id: 2, title: 'First Internship', description: 'Interned at ABC Company.', x: 5, y: 3 },
  { id: 3, title: 'First Job', description: 'Joined DEF Company as a frontend developer.', x: 8, y: 4 },
  { id: 4, title: 'Promotion', description: 'Promoted to Senior Developer at DEF.', x: 2, y: 6 },
  { id: 5, title: 'Freelance Work', description: 'Started freelancing projects on UI/UX.', x: 4, y: 8 },
];

const InteractivePage = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const handlePinClick = (milestone) => {
    setSelectedMilestone(milestone);
  };

  const closeModal = () => {
    setSelectedMilestone(null);
  };

  return (
    <Layout>
      <div>
        <br/>
        <br/>
      </div>
    <div className="interactive-page">
      <h1>Interactive Milestones</h1>
      <div className="milestone-grid">
        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className="milestone-pin"
            style={{ gridColumn: milestone.x, gridRow: milestone.y }}
            onClick={() => handlePinClick(milestone)}
          >
            📍 {/* Pin emoji */}
          </div>
        ))}
      </div>
      {selectedMilestone && (
        <MilestoneModal
          title={selectedMilestone.title}
          description={selectedMilestone.description}
          onClose={closeModal}
        />
      )}
    </div>
    </Layout>
  );
};

export default InteractivePage;
