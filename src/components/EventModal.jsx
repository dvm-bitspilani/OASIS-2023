"use client"
import React, { useState, useEffect } from "react"
import styles from "./EventModal.module.css"
import BackgroundImage from "../../public/static/images/eventsModalBgLaptop.png"
import Image from "next/image"
import StreetDance from "../../public/static/images/desertDuelModal.png"
import OasisLogo from "../../public/static/images/eventsModalOasisLogo.png"
import closeCross from "../../public/static/images/eventsModalCloseButton.png"
const EventModal = ({ event, closeModal }) => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (event) {
      setIsOpen(true)
    }
  }, [event])

  const handleClose = () => {
    setIsOpen(false)
    closeModal()
  }
  return (
    <div
      className={`${styles.wrapper} ${
        isOpen ? `${styles.open}` : `${styles.close}`
      }`}
      onClick={handleClose}
    >
      {/* <Image src={BackgroundImage}
        alt="Background Image" 
        draggable={false}
        className={styles.backgroundImage}
        onClick={(e) => e.stopPropagation()}
        />
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.heading}>
            <h2>{event.name}</h2>
        </div>
        <div className={styles.subheadings}>
        <span>Details</span><span>Guidelines</span><span>Contact</span>
        </div>
        <div className={styles.eventImage}>
        <Image src={StreetDance} alt="" />
        </div>
        <div className={styles.eventDescription}>
            {event.desc}
        </div>
        <div className={styles.closeBtn}>
            <Image src={closeCross} alt="close" onClick={handleClose}/>
        </div>
        </div> */}
      <div
        className={styles.contentWrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.heading}>
          <span>{event.name}</span>
        </div>
        <div className={styles.eventImage}>
          <Image src={event.image} alt="" width={200} height={200} />
        </div>
        <div className={styles.eventDescription}>{event.desc}</div>
      </div>
      <div className={styles.closeBtn}>
        <Image src={closeCross} alt="close" onClick={handleClose} />
      </div>
    </div>
  )
}

export default EventModal
