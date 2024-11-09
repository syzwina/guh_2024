import React from 'react';

const AccessibilitySettings = ({ onTextSizeChange, onFeedbackChange }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-4">
    <h2 className="text-xl font-semibold mb-4">Accessibility Settings</h2>
    <div className="mb-4">
      <label className="block font-medium mb-2">Text Size:</label>
      <select onChange={(e) => onTextSizeChange(e.target.value)} className="p-2 border rounded w-full">
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
    </div>
    <div>
      <label className="block font-medium mb-2">Feedback Type:</label>
      <select onChange={(e) => onFeedbackChange(e.target.value)} className="p-2 border rounded w-full">
        <option value="audio">Audio</option>
        <option value="vibration">Vibration</option>
        <option value="both">Both</option>
      </select>
    </div>
  </div>
);

export default AccessibilitySettings;
