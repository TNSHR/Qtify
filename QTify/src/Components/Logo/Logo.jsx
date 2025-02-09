import React from "react";
import  "./Logo.css";
import  LogoImage from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="logoDiv">
      <img src={LogoImage} alt="Logo" width={67}/>
    </div>
  );
}

export default Logo;