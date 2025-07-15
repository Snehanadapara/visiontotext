// src/utils/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';  // Replace with your backend URL

// Upload Image and Get Description
export const uploadImageAndGetDescription = async (imageData, token) => {
  try {
    const formData = new FormData();
    formData.append('image', imageData);

    const response = await axios.post(`${API_URL}/api/images/upload`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    // Assuming the response contains the description
    return response.data;
  } catch (error) {
    console.error('Error uploading image and generating description:', error);
    throw error;
  }
};
