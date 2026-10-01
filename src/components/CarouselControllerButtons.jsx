"use client"

import React from "react"
import styles from "./about.module.css"

export default function CarouselControllerButtons({ classApplied }) {
  const swiper = React.useRef(null)
  const [edges, setEdges] = React.useState({prev: true, next: false})

  React.useEffect(() => {
    const instance = document.querySelector(".aboutSwiper")?.swiper
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
        type="button" aria-label="Next slide" disabled={edges.next} style={{opacity: edges.next ? 0.5 : 1}}
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
  )
}
