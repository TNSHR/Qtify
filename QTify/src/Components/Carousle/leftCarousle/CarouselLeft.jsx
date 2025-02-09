import React, { useEffect, useState } from "react";
import LeftArrow from "../../../assets/LeftArrow.svg";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeft.module.css";

const CarouselLeft = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper?.isBeginning || true);

    useEffect(() => {
        if (!swiper) return;

        const handleSlideChange = () => {
            setIsBeginning(swiper.isBeginning);
        };

        swiper.on("slideChange", handleSlideChange);
        handleSlideChange(); // Ensure initial state is correct

        return () => {
            swiper.off("slideChange", handleSlideChange);
        };
    }, [swiper]);

    return (
        <div className={styles.leftNavigation}>
            {!isBeginning && (
                <img
                    src={LeftArrow}
                    alt="Previous"
                    onClick={() => swiper.slidePrev()}
                    className={styles.leftArrow}
                />
            )}
        </div>
    );
};

export default CarouselLeft;
