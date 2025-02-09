import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../Cards/Cards";
import styles from "./Section.module.css";
import Carousel from "../Carousle/Carousel";

const Section = ({ type, title, data, toggle = true }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prev) => !prev);
  };

  return (
    <div>
      {/* Section header with title and toggle button */}
      <div className={styles.sectionTop}>
        <h3>{title}</h3>

        {/* Conditionally render the toggle button */}
        {toggle && (
          <h4
            onClick={handleToggle}
            className={styles.toggleText}
            role="button" // Add role for accessibility
            tabIndex={0} // Make it focusable
            aria-label={carouselToggle ? "Show all items" : "Collapse to carousel"} // Accessibility label
          >
            {carouselToggle ? "Show All" : "Collapse All"}
          </h4>
        )}
      </div>

      {/* Check if data exists and is an array before rendering */}
      {Array.isArray(data) && data.length > 0 ? (
        <div className={styles.sectionInnerWrapper}>
          {/* Show all cards in a grid layout when carouselToggle is false */}
          {!carouselToggle ? (
            <div className={styles.showAllWrapper}>
              {data.map((album, index) => (
                <Card data={album} type={type} key={album.id || index} />
              ))}
            </div>
          ) : (
            <div>
              {/* Show carousel when carouselToggle is true */}
              <Carousel
                data={data}
                renderCardComponent={(data) => (
                  <Card data={data} type={type} />
                )}
              />
            </div>
          )}
        </div>
      ) : (
        <div className={styles.progressBar}>
          {/* Show a loading spinner when there is no data */}
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default Section;