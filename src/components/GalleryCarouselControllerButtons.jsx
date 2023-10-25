"use client"

import React from "react"
import styles from "./GalleryCarousel.module.css"

export default function GalleryCarouselControllerButtons({ classApplied }) {
  const swiper = React.useRef(null)

  React.useEffect(() => {
    swiper.current = document.querySelector(".swiper").swiper
    swiper.current.on("slideChange", () => {
      const carouselPrevButton = document.querySelector(
        `.${styles.carouselLeftButton}`
      )
      const carouselNextButton = document.querySelector(
        `.${styles.carouselRightButton}`
      )
      const carouselPrevButtonMobile = document.querySelectorAll(
        `.${styles.carouselLeftButton}`
      )[1]
      const carouselNextButtonMobile = document.querySelectorAll(
        `.${styles.carouselRightButton}`
      )[1]
      if (swiper.current.progress === 0) {
        carouselPrevButton.style.opacity = 0.5
        carouselPrevButton.disabled = true

        carouselPrevButtonMobile.style.opacity = 0.5
        carouselPrevButtonMobile.disabled = true
      } else {
        carouselPrevButton.style.opacity = 1
        carouselPrevButton.disabled = false

        carouselPrevButtonMobile.style.opacity = 1
        carouselPrevButtonMobile.disabled = false
      }
      if (swiper.current.progress === 1) {
        carouselNextButton.style.opacity = 0.5
        carouselNextButton.disabled = true

        carouselNextButtonMobile.style.opacity = 0.5
        carouselNextButtonMobile.disabled = true
      } else {
        carouselNextButton.style.opacity = 1
        carouselNextButton.disabled = false

        carouselNextButtonMobile.style.opacity = 1
        carouselNextButtonMobile.disabled = false
      }
    })
  })

  React.useEffect(() => {
    const carouselPrevButton = document.querySelector(
      `.${styles.carouselLeftButton}`
    )
    carouselPrevButton.style.opacity = 0.5
    carouselPrevButton.disabled = true
  }, [])

  const carouselPrevElem = () => {
    swiper.current.slidePrev(2000, false)
  }

  const carouselNextElem = () => {
    swiper.current.slideNext(2000, false)
  }

  return (
    <div className={classApplied}>
      <button
        className={styles.carouselLeftButton}
        onClick={() => carouselPrevElem()}
      >
        <svg
          width="24"
          height="41"
          viewBox="0 0 24 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.3203 2.99997L3.00098 20.3193L20.3203 37.6387"
            stroke="#5DB3F1"
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
          width="24"
          height="41"
          viewBox="0 0 24 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.99998 37.6387L20.3193 20.3193L2.99998 3"
            stroke="#5DB3F1"
            strokeWidth="5.77312"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}
