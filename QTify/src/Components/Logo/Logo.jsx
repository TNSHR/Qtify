import React from "react";
import "./Logo.css";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="Company Logo" />
    </div>
  );
}
export default Logo;