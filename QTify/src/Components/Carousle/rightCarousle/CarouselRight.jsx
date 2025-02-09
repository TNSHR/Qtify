import React, { useEffect, useState } from "react";
import RightArrow from "../../../assets/RightArrow.svg";
import { useSwiper } from 'swiper/react';
import styles from "./CarouselRight.module.css";

const CarouselRight = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        if (swiper) {
            setIsEnd(swiper.isEnd);

            const handleSlideChange = () => {
                setIsEnd(swiper.isEnd);
            };

            swiper.on("slideChange", handleSlideChange);

            // Cleanup event listener on unmount
            return () => {
                swiper.off("slideChange", handleSlideChange);
            };
        }
    }, [swiper]);

    return (
        <div className={styles.rightNavigation}>
            {!isEnd && <img src={RightArrow} alt="Next" onClick={() => swiper.slideNext()} />}
        </div>
    );
};

export default CarouselRight;