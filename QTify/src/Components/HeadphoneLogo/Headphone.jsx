import React from "react";
import Headphone from "../../assets/Headphone.png";
import "./Headphone.css";

const HeadphoneLogo = () => {
  return (
    <div>
      <img src={Headphone} alt="Headphone Logo" className="hlogo"/>
    </div>
  );
};  
export default HeadphoneLogo; // This exports the HeadphoneLogo component so it can be used in other files