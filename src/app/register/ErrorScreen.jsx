import React from "react"
import styles from "./ErrorScreen.module.css"

export default function ErrorScreen({ error, errorMessage, CloseModal }) {
  const heading = error ? "Oops!" : "Success!"

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      CloseModal()
    }
  }

  return (
    <div className={styles.errorContainer} onClick={handleBackdropClick}>
      <div className={styles.error}>
        <h1>{heading}</h1>
        <p>{errorMessage}</p>
        <div className={styles.cross} onClick={CloseModal}>
          <span className={styles.line1}></span>
          <span className={styles.line2}></span>
        </div>
      </div>
    </div>
  )
}
