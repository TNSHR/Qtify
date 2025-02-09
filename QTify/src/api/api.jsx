import axios from 'axios';

export const BACKEND_URL = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}/albums/top`);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const fetchNewAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}/albums/new`);
    return res.data; // ✅ Fix: returning the data
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}/songs`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
