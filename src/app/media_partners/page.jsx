"use client"

import React, { useEffect, useRef, useState } from "react"
import styles from "./page.module.css"
import "../globals.css"
import { useRouter } from "next/navigation"
import Image from "next/image"

import skullImg from "../../../public/static/images/skull.svg"
import CustomCursor from "@/components/CustomCursor"
// import skullImg from "../../../";

import cross from "../../../public/static/images/cross.svg"

const Page = () => {
  const [isLoading, setIsLoading] = useState(true)

  const router = useRouter()

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

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://bits-oasis.org/2023/main/registrations/media_partners/"
      )
      const json = await res.json()
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
      setData(json)
    }
    fetchData()
  }, [])

  // map the data to the influencer cards where category is "influencer"
const influencerCards = data.map((item) => {
  if (item.publication === false) {
    return (
      <PartnerCard
        key={item.name}
        name={item.name}
        link={item.link}
        icon={item.icon}
      />
    )
  }
}
)

const publicationCards = data.map((item) => {
  if (item.publication === true) {
    return (
      <PartnerCard
        key={item.name}
        name={item.name}
        link={item.link}
        icon={item.icon}
      />
    )
  }
})

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
      <div className={styles["sponsorsPage"]}>
        <CustomCursor />
        <Image
          suppressHydrationWarning
          src={cross}
          onClick={() => {
            router.push("/")
          }}
          alt="Close"
          className={styles.cross}
        />
        <h1 className={styles.heading}>MEDIA PARTNERS</h1>

        <div className={styles.sponsorsContent}>
          <div className={styles.scrollBarContainer} onClick={handleTrackSnap}>
            <div className={styles.scrollBar}></div>
            <Image
              suppressHydrationWarning
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
            className={styles.sponsorsContentContainer}
            ref={contentRef}
            onScroll={handleScroll}
          >
            <div className={styles.cardsContainer}>
            <h1>Influencers</h1>
            {influencerCards}
            <h1>Publications</h1>
            {publicationCards}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page

export function PartnerCard(props) {

  return (
    <a className={styles.card} href={props.link}>
      {props.icon && (
        <div className={styles.imgContainer} style={{backgroundImage : `url(${props.icon})`}}>
          {/* <img src={props.icon} alt="image not found" /> */}
        </div>
      )}
        <h2>{props.name}</h2>
    </a>
  )
}
