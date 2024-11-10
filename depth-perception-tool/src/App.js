import React, { useState } from 'react';
import Header from './components/Header';
import MainControls from './components/MainControls';
import AccessibilitySettings from './components/AccessibilitySettings';
import ObjectAlert from './components/ObjectAlert';
import ImageUpload from './components/ImageUpload';
import './App.css';

function App() {
  const [alertMessage, setAlertMessage] = useState('');
  const [textSize, setTextSize] = useState('medium');

  const handleStart = () => {
    setAlertMessage('Object detected: Door nearby.');
  };

  const handleStop = () => {
    setAlertMessage('');
  };

  const handleTextSizeChange = (size) => {
    setTextSize(size);
  };

  return (
    <div className={`App ${textSize}`}>
      <Header />
      <h1>Depth Perception Tool</h1>
      <div className="main-content">
        <div className="control-panel">
          <h2>Control Panel</h2>
          <MainControls onStart={handleStart} onStop={handleStop} />
          <ObjectAlert alertMessage={alertMessage} />
        </div>
        <div className="control-panel">
          <AccessibilitySettings onTextSizeChange={handleTextSizeChange} />
          <ImageUpload />
        </div>
      </div>
    </div>
  );
}

export default App;
