import React from "react";
import "./Hero.css";
import HeadphoneLogo from "../HeadphoneLogo/Headphone.jsx";


const Hero = () => {   // This is a functional component called Hero
  return (
    <div className="hero-container">
        <div className="hero">
        <div className="hero-text">
        <h2 className="t1">100 Thousand Songs, ad-free</h2>
        <h2 className="t2"> Over thousands podcast episodes</h2>
         
       
      </div>
      <HeadphoneLogo />
        </div>
      
        
    </div>
  );
};
export default Hero; // This exports the Hero component so it can be used in other files