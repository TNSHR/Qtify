import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./Carousel.module.css";
import CarouselRight from "./rightCarousle/CarouselRight.jsx";
import CarouselLeft from "./leftCarousle/CarouselLeft.jsx";

const Controls = ({ data }) => {
    const swiper = useSwiper();

    useEffect(() => {
        if (swiper && data) {
            swiper.slideTo(0, 1); // Reset to the first slide when data changes
        }
    }, [data, swiper]);

    return null;
};

const CarouselNavigation = () => {
    const swiper = useSwiper();
    return (
        <>
            <CarouselLeft swiper={swiper} />
            <CarouselRight swiper={swiper} />
        </>
    );
};

const Carousel = ({ data, renderCardComponent }) => {
    if (!Array.isArray(data) || typeof renderCardComponent !== "function") {
        console.error("Invalid props: 'data' must be an array and 'renderCardComponent' must be a function.");
        return null;
    }

    return (
        <div className={styles.wrapper}>
            <Swiper
                initialSlide={0}
                spaceBetween={40}
                slidesPerView={"auto"}
                modules={[Navigation]}
                allowTouchMove
            >
                <Controls data={data} />
                <CarouselNavigation />
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        {renderCardComponent(item)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
