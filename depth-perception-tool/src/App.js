import React, { useState } from 'react';
import Header from './components/Header';
import MainControls from './components/MainControls';
import AccessibilitySettings from './components/AccessibilitySettings';
import ObjectAlert from './components/ObjectAlert';
import WebcamFeed from './components/WebcamFeed';
import './App.css';

function App() {
  const [alertMessage, setAlertMessage] = useState('');
  const [capturedImage, setCapturedImage] = useState(null);

  const handleStart = () => {
    setAlertMessage('Object detected: Door nearby.');
  };

  const handleStop = () => {
    setAlertMessage('');
  };

  const handleCapture = (imageSrc) => {
    setCapturedImage(imageSrc);
    // You can add additional processing for the captured image here
  };

  return (
    <div className="App">
      <Header />
      <main className="flex flex-col items-center mt-8">
        <MainControls onStart={handleStart} onStop={handleStop} />
        <WebcamFeed onCapture={handleCapture} />
        {capturedImage && (
          <div className="my-4">
            <img src={capturedImage} alt="Captured" className="rounded-lg max-w-xs" />
          </div>
        )}
        <AccessibilitySettings onTextSizeChange={() => {}} onFeedbackChange={() => {}} />
        <ObjectAlert alertMessage={alertMessage} />
      </main>
    </div>
  );
}

export default App;
