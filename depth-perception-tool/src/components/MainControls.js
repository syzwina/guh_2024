import React from 'react';

const MainControls = ({ onStart, onStop }) => (
  <div className="flex gap-4 mt-8">
    <button onClick={onStart} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">Start</button>
    <button onClick={onStop} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Stop</button>
  </div>
);

export default MainControls;
