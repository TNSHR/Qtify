// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://qtify-backend-labs.crio.do';

export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/albums/top`);
    return response.data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching top albums:', error);
    return []; // Return an empty array in case of error
  }
};