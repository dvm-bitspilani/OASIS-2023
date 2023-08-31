"use client";

import styles from "./page.module.css";
import Image from 'next/image'
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import textLogo from "../../public/static/images/OasisLogo.png"
import Navbar from "@/components/Navbar";
import landingPgBookImg from "../../public/static/images/LandingPageBook.png"
import rightElements from "../../public/static/images/landingPgRightElements.png"
import leftElements from "../../public/static/images/landingPgLeftElements.png"
export default function Home() {
  const [textLogoWidth, setTextLogoWidth] = useState(0);
  const [textLogoHeight, setTextLogoHeight] = useState(0);
  const [LandingBookWidth, setLandingBookWidth] = useState(0);
  const [LandingBookHeight, setLandingBookHeight] = useState(0);
  const [RegisterBtnWidth, setRegisterBtnWidth] = useState(200);
  const [RegisterBtnHeight, setRegisterBtnHeight] = useState(75);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoading(true);
      setShowLoader(true);
      setTimeout(() => {
        setTextLogoWidth(Math.floor(window.innerWidth * 0.3));
        setTextLogoHeight(Math.floor(window.innerHeight * 0.2));
        setLandingBookWidth(Math.floor(window.innerWidth * 0.5));
        setLandingBookHeight(Math.floor(window.innerHeight * 0.5));
        setRegisterBtnWidth(Math.min(200, Math.floor(window.innerWidth * 0.5)));
        setRegisterBtnHeight(75);
        setIsLoading(false);
        // setTimeout(() => {
          setShowLoader(false);
        // }, 1000);
      }, 2900);
    }
  }, []);
  return (
    <main style={{
      "position" : "relative"
    }}>
      {isLoading ? (
        <div className={styles.loaderContainer}>
        <Image src={textLogo} alt="OASIS" style={{transform: "scale(.5)"}}/>
      </div>
      ) : 
      (
        <>
          <Navbar/>
        <div className={styles.pageWrapper}>
<div
          className={`${styles.midSection} ${
            showLoader ? styles.loaderContainer : ""
          } ${isLoading ? "loaded" : ""}`}
        >
      <div className={styles.textLogoWrapper}>
        <Image 
        src={textLogo}
        // layout="fill"
        className = {styles.textLogoImg}
        alt="OASIS"/>
      </div>
      <div className={styles.bookImgWrapper}>
        <div className={styles.leftElements}>
        <Image 
        src={leftElements}
        className={styles.landingPgLeftGrp}
        alt="Element"/>
        </div>
      <Image 
        src={landingPgBookImg}
        className = {styles.LandingBookImg}
        alt="Book"/>
         <div className={styles.rightElements}>
         <Image 
        src={rightElements}
        className={styles.landingPgRightGrp}
        alt="Element"/>
     
        </div>
      </div>
      <Link href="/register" legacyBehavior>
        <Image 
          src="/static/images/RegisterButton.png"
          width={RegisterBtnWidth}
          height={RegisterBtnHeight}
          className={styles.RegisterBtnImg}
          alt="Register"
        />
      </Link>
      <div className={styles.landingPageDate}>
      <span>28TH - 31ST OCTOBER</span>
      </div>
      </div>

           </div>
           </>
      )}
    </main>
  );
}
