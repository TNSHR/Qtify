import axios from "axios";

const API_BASE_URL = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/albums/top`);
    console.log("API Response:", response.data);
    return response.data; // Ensure the API response has correct structure
  } catch (error) {
    console.error("Error fetching top albums:", error);
    return []; 
  }
};
