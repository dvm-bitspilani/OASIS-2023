"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectCreative,
  EffectFade,
} from "swiper/modules";

import styles from "./aboutCarousel.module.css";

export default function AboutCarousel() {
  React.useEffect(() => {
    // document.documentElement.style.overflow = "hidden";
    document.body.style.height = "100dvh";
    return () => {
      document.body.style.height = "auto";
      //   document.documentElement.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <Swiper
        // cssMode={true}
        // navigation={true}
        // pagination={true}
        // mousewheel={true}
        // keyboard={true}

        // autoplay={{
        //   delay: 4000,
        //     disableOnInteraction: false,
        // }}

        speed={2000}
        // loop={true}
        className={styles.carousel}
        // creativeEffect={{
        //   perspective: true,
        //   limitProgress: 2,
        //   prev: {
        //     shadow: true,
        //     translate: [0, 0, -400],
        //   },
        //   next: {
        //     translate: ["100%", 0, 0],
        //   },
        // }}
        fadeEffect={{
          crossFade: true,
        }}
        effect="fade"
        modules={[
          Navigation,
          //   Pagination,
          //   Mousewheel,
          //   Keyboard,
          Autoplay,
          EffectCreative,
          EffectFade,
        ]}
      >
        <SwiperSlide>
          <YoutubeEmbed embedId="Tqo4SGWzmtY?si=HTHCSbDUJU37KtQ2" />
        </SwiperSlide>
        <SwiperSlide>
          <YoutubeEmbed embedId="u-Z00aGn5ro?si=q6qjRow9M-PhGCCk" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <YoutubeEmbed embedId="Tqo4SGWzmtY?si=HTHCSbDUJU37KtQ2" />
        </SwiperSlide>
        <SwiperSlide>
          <YoutubeEmbed embedId="u-Z00aGn5ro?si=q6qjRow9M-PhGCCk" />
        </SwiperSlide>
        <SwiperSlide>
          <YoutubeEmbed embedId="Tqo4SGWzmtY?si=HTHCSbDUJU37KtQ2" />
        </SwiperSlide>
        <SwiperSlide>
          <YoutubeEmbed embedId="u-Z00aGn5ro?si=q6qjRow9M-PhGCCk" />
        </SwiperSlide>
        <SwiperSlide>
          <YoutubeEmbed embedId="Tqo4SGWzmtY?si=HTHCSbDUJU37KtQ2" />
        </SwiperSlide>
        <SwiperSlide>
          <YoutubeEmbed embedId="u-Z00aGn5ro?si=q6qjRow9M-PhGCCk" />
        </SwiperSlide>
        <SwiperSlide>
          <YoutubeEmbed embedId="Tqo4SGWzmtY?si=HTHCSbDUJU37KtQ2" />
        </SwiperSlide>
        <SwiperSlide>
          <YoutubeEmbed embedId="u-Z00aGn5ro?si=q6qjRow9M-PhGCCk" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

export function YoutubeEmbed({ embedId }) {
  return (
    // <div className={styles.videoWrapper}>
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${embedId}`}
      title="YouTube video player"
      frameborder="0"
      allowFullScreen
      preload="metadata"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      style={{ height: "100%", width: "100%" }}
    ></iframe>
    // </div>
  );
}
