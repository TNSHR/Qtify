import React from "react";
import HeroImage from "../../assets/Headphone.png";
import styles from "./Hero.module.css";


const Hero = ()=>{
  return(
    <>
    <section className={styles.Hero}>
      <div className = {styles.HeroTitle}>
        <h1>100 Thousand Song, ad-free</h1>
        <h2>Over thousands podcast episodes</h2>

      </div>
      <img className={styles.HeroImage} src={HeroImage} alt='headphone'/>


    </section>
    </>
  )
}
export default Hero;