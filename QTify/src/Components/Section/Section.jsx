import React, { useState } from "react";
import Card from "../Cards/Cards";
import "./Section.css";

const Section = ({ title, data }) => {
  const [isExpanded, setIsExpanded] = useState(false); // Toggle state

  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  // Show only 4 items when collapsed, all when expanded
  const visibleCards = isExpanded ? data : data.slice(0, 4);

  return (
    <div className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <button className="toggle-btn" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Collapse" : "Show All"}
        </button>
      </div>
      <div className="scroll-container">
        <div className="grid">
          {visibleCards.map((item) => (
            <Card
              key={item.id}
              image={item.image || "https://via.placeholder.com/150"} // Fallback image
              follows={item.follows}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
