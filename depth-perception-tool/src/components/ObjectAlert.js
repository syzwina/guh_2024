import React, { useEffect } from 'react';

const ObjectAlert = ({ alertMessage }) => {
  useEffect(() => {
    if (alertMessage) {
      const speech = new SpeechSynthesisUtterance(alertMessage);
      window.speechSynthesis.speak(speech);
    }
  }, [alertMessage]);

  return (
    <div className="text-center my-4 p-4 bg-yellow-100 border border-yellow-400 rounded-lg w-full max-w-md">
      <p className="text-lg font-bold text-gray-800">{alertMessage}</p>
    </div>
  );
};

export default ObjectAlert;
