import React, { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import Webcam from 'react-webcam';

const DepthEstimation = ({ onDepthData }) => {
  const [model, setModel] = useState(null);
  const webcamRef = useRef(null);

  // Load the depth estimation model
  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await tf.loadGraphModel('/path/to/model.json');
      setModel(loadedModel);
    };
    loadModel();
  }, []);

  // Estimate depth for a captured frame
  const estimateDepth = async () => {
    if (webcamRef.current && model) {
      // Capture frame from webcam
      const video = webcamRef.current.video;
      const videoFrame = tf.browser.fromPixels(video).resizeBilinear([256, 256]).expandDims(0).div(255);

      // Run model inference to get depth map
      const depthMap = await model.predict(videoFrame);

      // Process depth map to get depth data
      const depthData = depthMap.dataSync();  // Array of depth values
      onDepthData(depthData);

      // Dispose tensors to free up memory
      videoFrame.dispose();
      depthMap.dispose();
    }
  };

  // Capture frames periodically
  useEffect(() => {
    const interval = setInterval(estimateDepth, 1000);  // Estimate depth every second
    return () => clearInterval(interval);
  }, [model]);

  return <Webcam ref={webcamRef} audio={false} className="rounded-lg" />;
};

export default DepthEstimation;
