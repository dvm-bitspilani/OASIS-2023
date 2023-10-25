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
