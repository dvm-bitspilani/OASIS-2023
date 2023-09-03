"use client";

import styles from "./page.module.css";
import Image from "next/image";
import React from "react";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useContext } from "react";
import { HamContext } from "@/context/HamContextProvider";
import Link from "next/link";
import textLogo from "../../public/static/images/OasisLogo.png";
import Navbar from "@/components/Navbar";
import Hamburger from "@/components/hamburger";
import landingPgBookImg from "../../public/static/images/LandingPageBook.png";
import rightElements from "../../public/static/images/landingPgRightElements.png";
import leftElements from "../../public/static/images/landingPgLeftElements.png";
// import MyVideoLoader from "@/components/VideoLoader";
import { gsap } from "gsap";
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

  const numberOfRandom = 10;
  const randomGenerationConfig = [32, -10, 30, 40, 25, 86, 0, 0];

  const [randomLeft1, setrandomLeft1] = useState(
    generateRandomStatesArray(numberOfRandom, ...randomGenerationConfig)
  );

  const [randomLeft2, setrandomLeft2] = useState(
    generateRandomStatesArray(numberOfRandom, ...randomGenerationConfig)
  );

  const [randomRight1, setRandomRight1] = useState(
    generateRandomStatesArray(numberOfRandom, ...randomGenerationConfig)
  );

  const [randomRight2, setRandomRight2] = useState(
    generateRandomStatesArray(numberOfRandom, ...randomGenerationConfig)
  );

  const scope = useRef(null);

  const randomSetImageLeft1 = randomLeft1.map((item, key) => {
    return (
      <Image
        key={key}
        id={`left_1_${key}`}
        className={styles.leftSymbol}
        src={item.file}
        alt=""
        width={80}
        height={80}
        draggable={false}
      />
    );
  });

  const randomSetImageLeft2 = randomLeft2.map((item, key) => {
    return (
      <Image
        key={key}
        id={`left_2_${key}`}
        className={styles.leftSymbol}
        src={item.file}
        alt=""
        width={80}
        height={80}
        draggable={false}
      />
    );
  });

  const randomSetImageRight1 = randomRight1.map((item, key) => {
    return (
      <Image
        key={key}
        id={`right_1_${key}`}
        className={styles.rightSymbol}
        src={item.file}
        alt=""
        width={80}
        height={80}
        draggable={false}
      />
    );
  });

  const randomSetImageRight2 = randomRight2.map((item, key) => {
    return (
      <Image
        key={key}
        id={`right_2_${key}`}
        className={styles.rightSymbol}
        src={item.file}
        alt=""
        width={80}
        height={80}
        draggable={false}
      />
    );
  });

  useEffect(() => {
      console.log("first");
      setIsLoading(true);
      setShowLoader(true);

      setTextLogoWidth(Math.floor(innerWidth * 0.3));
      setTextLogoHeight(Math.floor(innerHeight * 0.2));
      setLandingBookWidth(Math.floor(innerWidth * 0.5));
      setLandingBookHeight(Math.floor(innerHeight * 0.5));
      setRegisterBtnWidth(Math.min(200, Math.floor(innerWidth * 0.5)));
      setRegisterBtnHeight(75);
      const loaderTimeout = setTimeout(() => {
        setIsLoading(false);
        setShowLoader(false);
      }, 3000); 

      return () => {
        clearTimeout(loaderTimeout);
      };
  }, []);

  const [delayGiven, setDelayGiven] = useState(false);

  useLayoutEffect(() => {
    if (!isLoading) {
      let ctx = gsap.context(() => {
        randomLeft1.forEach((item, key) => {
          gsap.set(`#left_1_${key}`, {
            right: `${item.startingX}%`,
            top: `${item.startingY}%`,
            opacity: 0,
            scale: 0.3,
          });

          const tl = gsap.timeline({
            onComplete: () => {
              if (key === randomLeft1.length - 1) {
                console.log("Animation 1 complete");
                setrandomLeft1(
                  generateRandomStatesArray(
                    numberOfRandom,
                    ...randomGenerationConfig
                  )
                );
              }
            },
          });

          tl.to(`#left_1_${key}`, {
            right: `${(item.endingX + item.startingX) / 2}%`,
            top: `${(item.endingY + item.startingY) / 2}%`,
            // scale: 1,
            // opacity: 1,
            delay: `${Math.floor(key / 1.2) * 1}`,
            duration: 2.5,
            ease: "none",
          });
          tl.to(
            `#left_1_${key}`,
            {
              opacity: 1,
              duration: 2.5,
              ease: "power2.in",
            },
            "-=2.5"
          );
          tl.to(`#left_1_${key}`, {
            right: `${item.endingX}%`,
            top: `${item.endingY}%`,
            opacity: 0,
            duration: 2.5,
            ease: "none",
          });
          tl.to(
            `#left_1_${key}`,
            {
              scale: 1,
              rotate: 80,
              duration: 5,
              ease: "none",
            },
            "-=5"
          );
        });
      }, scope); // <- IMPORTANT! Scopes selector text

      return () => {
        ctx.revert();
      }; // cleanup
    }
  }, [isLoading, randomLeft1, numberOfRandom]);

  useLayoutEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    if (!isLoading) {
      let ctx = gsap.context(() => {
        randomLeft2.forEach((item, key) => {
          gsap.set(`#left_2_${key}`, {
            right: `${item.startingX}%`,
            top: `${item.startingY}%`,
            opacity: 0,
            scale: 0.3,
          });

          // const randomDelay = Math.random() * 2;

          const tl = gsap.timeline({
            delay: delayGiven ? 0.1 : 5,
            // delay: 1.5,
            onComplete: () => {
              if (key === randomLeft2.length - 1) {
                setDelayGiven(true);
                console.log("Animation 2 complete");
                setrandomLeft2(
                  generateRandomStatesArray(
                    numberOfRandom,
                    ...randomGenerationConfig
                  )
                );
              }
            },
          });

          tl.to(`#left_2_${key}`, {
            right: `${(item.endingX + item.startingX) / 2}%`,
            top: `${(item.endingY + item.startingY) / 2}%`,
            // scale: 1,
            // opacity: 1,
            delay: `${Math.floor(key / 1.2) * 1}`,
            duration: 2.5,
            ease: "none",
          });
          tl.to(
            `#left_2_${key}`,
            {
              opacity: 1,
              duration: 2.5,
              ease: "power2.in",
            },
            "-=2.5"
          );
          tl.to(`#left_2_${key}`, {
            right: `${item.endingX}%`,
            top: `${item.endingY}%`,
            opacity: 0,
            duration: 2.5,
            ease: "none",
          });
          tl.to(
            `#left_2_${key}`,
            {
              rotate: -80,
              scale: 1,
              duration: 5,
              ease: "none",
            },
            "-=5"
          );
        });
      }, scope); // <- IMPORTANT! Scopes selector text

      return () => {
        ctx.revert();
      }; // cleanup
    }
  }, [isLoading, randomLeft2, delayGiven, numberOfRandom]);

  useLayoutEffect(() => {
    if (!isLoading) {
      let ctx = gsap.context(() => {
        randomRight1.forEach((item, key) => {
          gsap.set(`#right_1_${key}`, {
            left: `${item.startingX}%`,
            top: `${item.startingY}%`,
            opacity: 0,
            scale: 0.3,
          });

          const tl = gsap.timeline({
            onComplete: () => {
              if (key === randomRight1.length - 1) {
                console.log("Animation 1 Right complete");
                setRandomRight1(
                  generateRandomStatesArray(
                    numberOfRandom,
                    ...randomGenerationConfig
                  )
                );
              }
            },
          });

          tl.to(`#right_1_${key}`, {
            left: `${(item.endingX + item.startingX) / 2}%`,
            top: `${(item.endingY + item.startingY) / 2}%`,
            // scale: 1,
            // opacity: 1,
            delay: `${Math.floor(key / 1.2) * 1}`,
            duration: 2.5,
            ease: "none",
          });
          tl.to(
            `#right_1_${key}`,
            {
              opacity: 1,
              duration: 2.5,
              ease: "power2.in",
            },
            "-=2.5"
          );
          tl.to(`#right_1_${key}`, {
            left: `${item.endingX}%`,
            top: `${item.endingY}%`,
            opacity: 0,
            duration: 2.5,
            ease: "none",
          });
          tl.to(
            `#right_1_${key}`,
            {
              scale: 1,
              rotate: -80,
              duration: 5,
              ease: "none",
            },
            "-=5"
          );
        });
      }, scope); // <- IMPORTANT! Scopes selector text

      return () => {
        ctx.revert();
      }; // cleanup
    }
  }, [isLoading, randomRight1, numberOfRandom]);

  useLayoutEffect(() => {
    if (!isLoading) {
      let ctx = gsap.context(() => {
        randomRight2.forEach((item, key) => {
          gsap.set(`#right_2_${key}`, {
            left: `${item.startingX}%`,
            top: `${item.startingY}%`,
            opacity: 0,
            scale: 0.3,
          });

          const tl = gsap.timeline({
            delay: delayGiven ? 0.1 : 5,
            onComplete: () => {
              if (key === randomRight2.length - 1) {
                setDelayGiven(true);
                console.log("Animation 2 Right complete");
                setRandomRight2(
                  generateRandomStatesArray(
                    numberOfRandom,
                    ...randomGenerationConfig
                  )
                );
              }
            },
          });

          tl.to(`#right_2_${key}`, {
            left: `${(item.endingX + item.startingX) / 2}%`,
            top: `${(item.endingY + item.startingY) / 2}%`,
            // scale: 1,
            // opacity: 1,
            delay: `${Math.floor(key / 1.2) * 1}`,
            duration: 2.5,
            ease: "none",
          });
          tl.to(
            `#right_2_${key}`,
            {
              opacity: 1,
              duration: 2.5,
              ease: "power2.in",
            },
            "-=2.5"
          );
          tl.to(`#right_2_${key}`, {
            left: `${item.endingX}%`,
            top: `${item.endingY}%`,
            opacity: 0,
            duration: 2.5,
            ease: "none",
          });
          tl.to(
            `#right_2_${key}`,
            {
              rotate: 80,
              scale: 1,
              duration: 5,
              ease: "none",
            },
            "-=5"
          );
        });
      }, scope); // <- IMPORTANT! Scopes selector text

      return () => {
        ctx.revert();
      }; // cleanup
    }
  }, [isLoading, randomRight2, delayGiven, numberOfRandom]);

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
      topBar3.style.transform = "translate(15px,-6.5px) rotatez(47deg)";
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

  const regLoaderRef = useRef(null);
  const [loaderLoaded, setLoaderLoaded] = useState(false);
  useEffect(() => {
    const assets = [regLoaderRef.current];
    let assetsLoaded = 0;

    const handleAssetLoad = () => {
      assetsLoaded++;
      if (assetsLoaded === assets.length) {
        setTimeout(() => {
          setLoaderLoaded(true);
        }, 1000);
      }
    };

    assets.forEach((asset) => {
      if (
        asset &&
        (asset.complete || asset.readyState === 4 || asset.tagName === "LINK")
      ) {
        handleAssetLoad();
      } else {
        if (asset) {
          asset.addEventListener("load", handleAssetLoad);
          asset.addEventListener("error", handleAssetLoad);
        }
      }
    });

    const cleanup = () => {
      assets.forEach((asset) => {
        asset.removeEventListener("load", handleAssetLoad);
        asset.removeEventListener("error", handleAssetLoad);
      });
    };

    return cleanup;
  }, []);
  useEffect(() => {
    if (loaderLoaded) {
      const assets = document.querySelectorAll(
        "img",
        "font",
        "style",
        "iframe"
      );

      let assetsLoaded = 0;

      const handleAssetLoad = () => {
        assetsLoaded++;
        if (assetsLoaded === assets.length) {
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }
      };

      assets.forEach((asset) => {
        if (
          asset.complete ||
          asset.readyState === 4 ||
          asset.tagName === "LINK"
        ) {
          handleAssetLoad();
        } else {
          asset.addEventListener("load", handleAssetLoad);
          asset.addEventListener("error", handleAssetLoad);
        }
      });

      const cleanup = () => {
        assets.forEach((asset) => {
          asset.removeEventListener("load", handleAssetLoad);
          asset.removeEventListener("error", handleAssetLoad);
        });
      };

      return cleanup;
    }
  }, [loaderLoaded]);

  return (
    <main
      key="mainLandingPage"
      style={{
        position: "relative",
      }}
      ref={scope}
    >
      {isLoading ? (
        <div className={styles.loaderContainer}>
          {/* <MyVideoLoader/> */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            width="100%"
          >
            <source src={require("../../public/static/images/landingLoaderVideo.mp4")} type="video/mp4" />
          </video>
        </div>
      ) : (
        <>
          {/* <Navbar /> */}
          <div
            className={styles.hamSection}
            style={isHamOpen ? { zIndex: 10 } : { zIndex: 2 }}
          >
            <div className={styles.hamBtn}>
              <Navbar />
              <AnimatePresence>
                <div className={styles.hamAsset}>
                  <Image
                    src="/static/images/hamIcon.svg"
                    width={103}
                    height={103}
                    alt="Menu"
                  />
                  <div
                    id="ham-menu"
                    className={styles.hamIcon}
                    onClick={openHam}
                  >
                    <span id="hamIcon1" className={styles.hamIcon1}></span>
                    <span id="hamIcon2" className={styles.hamIcon2}></span>
                    <span id="hamIcon3" className={styles.hamIcon3}></span>
                  </div>
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
                  <div style={{ display: "none" }}></div>
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
                <div style={{ display: "none" }}></div>
              )}
            </AnimatePresence>
          </div>
          <div className={styles.pageWrapper}>
            <div
              className={`${styles.midSection} 
              ${showLoader ? styles.loaderContainer : ""} ${
                isLoading ? "loaded" : ""
              }`}
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
                  {/* <Image
                    src={leftElements}
                    className={styles.landingPgLeftGrp}
                    alt="Element"
                  /> */}
                  {randomSetImageLeft1}
                  {randomSetImageLeft2}
                </div>
                <Image
                  src={landingPgBookImg}
                  className={styles.LandingBookImg}
                  alt="Book"
                />
                <div className={styles.rightElements}>
                  {/* <Image
                    src={rightElements}
                    className={styles.landingPgRightGrp}
                    alt="Element"
                  /> */}
                  {randomSetImageRight1}
                  {randomSetImageRight2}
                </div>
              </div>
              <AnimatePresence>
                {isHamOpen ? (
                  <div style={{ display: "none" }}></div>
                ) : (
                  <motion.div
                    key="register"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                      position: "absolute",
                      bottom: "40px",
                    }}
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

export function getRandomStats(
  startingYPoint,
  endingYPoint,
  startingYRange,
  endingYRange,
  startingXPoint,
  endingXPoint,
  startingXRange,
  endingXRange
) {
  const random = {};
  random.int = Math.floor(Math.random() * 10 + 1);
  random.file = `/static/images/Group${random.int}.png`;

  // x - right, y - top
  // get a random number from 35 to 45
  random.startingY = Math.floor(
    Math.random() * startingYRange + startingYPoint
  );
  random.startingX = Math.floor(
    Math.random() * startingXRange + startingXPoint
  );

  // test
  // const randomYArr = [6, 21, 36];
  // const randomY = randomYArr[Math.floor(Math.random() * 2)];

  // get a random number between 6 and 36
  random.endingY = Math.floor(Math.random() * endingYRange + endingYPoint);
  random.endingX = Math.floor(Math.random() * endingXRange + endingXPoint);
  // random.delay = Math.floor(Math.random() * 4);
  return random;
}

export function generateRandomStatesArray(
  number,
  startingYPoint,
  endingYPoint,
  startingYRange,
  endingYRange,
  startingXPoint,
  endingXPoint,
  startingXRange,
  endingXRange
) {
  const randomArray = [];
  for (let i = 0; i < number; i++) {
    // randomArray.push(getRandomStats(32, -10, 30, 40, 25, 86, 0 , 0));
    randomArray.push(
      getRandomStats(
        startingYPoint,
        endingYPoint,
        startingYRange,
        endingYRange,
        startingXPoint,
        endingXPoint,
        startingXRange,
        endingXRange
      )
    );
  }
  return randomArray;
}

export function randomAnimation(direction, random, setRandom, delay, id) {
  let ctx = gsap.context(() => {
    random.forEach((item, key) => {
      gsap.set(`#${id}${key}`, {
        right: `${item.startingX}%`,
        top: `${item.startingY}%`,
        opacity: 0,
        scale: 0.3,
      });

      const randomDelay = Math.random() * 2;

      const tl = gsap.timeline({
        delay: delay ? randomDelay : 0,
        onComplete: () => {
          if (key === random.length - 1) {
            setRandom([
              getRandomStats(),
              getRandomStats(),
              getRandomStats(),
              getRandomStats(),
            ]);
          }
        },
      });

      tl.to(`#${id}${key}`, {
        left: `${(item.endingX + item.startingX) / 2}%`,
        top: `${(item.endingY + item.startingY) / 2}%`,
        // scale: 1,
        // opacity: 1,
        delay: `${key * 0.5}`,
        duration: 2.5,
        ease: "none",
      });
      tl.to(
        `#${id}${key}`,
        {
          opacity: 1,
          duration: 2.5,
          ease: "power2.in",
        },
        "-=1.5"
      );
      tl.to(`#${id}${key}`, {
        left: `${item.endingX}%`,
        top: `${item.endingY}%`,
        opacity: 0,
        duration: 2.5,
        ease: "none",
      });
      tl.to(
        `#${id}${key}`,
        {
          rotate: -80,
          scale: 1,
          duration: 3,
          ease: "power2.in",
        },
        "-=3"
      );
    });
  }, scope); // <- IMPORTANT! Scopes selector text

  return () => {
    ctx.revert();
  }; // cleanup
}
