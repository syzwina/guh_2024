import React, { useState } from 'react';
import Header from './components/Header';
import MainControls from './components/MainControls';
import AccessibilitySettings from './components/AccessibilitySettings';
import ObjectAlert from './components/ObjectAlert';
import './App.css';

function App() {
  const [alertMessage, setAlertMessage] = useState('');

  const handleStart = () => {
    setAlertMessage('Object detected: Door nearby.');
  };

  const handleStop = () => {
    setAlertMessage('');
  };

  return (
    <div className="App">
      <Header />
      <main className="flex flex-col items-center mt-8">
        <MainControls onStart={handleStart} onStop={handleStop} />
        <AccessibilitySettings onTextSizeChange={() => {}} onFeedbackChange={() => {}} />
        <ObjectAlert alertMessage={alertMessage} />
      </main>
    </div>
  );
}

export default App;
