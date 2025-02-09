import Logo from "./Components/Logo/Logo";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import { useEffect, useState } from "react";
import styles from "./App.module.css";
import FilterSection from "./Components/FilterSection/FilterSection";

function App() {
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);
  const [newAlbumSongs, setNewAlbumSongs] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [value, setValue] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  const generateTopAlbumSongs = async () => {
    try {
      const res = await fetchTopAlbums();
      setTopAlbumSongs(res);
    } catch (error) {
      console.log(error);
    }
  };

  const generateNewAlbumSongs = async () => {
    try {
      const res = await fetchNewAlbums();
      setNewAlbumSongs(res);
    } catch (error) {
      console.log(error);
    }
  };

  const generateSongs = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
    } catch (error) {
      console.log(error);
    }
  };

  const generateNewSongs = (index) => {
    let key = "";
    if (index === 1) key = "rock";
    else if (index === 2) key = "pop";
    else if (index === 3) key = "jazz";
    else if (index === 4) key = "blues";

    if (index === 0) {
      setFilteredData(songsData);
      return;
    }

    const newSongsArray = songsData.filter((song) => song.genre && song.genre.key === key);
    console.log("generateNewSongs triggered and filtered this Data:", newSongsArray);
    setFilteredData(newSongsArray);
  };

  const handleChangeIndex = (newValue) => {
    console.log("handleChangeIndex triggered with newValue:", newValue);
    setValue(newValue);
    generateNewSongs(newValue);
  };

  useEffect(() => {
    generateTopAlbumSongs();
    generateNewAlbumSongs();
    generateSongs();
  }, []);

  useEffect(() => {
    generateNewSongs(value);
  }, [songsData]); // Ensure filtering occurs after fetching songs

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type="album" title="Top Albums" data={topAlbumSongs} />
        <Section type="album" title="New Albums" data={newAlbumSongs} />
        <FilterSection type="song" title="Songs" value={value} filteredData={filteredData} handleChangeIndex={handleChangeIndex} />
      </div>
    </div>
  );
}

export default App;
