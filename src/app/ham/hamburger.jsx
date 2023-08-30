// "use client";

import React from "react";
import styles from "./hamburger.module.css"
import { HamContext } from "@/context/HamContextProvider";
import path from "../../../public/static/images/path.svg"
import innercircle from "../../../public/static/images/innercircle.png"
import logo from "../../../public/static/images/oasis-logo-ham.png"
import glow from "../../../public/static/images/glow.png"
import { useContext } from "react";
import Image from 'next/image'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { CustomEase } from "gsap/all";
gsap.registerPlugin(MotionPathPlugin);

export default function Hamburger() {
    const { isHamOpen, setIsHamOpen } = useContext(HamContext);

    useEffect(() => {
        const element = document.querySelector('#glow');
    
        if (isHamOpen) {
        

          const timeline = gsap.timeline({
            onComplete: () => {
              gsap.to(element, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                },
              });
            },
          });
    
          timeline.to(element, {
            opacity: 1,
            duration: 0.5,
          }).to(element, {
            duration: 1.5,
            repeat: 0,
            delay: 0.1,
            ease: CustomEase.create(
              'custom',
              'M0,0 C0.065,0 0.332,-0.042 0.514,0.184 0.611,0.305 0.634,0.686 0.708,0.874 0.757,1.001 0.98,0.997 0.989,0.999 0.993,0.999 0.996,1 1,1 '
            ),
            motionPath: {
              path: '#path',
              align: '#path',
              alignOrigin: [0.5, 0.5],
              start: 1,
              end: 0,
            },
          });
        } else {
          gsap.killTweensOf(element);
          element.style.opacity = 0;
        }
      }, [isHamOpen]);
    

    return (
        <>
            <div className={styles.page}>
                <div className={styles.background}>this is hamburger</div>
                <div className={styles.glowbox}>
                    <Image src={glow} id="glow" alt=""></Image>
                </div>
                <div className={styles.innercircle}>
                    <Image src={innercircle} alt=""></Image>
                </div>
                <div className={styles.logo}>
                    <Image id="logo" src={logo} alt=""></Image>
                </div>
                <div className={styles.outerpath}>
                    {/* <Image src={path} id="path"></Image> */}
                    <svg viewBox="0 0 1044 816" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="path" opacity="0.7" d="M888 417.5C888 622.398 721.898 788.5 517 788.5C312.102 788.5 146 622.398 146 417.5C146 212.602 312.102 46.5 517 46.5C738 46.5 778.5 193 857.5 141.5C936.5 90 1029.5 29 1029.5 29" stroke="#F0F0F0" strokeWidth="0.75" strokeDasharray="5 5" />
                    </svg>
                </div>
                <div className={styles.circle}>
                    <div className={styles.item}>
                        <div className={`${styles.number} ${styles.one}`}>1</div>
                    </div>
                    <div className={styles.item}>
                        <div className={`${styles.number} ${styles.two}`}>2</div>
                    </div>
                    <div className={styles.item}>
                        <div className={`${styles.number} ${styles.three}`}>3</div>
                    </div>
                    <div className={styles.item}>
                        <div className={`${styles.number} ${styles.four}`}>4</div>
                    </div>
                    <div className={styles.item}>
                        <div className={`${styles.number} ${styles.five}`}>5</div>
                    </div>
                </div>

                <div className={styles.circle2}>
                    <div className={styles.tag}>
                        <div>SPONSORS</div>
                    </div>
                    <div className={styles.tag}>
                        <div>ECLIPSE</div>
                    </div>
                    <div className={styles.tag}>
                        <div>WALLMAG</div>
                    </div>
                    <div className={styles.tag}>
                        <div>MEDIA PARTNERS</div>
                    </div>
                    <div className={styles.tag}>
                        <div>DEVELOPERS</div>
                    </div>
                </div>
            </div>
        </>
    )
}