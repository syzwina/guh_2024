import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      setUploadStatus('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await axios.post('http://localhost:8000/api/upload/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUploadStatus('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploadStatus('Failed to upload image.');
    }
  };

  return (
    <div className="image-upload">
      <h2>Upload an Image</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload} className="upload-button">Upload</button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default ImageUpload;
