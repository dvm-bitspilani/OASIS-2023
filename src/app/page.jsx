"use client";

import styles from "./page.module.css";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { HamContext } from "@/context/HamContextProvider";
import Link from "next/link";
import textLogo from "../../public/static/images/OasisLogo.png";
import Navbar from "@/components/Navbar";
import Hamburger from "@/components/hamburger";
import HamImage from "../../public/static/images/hamIcon.svg";
import landingPgBookImg from "../../public/static/images/LandingPageBook.png";
import rightElements from "../../public/static/images/landingPgRightElements.png";
import leftElements from "../../public/static/images/landingPgLeftElements.png";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "rooks";

export default function Home() {
  const { isHamOpen, setIsHamOpen } = useContext(HamContext);

  const [textLogoWidth, setTextLogoWidth] = useState(0);
  const [textLogoHeight, setTextLogoHeight] = useState(0);
  const [LandingBookWidth, setLandingBookWidth] = useState(0);
  const [LandingBookHeight, setLandingBookHeight] = useState(0);
  const [RegisterBtnWidth, setRegisterBtnWidth] = useState(200);
  const [RegisterBtnHeight, setRegisterBtnHeight] = useState(75);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
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

  const openHam = () => {
    if (isHamOpen) {
      setIsHamOpen(false);
    } else {
      setIsHamOpen(true);
    }
  };

  useEffect(() => {
    const topBar1 = document.querySelector("#hamIcon1");
    const topBar2 = document.querySelector("#hamIcon2");
    const topBar3 = document.querySelector("#hamIcon3");
    if (isHamOpen && !isLoading) {
      topBar1.style.transform = "rotatez(45deg) translate(6px,0px)";
      topBar2.style.transform = "rotatez(-45deg) translate(1px,0px)";
      topBar3.style.transform = "translate(16px,-8.5px) rotatez(47deg)";
      topBar3.style.width = "50%";
      topBar3.style.borderRadius = "0px 5px 5px 0px";
    } else if (!isHamOpen && !isLoading) {
      topBar1.style.transform = "rotate(0deg) translate(0px,0px)";
      topBar2.style.transform = "rotatez(0deg) translate(0px,0px)";
      topBar3.style.transform = "translate(0px,0px) rotatez(0deg)";
      topBar3.style.width = "75%";
      topBar3.style.borderRadius = "5px";
    }
  }, [isHamOpen]);

  const { innerWidth, innerHeight } = useWindowSize();

  return (
    <main
      style={{
        position: "relative",
      }}
    >
      {isLoading ? (
        <div className={styles.loaderContainer}>
          <Image
            src={textLogo}
            alt="OASIS"
            style={{ transform: "scale(.5)" }}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <div
            className={styles.hamSection}
            style={isHamOpen ? { zIndex: 10 } : { zIndex: 1 }}
          >
            <div className={styles.hamBtn}>
              <AnimatePresence>
                <Image src={HamImage} alt="Menu" />
                <div id="ham-menu" className={styles.hamIcon} onClick={openHam}>
                  <span id="hamIcon1" className={styles.hamIcon1}></span>
                  <span id="hamIcon2" className={styles.hamIcon2}></span>
                  <span id="hamIcon3" className={styles.hamIcon3}></span>
                </div>
                {isHamOpen ? (
                  <motion.div
                    key="hamBG"
                    className={styles.hamBG}
                    style={{
                      height: `${innerHeight / 10}px`,
                      width: `${innerHeight / 10}px`,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 50 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 1 }}
                  ></motion.div>
                ) : (
                  ""
                )}
              </AnimatePresence>
            </div>
            <AnimatePresence>
              {isHamOpen ? (
                <motion.div
                  key="hamMenu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                >
                  <Hamburger />
                </motion.div>
              ) : (
                ""
              )}
            </AnimatePresence>
          </div>
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
                  className={styles.textLogoImg}
                  alt="OASIS"
                />
              </div>
              <div className={styles.bookImgWrapper}>
                <div className={styles.leftElements}>
                  <Image
                    src={leftElements}
                    className={styles.landingPgLeftGrp}
                    alt="Element"
                  />
                </div>
                <Image
                  src={landingPgBookImg}
                  className={styles.LandingBookImg}
                  alt="Book"
                />
                <div className={styles.rightElements}>
                  <Image
                    src={rightElements}
                    className={styles.landingPgRightGrp}
                    alt="Element"
                  />
                </div>
              </div>
              <AnimatePresence>
                {isHamOpen ? (
                  ""
                ) : (
                  <motion.div
                    key="register"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{duration: 1}}
                  >
                    <Link href="/register" legacyBehavior>
                      <a className={styles.registerBtnWrapper}>
                        <Image
                          src="/static/images/RegisterButton.png"
                          width={RegisterBtnWidth}
                          height={RegisterBtnHeight}
                          className={styles.RegisterBtnImg}
                          alt="Register"
                        />
                      </a>
                    </Link>
                    <div className={styles.landingPageDate}>
                      <span>28TH - 31ST OCTOBER</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
