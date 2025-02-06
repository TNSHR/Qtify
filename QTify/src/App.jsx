import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";
import { fetchTopAlbums } from "./api/api";

const App = () => {
  const [topAlbums, setTopAlbums] = useState([]);

  useEffect(() => {
    const getTopAlbums = async () => {
      try {
        const data = await fetchTopAlbums(); 
        console.log("Fetched data:", data);
        setTopAlbums(data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    getTopAlbums();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Section title="Top Albums" data={topAlbums} />
    </div>
  );
};

export default App;
