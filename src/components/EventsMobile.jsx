"use client"

import React, { useState, useEffect } from "react"
import Card from "./EventsMobileCard"
import * as styles from "./eventsMobile2.module.css"
import Image from "next/image"
import Forward from "../../public/static/images/forwardArrow.svg"
import Backward from "../../public/static/images/backArrow.svg"
import { useWindowSize } from "rooks"
import tasks from "@/helpers/Events"

export default function EventsMobile2({ handleTransition }) {
  const { innerWidth, innerHeight } = useWindowSize()
  const [eventDetails, setEventDetails] = useState([])

  async function getEventDetails() {
    const res = await fetch(
      "https://bits-oasis.org/2023/main/registrations/events_details"
    )
    if (!res.ok) {
      throw new Error("Failed to get Events")
    }
    return res.json()
  }

  useEffect(() => {
    getEventDetails()
      .then((data) => {
        setEventDetails(
          data.map((item) => {
            return {
              name: item.name,
              desc: item.about,
              image: item.img_mobile_url,
              organiser: item.organiser,
              contact: item.contact,
            }
          })
        )
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const [width, setWidth] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [cardNo, setCardNo] = useState(1)
  const totalCards = tasks.length + 1

  useEffect(() => {
    const updateWidth = () => {
      setWidth(innerWidth)
    }
    window.addEventListener("resize", updateWidth)
    updateWidth()
    return () => {
      window.removeEventListener("resize", updateWidth)
    }
  }, [innerWidth])


  let translateStyle = {
    transform: `translateX(${translateX}px)`,
  }

  const handleForward = () => {
    if (cardNo != totalCards) {
      setCardNo(cardNo + 1)
      setTranslateX(translateX - width)
    }
  }
  const handleBackward = () => {
    if (cardNo != 1) {
      setCardNo(cardNo - 1)
      setTranslateX(translateX + width)
    }
  }

  const handleFirstForward = () => {
    setCardNo(cardNo + 1)
    setTranslateX(translateX - width)
    // setButtonTranslate(0);
  }

  const handleFirstBackward = () => {
    setCardNo(cardNo - 1)
    setTranslateX(translateX + width)
  }


  let CardsList = eventDetails.map((card) => {
    return (
      <Card
        key={card.key}
        name={card.name}
        image={card.image}
        desc={card.desc}
        onBackward={handleBackward}
        onForward={handleForward}
        width={width}
      />
    )
  })

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainContainer} style={translateStyle}>
          <div className="firstCard" style={{ width: width }}>
            <h1 className={styles.firstHeading} style={{ width: width }}>
              EVENTS
            </h1>
            <p className={styles.firstText} style={{ width: width }}>
              Tap to start your journey!
              <br />
              Adventures lie ahead...
            </p>
            <div className={styles.navigation} style={{ width: width }}>
              <Image src={Forward} onClick={handleFirstForward} alt="" />
            </div>
          </div>
          {CardsList}
        </div>
        <div
          className={styles.navigation}
          style={{
            transform:
              cardNo == 1 ? `translateX(${width}px)` : `translateX(${0}px)`,
          }}
        >
          <Image
            src={Backward}
            onClick={cardNo == 2 ? handleFirstBackward : handleBackward}
            alt=""
          />
          <Image
            src={Forward}
            onClick={cardNo == totalCards ? "" : handleForward}
            style={{
              opacity: cardNo == totalCards ? "0.4" : "1",
              cursor: cardNo == totalCards ? "auto" : "pointer",
            }}
            alt=""
          />
        </div>
      </div>
    </>
  )
}
