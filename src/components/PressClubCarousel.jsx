"use client"

import Image from "next/image"
import Forward from "../../public/static/images/forwardArrow.svg"
import Backward from "../../public/static/images/backArrow.svg"
// import swiper and swiperslide
import { Swiper, SwiperSlide } from "swiper/react"
// import Swiper core and required modules
import { Navigation, Mousewheel } from "swiper/modules"

import PDFDocument from "./PDFDocument"

import * as styles from "../app/EPC/epc.module.css"

export default function PressClubCarousel() {
    return (
        <>
        <Swiper
          className={styles.carousel}
          // pagination={{ clickable: true }}
          // navigation={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          spaceBetween={50}
          //   slidesPerView={1.1}
          centeredSlides={true}
          //   loop={true}
          mousewheel={{
              forceToAxis: true,
              // invert: true,
              sensitivity: 0.5,
            }}
            breakpoints={{
                300: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                1124: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            }}
            allowTouchMove={false}
            modules={[Navigation, Mousewheel]}
            >
          <SwiperSlide className={styles.slide}>
            <PDFDocument />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <PDFDocument />
          </SwiperSlide>
        </Swiper>
        <div className={styles.carouselController}>
          <button
            className={styles.leftArrow}
            onClick={() => {
              const swiper = document.querySelector(".swiper").swiper
              swiper.slidePrev()
            }}
          >
            <Image src={Backward} alt="" />
          </button>
          <div className={styles.articleAuthor}>
            <p>English Press Club</p>
          </div>
          <button
            className={styles.rightArrow}
            onClick={() => {
              const swiper = document.querySelector(".swiper").swiper
              swiper.slideNext()
            }}
          >
            <Image src={Forward} alt="" />
          </button>
        </div>
        </>
    )
}