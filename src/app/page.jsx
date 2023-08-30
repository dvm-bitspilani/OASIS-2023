"use client";

import styles from "./page.module.css";
import Image from 'next/image'
import React from "react";
import { HamContext } from "@/context/HamContextProvider";
import { useState, useEffect } from "react";
export default function Home() {
  // const { isHamOpen, setIsHamOpen } = React.useContext(HamContext);
  const [textLogoWidth, setTextLogoWidth] = useState(0);
  const [textLogoHeight, setTextLogoHeight] = useState(0);
  const [LandingBookWidth, setLandingBookWidth] = useState(0);
  const [LandingBookHeight, setLandingBookHeight] = useState(0);
  const [RegisterBtnWidth, setRegisterBtnWidth] = useState(200);
  const [RegisterBtnHeight, setRegisterBtnHeight] = useState(75);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTextLogoWidth(Math.floor(window.innerWidth * 0.3));
      setTextLogoHeight(Math.floor(window.innerHeight * 0.2));
      setLandingBookWidth(Math.floor(window.innerWidth * 0.5));
      setLandingBookHeight(Math.floor(window.innerHeight * 0.5));
      setRegisterBtnWidth(Math.min(200, Math.floor(window.innerWidth * 0.5)));
      setRegisterBtnHeight(75);
    }
  }, []);
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
