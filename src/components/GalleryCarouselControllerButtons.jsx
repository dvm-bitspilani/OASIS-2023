"use client"

import React from "react"
import styles from "./GalleryCarousel.module.css"

export default function GalleryCarouselControllerButtons({ classApplied }) {
  const swiper = React.useRef(null)
  const [edges, setEdges] = React.useState({prev: true, next: false})

  React.useEffect(() => {
    const instance = document.querySelector(".gallerySwiper")?.swiper
    if (!instance) return
    swiper.current = instance
    const update = () => setEdges({prev: instance.isBeginning, next: instance.isEnd})
    update()
    instance.on("slideChange", update)
    return () => instance.off("slideChange", update)
  }, [])

  const carouselPrevElem = () => swiper.current?.slidePrev(2000, false)
  const carouselNextElem = () => swiper.current?.slideNext(2000, false)

  return (
    <div className={classApplied}>
      <button
        type="button" aria-label="Previous slide" disabled={edges.prev} style={{opacity: edges.prev ? 0.5 : 1}}
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
        type="button" aria-label="Next slide" disabled={edges.next} style={{opacity: edges.next ? 0.5 : 1}}
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
