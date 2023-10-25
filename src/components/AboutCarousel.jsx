"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import "swiper/css/effect-creative"

import {
  Navigation,
  Autoplay,
  EffectCreative,
  EffectFade,
} from "swiper/modules"

import styles from "./aboutCarousel.module.css"

export default function AboutCarousel() {
  React.useEffect(() => {
    document.body.style.height = "100dvh"
    return () => {
      document.body.style.height = "auto"
    }
  }, [])

  return (
    <>
      <Swiper
        speed={2000}
        className={styles.carousel}
        fadeEffect={{
          crossFade: true,
        }}
        effect="fade"
        modules={[
          Navigation,
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
      </Swiper>
    </>
  )
}

export function YoutubeEmbed({ embedId }) {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${embedId}`}
      title="YouTube video player"
      frameBorder="0"
      allowFullScreen
      preload="metadata"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      style={{ height: "100%", width: "100%" }}
    ></iframe>
  )
}
