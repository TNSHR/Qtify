import React from "react";
import Chip from "@mui/material/Chip";
import "./Cards.css"; // Ensure this file exists

const Card = ({ image, follows, title }) => {
  return (
    <div className="card">
      <img 
        src={image} 
        alt={title} 
        className="card-image"
        onError={(e) => e.target.src = "https://via.placeholder.com/150"} // Fallback Image
      />
      <Chip label={`${follows} Follows`} className="card-chip" />
      <div className="card-title">{title}</div>
    </div>
  );
};

export default Card;
