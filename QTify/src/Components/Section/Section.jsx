import React from 'react';
import Card from '../Cards/Cards';
import './Section.css'; // Assuming you have a CSS file for styling

const Section = ({ title, data}) => {
    if(!Array.isArray(data)){
        return <div>No data available</div>
    }
  return (
    <div className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <button>Collapse</button>
      </div>
      <div className="grid">
        {data.map(item => (
          <Card
            key={item.id}
            image={item.image}
            follows={item.follows}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;