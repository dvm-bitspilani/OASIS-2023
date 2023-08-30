"use client";

import styles from "./page.module.css";
import Image from 'next/image'
import React from "react";
import { HamContext } from "@/context/HamContextProvider";
import { useState, useEffect } from "react";
import Link from "next/link";
import textLogo from "../../public/static/images/OasisLogo.png"
import Navbar from "@/components/Navbar";
import landingPgBookImg from "../../public/static/images/LandingPageBook.png"
import rightElements from "../../public/static/images/landingPgRightElements.png"
import leftElements from "../../public/static/images/landingPgLeftElements.png"
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
      <Navbar/>
     <div className={styles.pageWrapper}>
      <div className={styles.midSection}>
      <div className={styles.textLogoWrapper}>
        <Image 
        src={textLogo}
        // layout="fill"
        className = {styles.textLogoImg}
        alt="Text Oasis Logo"/>
      </div>
      <div className={styles.bookImgWrapper}>
        <div className={styles.leftElements}>
        {/* <Image 
        src="/static/images/Group1.png"
        width={100}
        height={100}
        id= "LandingPgGrp1"
        alt="Element"/>
        <Image 
        src="/static/images/Group2.png"
        width={100}
        height={100}
        id= "LandingPgGrp2"
        alt="Element"/>
        <Image 
        src="/static/images/Group3.png"
        width={100}
        height={100}
        id= "LandingPgGrp3"
        alt="Element"/>
        <Image 
        src="/static/images/Group4.png"
        width={100}
        height={100}
        id= "LandingPgGrp4"
        alt="Element"/>
        <Image 
        src="/static/images/Group5.png"
        width={100}
        height={100}
        id= "LandingPgGrp5"
        alt="Element"/>
        <Image 
        src="/static/images/Group6.png"
        width={100}
        height={100}
        id= "LandingPgGrp6"
        alt="Element"/>
        <Image 
        src="/static/images/Group7.png"
        width={100}
        height={100}
        id= "LandingPgGrp7"
        alt="Element"/>
        <Image 
        src="/static/images/Group8.png"
        width={100}
        height={100}
        id= "LandingPgGrp8"
        alt="Element"/>
        <Image 
        src="/static/images/Group9.png"
        width={100}
        height={100}
        id= "LandingPgGrp9"
        alt="Element"/>
        <Image 
        src="/static/images/Group10.png"
        width={100}
        height={100}
        id= "LandingPgGrp10"
        alt="Element"/> */}
        <Image 
        src={leftElements}
        // width={300}
        // height={300}
        className={styles.landingPgLeftGrp}
        alt="Element"/>
        </div>
      <Image 
        src={landingPgBookImg}
        // width={LandingBookWidth}
        // height={LandingBookHeight}
        className = {styles.LandingBookImg}
        alt="Book Image"/>
         <div className={styles.rightElements}>
         <Image 
        src={rightElements}
        // width={300}
        // height={300}
        className={styles.landingPgRightGrp}
        alt="Element"/>
        {/* <Image 
        src="/static/images/Group1.png"
        width={100}
        height={100}
        id= "LandingPgGrp1"
        alt="Element"/>
        <Image 
        src="/static/images/Group2.png"
        width={100}
        height={100}
        id= "LandingPgGrp2"
        alt="Element"/>
        <Image 
        src="/static/images/Group3.png"
        width={100}
        height={100}
        id= "LandingPgGrp3"
        alt="Element"/>
        <Image 
        src="/static/images/Group4.png"
        width={100}
        height={100}
        id= "LandingPgGrp4"
        alt="Element"/>
        <Image 
        src="/static/images/Group5.png"
        width={100}
        height={100}
        id= "LandingPgGrp5"
        alt="Element"/>
        <Image 
        src="/static/images/Group6.png"
        width={100}
        height={100}
        id= "LandingPgGrp6"
        alt="Element"/>
        <Image 
        src="/static/images/Group7.png"
        width={100}
        height={100}
        id= "LandingPgGrp7"
        alt="Element"/>
        <Image 
        src="/static/images/Group8.png"
        width={100}
        height={100}
        id= "LandingPgGrp8"
        alt="Element"/>
        <Image 
        src="/static/images/Group9.png"
        width={100}
        height={100}
        id= "LandingPgGrp9"
        alt="Element"/>
        <Image 
        src="/static/images/Group10.png"
        width={100}
        height={100}
        id= "LandingPgGrp10"
        alt="Element"/> */}
        </div>
      </div>
      {/* <div className={styles.registerBtnWrapper}>
      <Image 
        src="/static/images/RegisterButton.png"
        width={200}
        height={75}
        className = {styles.RegisterBtnImg}
        alt="Register Button"/>
        <Link href="/register"> 
              <a>
                <Image 
                  src="/static/images/RegisterButton.png"
                  width={RegisterBtnWidth}
                  height={RegisterBtnHeight}
                  className={styles.RegisterBtnImg}
                  alt="Register Button"
                />
              </a>
            </Link> 
      </div> */}
      <Link href="/register" legacyBehavior>
            <a className={styles.registerBtnWrapper}> 
              <Image 
                src="/static/images/RegisterButton.png"
                width={RegisterBtnWidth}
                height={RegisterBtnHeight}
                className={styles.RegisterBtnImg}
                alt="Register Button"
              />
            </a>
          </Link>
      <div className={styles.landingPageDate}>
      <span>28TH - 31ST OCTOBER</span>
      </div>
      </div>
     </div>
    </main>
  );
}
