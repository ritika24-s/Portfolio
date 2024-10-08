import React from 'react';
import '../styles/MilestoneModal.css'; // CSS for the modal

const MilestoneModal = ({ title, description, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MilestoneModal;
