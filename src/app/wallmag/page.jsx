"use client"

import React, { useEffect, useRef, useState } from "react"
import styles from "./page.module.css"
import "../globals.css"
import { useRouter } from "next/navigation"
import Image from "next/image"

import skullImg from "../../../public/static/images/skull.svg"
import CustomCursor from "@/components/CustomCursor"
// import skullImg from "../../../";

import web1 from "../../../public/static/images/web1.svg"
import web2 from "../../../public/static/images/web2.png"
import cross from "../../../public/static/images/cross.svg"

const Page = () => {
  const router = useRouter()

  // Chnange this to true when the data is populated from back
  const [isLoading, setIsLoading] = useState(false)

  const skullRef = useRef(null)
  const contentRef = useRef(null)

  const handleTrackSnap = (e) => {
    const formContainerElem = contentRef.current
    const scrollBarContainer = document.querySelector(
      `.${styles.scrollBarContainer}`
    )

    const percentage =
      ((e.clientY - scrollBarContainer.offsetTop) /
        scrollBarContainer.clientHeight) *
      100
    const maxScrollTopValue =
      formContainerElem.scrollHeight - formContainerElem.clientHeight

    formContainerElem.scrollTo({
      top: (percentage / 100) * maxScrollTopValue,
      behavior: "smooth",
    })
  }

  const handleSkullMouseDown = (e) => {
    // console.log("mousedown");
    e.preventDefault()

    document.addEventListener("mousemove", handleSkullDragMove)
    document.addEventListener("touchmove", handleSkullDragMove)

    document.addEventListener("mouseup", handleSkullDragEnd)
    document.addEventListener("touchend", handleSkullDragEnd)
  }

  const handleSkullDragMove = (e) => {
    // const skullElem = skullRef.current;
    const formContainerElem = contentRef.current
    const scrollBarContainer = document.querySelector(
      `.${styles.scrollBarContainer}`
    )

    const maxScrollTopValue =
      formContainerElem.scrollHeight - formContainerElem.clientHeight

    const clientY = e.clientY || e.touches[0].clientY

    const percentage =
      ((clientY - scrollBarContainer.offsetTop) /
        scrollBarContainer.clientHeight) *
      100

    formContainerElem.scrollTop = (percentage / 100) * maxScrollTopValue
  }

  const handleSkullDragEnd = (e) => {
    document.removeEventListener("mousemove", handleSkullDragMove)
    document.removeEventListener("mouseup", handleSkullDragEnd)
    document.removeEventListener("touchmove", handleSkullDragMove)
    document.removeEventListener("touchend", handleSkullDragEnd)
  }

  function handleScroll(inp) {
    // const maxScrollTopValue = formContainerRef.current.scrollTopMax;
    const maxScrollTopValue =
      contentRef.current.scrollHeight - contentRef.current.clientHeight
    // const percentage = (contentRef.current.scrollTop / maxScrollTopValue )*100;
    const percentage = (contentRef.current.scrollTop / maxScrollTopValue) * 100
    percentage > 100
      ? (skullRef.current.style.top = "100%")
      : (skullRef.current.style.top = `${percentage}%`)

    // console.log(percentage);
    // skullRef.current.style.top = `${percentage}%`;
    // skullElem.style.top = `${percentage}%`;
  }

  const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://bits-oasis.org/2023/main/registrations/wallmag"
      )
      const json = await res.json()
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
      setCards(json)
    }
    fetchData()
  }, [])

  return (
    <>
      {isLoading && (
        <div className="loaderContainer">
          {/* <MyVideoLoader/> */}
          <video
            src={require("../../../public/static/images/loadervideo.mp4")} // Update with the correct path
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            width="100%"
          />
        </div>
      )}
      <div className={styles["wallmagPage"]}>
        <CustomCursor />
        <Image src={web1} className={styles.web1} alt="" />
        <Image src={web2} className={styles.web2} alt="" />
        <Image
          src={cross}
          onClick={() => {
            router.push("/")
          }}
          alt="Close"
          className={styles.cross}
        />
        <h1 className={styles.wallmagHeading}>WALLMAG</h1>

        <div className={styles["wallmagContent"]}>
          <div className={styles.scrollBarContainer} onClick={handleTrackSnap}>
            <div className={styles.scrollBar}></div>
            <Image
              draggable={false}
              onMouseDown={handleSkullMouseDown}
              onTouchStart={handleSkullMouseDown}
              id="skull"
              src={skullImg}
              alt="skull"
              ref={skullRef}
            />
          </div>
          <div
            className={styles.wallmagContentContainer}
            ref={contentRef}
            onScroll={handleScroll}
          >
            <div className={styles.cardsContainer}>
              {/* {cards.map((card, index) => (
                <div className={styles.card} key={index}>
                  <div className={styles.cardImageContainer}>
                    <img src={card.image} alt="" className={styles.cardImage} />
                    <div className={styles.cardHeading}>
                      <h1>{card.name}</h1>
                      <h2>{card.dept}</h2>
                    </div>
                  </div>
                  <div className={styles.cardDesc}>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))} */}
              <div
                style={{
                  display: "flex",
                  height: "75vh",
                  alignItems: "center",
                }}
              >
                <h1 className={styles.wallmagHeading}>Coming Soon</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
