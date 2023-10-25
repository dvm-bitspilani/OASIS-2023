"use client"

import React from "react"
import Image from "next/image"
import * as styles from "./eventsMobile2.module.css"

export default function EventsMobile2({
  width,
  image,
  name,
  desc,
  key,
}) {

  return (
    <>
      <div className={styles.cardContainer} key={key} style={{ width: width }}>
        <div className={styles.content}>
          <div
            className={styles.image}
          >
            <Image width={300} height={200} src={image} alt="img not found" />
          </div>
          <h1 className={styles.title} style={{ fontFamily: "KoPub" }}>
            {name}
          </h1>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
    </>
  )
}
