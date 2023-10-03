"use client";
import React, { useState } from "react";
import styles from "./EventModal.module.css";
import BackgroundImage from "../../public/static/images/eventsModalBgLaptop.png"
import Image from "next/image";
import StreetDance from "../../public/static/images/desertDuelModal.png";
import closeCross from "../../public/static/images/eventsModalCloseButton.png"
const EventModal = ({ event, closeModal }) => {
  return (
    <div className={styles.wrapper}>
        <Image src={BackgroundImage}
        alt="Background Image" 
        draggable={false}
        className={styles.backgroundImage}
        />
        <div className={styles.modalContent}>
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
            <Image src={closeCross} alt="close" onClick={closeModal}/>
        </div>
        </div>
    </div>
  )
}

export default EventModal