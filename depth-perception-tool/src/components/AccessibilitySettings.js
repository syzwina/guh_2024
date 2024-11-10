import React from 'react';

function AccessibilitySettings({ onTextSizeChange }) {
  const handleTextSizeChange = (event) => {
    onTextSizeChange(event.target.value);
  };

  return (
    <div className="AccessibilitySettings">
      <h2>Accessibility Settings</h2>
      <label>
        Text Size:
        <select onChange={handleTextSizeChange} defaultValue="medium">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
    </div>
  );
}

export default AccessibilitySettings;
