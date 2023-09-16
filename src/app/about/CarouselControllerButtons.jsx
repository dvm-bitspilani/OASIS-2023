"use client";

import React from "react";
import styles from "./about.module.css";

export default function CarouselControllerButtons() {
  const swiper = React.useRef(null);

  React.useEffect(() => {
    swiper.current = document.querySelector(".swiper").swiper;
    // console.log(swiper.current);

    swiper.current.on("slideChange", () => {
      const carouselPrevButton = document.querySelector(`.${styles.carouselLeftButton}`);
      const carouselNextButton = document.querySelector(`.${styles.carouselRightButton}`);
      if (swiper.current.progress === 0) {
        carouselPrevButton.style.opacity = 0.5;
        carouselPrevButton.disabled = true;
      } else {
        carouselPrevButton.style.opacity = 1;
        carouselPrevButton.disabled = false;
      }
      if (swiper.current.progress === 1) {
        carouselNextButton.style.opacity = 0.5;
        carouselNextButton.disabled = true;
      } else {
        carouselNextButton.style.opacity = 1;
        carouselNextButton.disabled = false;
      }
    });
  });

  const carouselPrevElem = () => {
    swiper.current.slidePrev(2000, false);
  };

  const carouselNextElem = () => {
    swiper.current.slideNext(2000, false);
  };

  return (
    <div className={styles.carouselControllerButtons}>
      <button
        className={styles.carouselLeftButton}
        onClick={() => carouselPrevElem()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="41"
          viewBox="0 0 24 41"
          fill="none"
        >
          <path
            d="M20.3194 37.867L3 20.5476L20.3194 3.22827"
            stroke="#DBDBDB"
            strokeWidth="5.77312"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        className={styles.carouselRightButton}
        onClick={() => carouselNextElem()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="41"
          viewBox="0 0 24 41"
          fill="none"
        >
          <path
            d="M3.48045 37.867L20.7998 20.5476L3.48045 3.22827"
            stroke="#DBDBDB"
            strokeWidth="5.77312"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
