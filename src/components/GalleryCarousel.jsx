"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/grid"
import { Grid } from "swiper/modules"
import { Navigation, Mousewheel, Keyboard } from "swiper/modules"

const GalleryCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        grid={{
          rows: 2,
        }}
        keyboard={true}
        mousewheel={true}
        spaceBetween={30}
        modules={[Grid, Navigation, Keyboard, Mousewheel]}
        className="mySwiper gallerySwiper"
      >
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
      </Swiper>
    </>
  )
}

export default GalleryCarousel
