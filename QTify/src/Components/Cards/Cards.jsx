import React from "react";
import styles from "./Cards.module.css";
import { Chip, Tooltip } from "@mui/material";

function Card({ data, type }) {
  switch (type) {
    case "album": {
      const { image, follows, title, songs } = data;
      return (
        <Tooltip title={`${songs?.length || 0} songs`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="album" />
              <div className={styles.banner}>
                <Chip
                  label={`${follows} Follows`}
                  className={styles.chip}
                  size="small"
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        </Tooltip>
      );
    }

    // Add this case for songs
    case "song": {
      const { image, likes, title, genre, artist } = data;
      return (
        <Tooltip title={`${genre || "Unknown genre"} • ${artist || "Unknown artist"}`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="song" />
              <div className={styles.banner}>
                <Chip
                  label={`${likes} Likes`}  // Changed from follows to likes
                  className={styles.chip}
                  size="small"
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        </Tooltip>
      );
    }

    default:
      return null;
  }
}

export default Card;