"use client";

import styles from "./page.module.css";
import Image from 'next/image'
import React from "react";
import { HamContext } from "@/context/HamContextProvider";

export default function Home() {
  // const { isHamOpen, setIsHamOpen } = React.useContext(HamContext);
  if (typeof window !== 'undefined') {
    textLogoWidth = Math.floor(window.innerWidth * 0.3);
    textLogoHeight = Math.floor(window.innerHeight * 0.2);
    LandingBookWidth = Math.floor(window.innerWidth * 0.5);
    LandingBookHeight = Math.floor(window.innerHeight * 0.5);
    RegisterBtnWidth = Math.floor(window.innerWidth * 0.5);
    RegisterBtnHeight = Math.floor(window.innerHeight * 0.5);
  }
  return (
    <main>
     <div className={styles.pageWrapper}>
      <div className={styles.midSection}>
      <div className={styles.textLogoWrapper}>
        <Image 
        src="/static/images/OasisLogo.png"
        width={textLogoWidth}
        height={textLogoHeight}
        className = {styles.textLogoImg}
        alt="Text Oasis Logo"/>
      </div>
      <div className={styles.bookImgWrapper}>
      <Image 
        src="/static/images/LandingPageBook.png"
        width={LandingBookWidth}
        height={LandingBookHeight}
        className = {styles.LandingBookImg}
        alt="Book Image"/>
      </div>
      <div className={styles.registerBtnWrapper}>
      <Image 
        src="/static/images/RegisterButton.png"
        width={200}
        height={75}
        className = {styles.RegisterBtnImg}
        alt="Register Button"/>
      </div>
      <div className={styles.landingPageDate}>
      <span>28TH - 31ST OCTOBER</span>
      </div>
      </div>
     </div>
    </main>
  );
}
