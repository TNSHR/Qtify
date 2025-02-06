import React ,{useEffect,useState}from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Card from "./Components/Cards/Cards.jsx";
import { fetchTopAlbums } from "./api/api";
import Section from "./Components/Section/Section";

const App = () => {
  const [topAlbums, setTopAlbums] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const getTopAlbums = async () => {
      const data = await fetchTopAlbums(); // Call the API function
      setTopAlbums(data); // Update state with the fetched data
    };

    getTopAlbums(); // Invoke the function
  }, []);

  return <div>
    <Navbar />
    <Hero />
    <Card image="https://source.unsplash.com/random" albumName="Random Album" follows={100} /> 
    <Section title="Top Albums" data={topAlbums} />
  </div>;
}

export default App;