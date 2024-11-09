import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const WebcamFeed = ({ onCapture }) => {
  const webcamRef = useRef(null);
  const [isCaptured, setIsCaptured] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setIsCaptured(true);
    if (onCapture) {
      onCapture(imageSrc);
    }
  };

  return (
    <div className="flex flex-col items-center my-4">
      {!isCaptured ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="rounded-lg"
          />
          <button
            onClick={capture}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Capture Image
          </button>
        </>
      ) : (
        <img src={capturedImage} alt="Captured" className="rounded-lg max-w-xs" />
      )}
    </div>
  );
};

export default WebcamFeed;
