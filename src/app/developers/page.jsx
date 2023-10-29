"use client"

import * as styles from "./dev.module.css"

import CustomCursor from "@/components/CustomCursor"

// Importing assets for bg and people
import bg from "./Dev Assets/bg.png"

export default function DevelopersPage() {
  return (
    <>
      <CustomCursor />
      <div className={styles.heroSection}>
        <h1>Developers</h1>
      </div>
    </>
  )
}
