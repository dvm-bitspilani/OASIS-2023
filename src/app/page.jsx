"use client";

import styles from "./page.module.css";
import Image from "next/image";
import React from "react";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Link from "next/link";
// import textLogo from "../../public/static/images/OasisLogo.png";
import Navbar from "@/components/Navbar";
import landingPgBookImg from "../../public/static/images/LandingPageBook.png";
import rightElements from "../../public/static/images/landingPgRightElements.png";
import leftElements from "../../public/static/images/landingPgLeftElements.png";

import { gsap } from "gsap";

export default function Home() {
  const [textLogoWidth, setTextLogoWidth] = useState(0);
  const [textLogoHeight, setTextLogoHeight] = useState(0);
  const [LandingBookWidth, setLandingBookWidth] = useState(0);
  const [LandingBookHeight, setLandingBookHeight] = useState(0);
  const [RegisterBtnWidth, setRegisterBtnWidth] = useState(200);
  const [RegisterBtnHeight, setRegisterBtnHeight] = useState(75);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  const [numberOfRandom, setNumberOfRandom] = useState(6);

  const [randomLeft1, setrandomLeft1] = useState(
    generateRandomStatesArray(numberOfRandom)
  );

  const [randomLeft2, setrandomLeft2] = useState(
    generateRandomStatesArray(numberOfRandom)
  );

  const [randomRight1, setRandomRight1] = useState(
    generateRandomStatesArray(numberOfRandom)
  );

  const [randomRight2, setRandomRight2] = useState(
    generateRandomStatesArray(numberOfRandom)
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

  const [delayGiven, setDelayGiven] = useState(false);

  useLayoutEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      randomLeft1.forEach((item, key) => {
        // console.log(
        //   item.startingX,
        //   item.endingX,
        //   item.startingX + item.endingX / 2
        // );

        gsap.set(`#left_1_${key}`, {
          right: `${item.startingX}%`,
          top: `${item.startingY}%`,
          opacity: 0,
          scale: 0.3,
        });

        const tl = gsap.timeline({
          onStart: () => {
            console.log("Animation 1 started");
          },
          onComplete: () => {
            if (key === randomLeft1.length - 1) {
              console.log("Animation 1 complete");
              setrandomLeft1(generateRandomStatesArray(numberOfRandom));
            }
          },
        });

        tl.to(`#left_1_${key}`, {
          right: `${(item.endingX + item.startingX) / 2}%`,
          top: `${(item.endingY + item.startingY) / 2}%`,
          // scale: 1,
          // opacity: 1,
          delay: `${key * 1}`,
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
            duration: 3,
            ease: "none",
          },
          "-=5"
        );
      });
    }, scope); // <- IMPORTANT! Scopes selector text

    return () => {
      ctx.revert();
    }; // cleanup
  }, [isLoading, randomLeft1, numberOfRandom]);

  useLayoutEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
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
          onStart: () => {
            console.log("Animation 2 started");
          },
          onComplete: () => {
            if (key === randomLeft2.length - 1) {
              setDelayGiven(true);
              console.log("Animation 2 complete");
              setrandomLeft2(generateRandomStatesArray(numberOfRandom));
            }
          },
        });

        tl.to(`#left_2_${key}`, {
          right: `${(item.endingX + item.startingX) / 2}%`,
          top: `${(item.endingY + item.startingY) / 2}%`,
          // scale: 1,
          // opacity: 1,
          delay: `${key * 1}`,
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
            duration: 3,
            ease: "power2.in",
          },
          "-=5"
        );
      });
    }, scope); // <- IMPORTANT! Scopes selector text

    return () => {
      ctx.revert();
    }; // cleanup
  }, [isLoading, randomLeft2, delayGiven,numberOfRandom]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      randomRight1.forEach((item, key) => {
        gsap.set(`#right_1_${key}`, {
          left: `${item.startingX}%`,
          top: `${item.startingY}%`,
          opacity: 0,
          scale: 0.3,
        });

        const tl = gsap.timeline({
          onStart: () => {
            console.log("Animation 1 Right started");
          },
          onComplete: () => {
            if (key === randomRight1.length - 1) {
              console.log("Animation 1 Right complete");
              setRandomRight1(generateRandomStatesArray(numberOfRandom));
            }
          },
        });

        tl.to(`#right_1_${key}`, {
          left: `${(item.endingX + item.startingX) / 2}%`,
          top: `${(item.endingY + item.startingY) / 2}%`,
          // scale: 1,
          // opacity: 1,
          delay: `${key * 1}`,
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
            duration: 3,
            ease: "none",
          },
          "-=5"
        );
      });
    }, scope); // <- IMPORTANT! Scopes selector text

    return () => {
      ctx.revert();
    }; // cleanup
  }, [isLoading, randomRight1, numberOfRandom]);

  useLayoutEffect(() => {
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
          onStart: () => {
            console.log("Animation 2 Right started");
          },
          onComplete: () => {
            if (key === randomRight2.length - 1) {
              setDelayGiven(true);
              console.log("Animation 2 Right complete");
              setRandomRight2(generateRandomStatesArray(numberOfRandom));
            }
          },
        });

        tl.to(`#right_2_${key}`, {
          left: `${(item.endingX + item.startingX) / 2}%`,
          top: `${(item.endingY + item.startingY) / 2}%`,
          // scale: 1,
          // opacity: 1,
          delay: `${key * 1}`,
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
            duration: 3,
            ease: "power2.in",
          },
          "-=5"
        );
      });
    }, scope); // <- IMPORTANT! Scopes selector text

    return () => {
      ctx.revert();
    }; // cleanup
  }, [isLoading, randomRight2, delayGiven, numberOfRandom]);

  return (
    <main
      style={{
        position: "relative",
      }}
      ref={scope}
    >
      {isLoading ? (
        <div className={styles.loaderContainer}>
          <Image
            src="/static/images/OasisLogo.png"
            alt="OASIS"
            style={{ transform: "scale(.5)" }}
            width={519}
            height={185}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <div className={styles.pageWrapper}>
            <div
              className={`${styles.midSection} ${
                showLoader ? styles.loaderContainer : ""
              } ${isLoading ? "loaded" : ""}`}
            >
              <div className={styles.textLogoWrapper}>
                <Image
                  src="/static/images/OasisLogo.png"
                  // layout="fill"
                  className={styles.textLogoImg}
                  alt="OASIS"
                  width={519}
                  height={185}
                />
              </div>
              <div className={styles.bookImgWrapper}>
                <div className={styles.leftElements}>
                  {/* <Image
                    src={leftElements}
                    className={styles.landingPgLeftGrp}
                    alt="Element"
                  /> */}
                  {/* <Image
                    id="test"
                    className={styles.leftSymbol}
                    src={randomLeft1[0].file}
                    alt=""
                    width={80}
                    height={80}
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
              <Link href="/register" legacyBehavior prefetch>
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

export function getRandomStats() {
  const random = {};
  random.int = Math.floor(Math.random() * 10 + 1);
  random.file = `/static/images/Group${random.int}.png`;

  // x - right, y - top
  // get a random number from 35 to 45
  random.startingY = Math.floor(Math.random() * 30 + 32);
  random.startingX = 25;

  // test
  // const randomYArr = [6, 21, 36];
  // const randomY = randomYArr[Math.floor(Math.random() * 2)];

  // get a random number between 6 and 36
  random.endingY = Math.floor(Math.random() * 40 + -10);
  random.endingX = 86;
  random.delay = Math.floor(Math.random() * 4);
  return random;
}

export function generateRandomStatesArray(number) {
  const randomArray = [];
  for (let i = 0; i < number; i++) {
    randomArray.push(getRandomStats());
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
