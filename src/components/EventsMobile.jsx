"use client"
import { getEventDetails } from "@/helpers/archive"

import React, { useState, useEffect } from "react"
import Card from "./EventsMobileCard"
import styles from "./eventsMobile2.module.css"
import Image from "next/image"
import Forward from "../../public/static/images/forwardArrow.svg"
import Backward from "../../public/static/images/backArrow.svg"
import { useWindowSize } from "@/helpers/useWindowSize"
import tasks from "@/helpers/Events"

export default function EventsMobile2({ handleTransition }) {
  const { innerWidth, innerHeight } = useWindowSize()
  const [eventDetails, setEventDetails] = useState([])



  useEffect(() => {
    getEventDetails()
      .then((data) => {
        setEventDetails(
          data.map((item) => {
            return {
              key: item.key,
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
        console.log(error)
      })
  }, [])

  const [width, setWidth] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [cardNo, setCardNo] = useState(1)
  const totalCards = tasks.length + 1

  useEffect(() => {
    const updateWidth = () => {
      setWidth(innerWidth || 400)
      setTranslateX(-(cardNo - 1) * (innerWidth || 400))
    }
    window.addEventListener("resize", updateWidth)
    updateWidth()
    return () => {
      window.removeEventListener("resize", updateWidth)
    }
  }, [innerWidth, cardNo])

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
              <button type="button" aria-label="Browse events" onClick={handleFirstForward}><Image src={Forward} alt="" /></button>
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
          <button type="button" aria-label="Previous event" onClick={cardNo === 2 ? handleFirstBackward : handleBackward} disabled={cardNo === 1}>
          <Image
            src={Backward}
            alt=""
          />
          </button>
          <button type="button" aria-label="Next event" onClick={handleForward} disabled={cardNo === totalCards}>
          <Image
            src={Forward}
            style={{
              opacity: cardNo == totalCards ? "0.4" : "1",
              cursor: cardNo == totalCards ? "auto" : "pointer",
            }}
            alt=""
          />
          </button>
        </div>
      </div>
    </>
  )
}
