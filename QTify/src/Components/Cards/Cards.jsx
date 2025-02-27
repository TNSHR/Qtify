import React from "react";
import styles from "./Cards.module.css";
import {Chip, Tooltip} from "@mui/material";

function Card({data,type}){
  switch (type){
    case "album":{
      const {image,follows,title,songs}= data;
      return(
        <Tooltip title ={`${Array.isArray(songs) ? songs.length : 0} songs`} placement="top" arrow>
           <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src ={image} alt="album"/>
              <div className={styles.banner}>
                <Chip
                label = {`${follows} Follows`}
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
    };
    
  }
}
export default Card;