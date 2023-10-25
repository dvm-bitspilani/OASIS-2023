// "use client";

import React from "react"
import styles from "./hamburger.module.css"
import { HamContext } from "@/context/HamContextProvider"
import innercircle from "../../public/static/images/innercircle.png"
import logo from "../../public/static/images/oasis-logo-ham.png"
import glow from "../../public/static/images/glow.png"
import { useContext } from "react"
import Image from "next/image"
import { useEffect } from "react"
import { gsap } from "gsap"
import { MotionPathPlugin } from "gsap/all"
import { CustomEase } from "gsap/all"
import Link from "next/link"

gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(CustomEase)

export default function Hamburger() {
  const { isHamOpen, setIsHamOpen } = useContext(HamContext)

  const handleLogoClick = () => {
    setIsHamOpen(!isHamOpen)
  }

  useEffect(() => {
    const element = document.querySelector("#glow")
    const path = document.querySelector("#path")
    const svg = document.querySelector("#path-svg")
    const one = document.querySelectorAll(".one")
    const two = document.querySelectorAll(".two")
    const three = document.querySelectorAll(".three")
    const four = document.querySelectorAll(".four")
    const five = document.querySelectorAll(".five")
    const insideCircle = document.querySelectorAll(".ham-inside-circle")
    const logo = document.querySelectorAll(".ham-logo")

    var duration = 1.2
    var delay = 1.7
    var offset = -2300
    var delayEnd = 0.4

    if (isHamOpen) {
      gsap.set(element, {
        opacity: 0,
      })

      gsap.set(svg, {
        strokeDashoffset: offset,
      })

      gsap.to(svg, {
        strokeDashoffset: 0,
        duration: 1.75,
        repeat: 0,
        delay: 0.5,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.065,0 0.332,-0.042 0.514,0.184 0.611,0.305 0.634,0.686 0.708,0.874 0.757,1.001 0.98,0.997 0.989,0.999 0.993,0.999 0.996,1 1,1 "
        ),
      })

      gsap.set(insideCircle, {
        opacity: 0,
      })

      gsap.set(logo, {
        opacity: 0,
        scale: 0.6,
      })

      gsap.to(logo, {
        opacity: 1,
        duration: 0.2,
        delay: 0.7,
        scale: 1,
      })

      gsap.to(insideCircle, {
        opacity: 1,
        duration: 0.5,
        delay: 1,
      })

      gsap.to(logo, {
        rotation: 360,
        duration: 2.5,
        ease: "power4.out",
      })

      gsap.set(one, {
        opacity: 0,
      })

      gsap.set(two, {
        opacity: 0,
      })

      gsap.set(three, {
        opacity: 0,
      })

      gsap.set(four, {
        opacity: 0,
      })

      gsap.set(five, {
        opacity: 0,
      })

      gsap.to(one, {
        opacity: 1,
        duration: duration,
        delay: delay,
      })
      gsap.to(two, {
        opacity: 1,
        duration: duration,
        delay: delay + 0.1,
      })
      gsap.to(three, {
        opacity: 1,
        duration: duration,
        delay: delay + 0.25,
      })
      gsap.to(four, {
        opacity: 1,
        duration: duration,
        delay: delay + 0.45,
      })

      gsap.to(five, {
        opacity: 1,
        duration: duration,
        delay: delay + 0.7,
      })

      gsap.to(element, {
        opacity: 1,
        delay: 0,
        duration: 1,
      })

      gsap.to(element, {
        opacity: 0,
        delay: 2,
        duration: 1,
      })

      gsap.to(element, {
        duration: 1.75,
        repeat: 0,
        delay: 0.5,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.065,0 0.332,-0.042 0.514,0.184 0.611,0.305 0.634,0.686 0.708,0.874 0.757,1.001 0.98,0.997 0.989,0.999 0.993,0.999 0.996,1 1,1 "
        ),
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          start: 1,
          end: 0,
        },
      })
    } else {
      gsap.to(logo, {
        opacity: 0,
        duration: 0.2,
        delay: 0,
        scale: 0.6,
      })

      gsap.to(insideCircle, {
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
      })

      gsap.to(svg, {
        strokeDashoffset: offset,
        duration: 1,
        repeat: 0,
        delay: 0.5,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.065,0 0.332,-0.042 0.514,0.184 0.611,0.305 0.634,0.686 0.708,0.874 0.757,1.001 0.98,0.997 0.989,0.999 0.993,0.999 0.996,1 1,1 "
        ),
      })

      gsap.to(five, {
        opacity: 0,
        duration: duration,
        delay: delayEnd,
      })
      gsap.to(four, {
        opacity: 0,
        duration: duration,
        delay: delayEnd + 0.1,
      })
      gsap.to(three, {
        opacity: 0,
        duration: duration,
        delay: delayEnd + 0.25,
      })
      gsap.to(two, {
        opacity: 0,
        duration: duration,
        delay: delayEnd + 0.45,
      })

      gsap.to(one, {
        opacity: 0,
        duration: duration,
        delay: delayEnd + 0.7,
      })
    }
  }, [isHamOpen])

  return (
    <>
      <div className={styles.page}>
        <div className={styles.background}>
          <div className={styles.glowbox}>
            <Image draggable={false} src={glow} id="glow" alt=""></Image>
          </div>
          <div className={`${styles.innercircle} ham-inside-circle`}>
            <Image draggable={false} src={innercircle} alt=""></Image>
          </div>
          <div className={`${styles.logo} ham-logo`}>
            <Image
              draggable={false}
              id="logo"
              src={logo}
              alt=""
              onClick={handleLogoClick}
            ></Image>
          </div>
          <div className={styles.outerpath}>
            <svg
              id="path-svg"
              viewBox="0 0 1044 816"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="path"
                opacity="0.7"
                d="M888 417.5C888 622.398 721.898 788.5 517 788.5C312.102 788.5 146 622.398 146 417.5C146 212.602 312.102 46.5 517 46.5C738 46.5 778.5 193 857.5 141.5C936.5 90 1029.5 29 1029.5 29"
                stroke="#F0F0F0"
                strokeWidth="1"
                strokeDasharray="2300"
              />
            </svg>
          </div>
          <div className={styles.circle}>
            <Link
              href="/sponsors"
              className={`${styles.item} one`}
              onMouseDown={() => {
                setIsHamOpen(false)
              }}
            >
              <div className={`${styles.number} ${styles.one}`}>
                <span className={styles.numbox}>
                  <div className={styles.num}>1</div>
                </span>
                <span className={styles.txt}>SPONSORS</span>
              </div>
            </Link>
            <Link className={`${styles.item} two`} href="/gallery" onMouseDown={()=>{setIsHamOpen(false)}}>
              <div className={`${styles.number} ${styles.two}`}>
                <span className={styles.numbox}>
                  <div className={styles.num}>2</div>
                </span>
                <span className={styles.txt2}>GALLERY</span>
              </div>
            </Link>
            <Link
              href="/wallmag"
              className={`${styles.item} three`}
              onMouseDown={() => {
                setIsHamOpen(false)
              }}
            >
              <div className={`${styles.number} ${styles.three}`}>
                <span className={styles.numbox}>
                  <div className={styles.num}>3</div>
                </span>
                <span className={styles.txt2}>WALLMAG</span>
              </div>
            </Link>
            <div className={`${styles.item} four`}>
              <div className={`${styles.number} ${styles.four}`}>
                <span className={styles.numbox}>
                  <div className={styles.num}>4</div>
                </span>
                <span className={styles.txt}>MEDIA PARTNERS</span>
              </div>
            </div>
            <div className={`${styles.item} five`}>
              <div className={`${styles.number} ${styles.five}`}>
                <span className={styles.numbox}>
                  <div className={styles.num}>5</div>
                </span>
                <span className={styles.txt}>DEVELOPERS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
