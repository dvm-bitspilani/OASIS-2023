"use client";
import React from "react";
import * as styles from "./gallery.module.css";
import web from "../../../public/static/images/web1.svg";
import Image from "next/image";
import GalleryCarousel from "@/components/GalleryCarousel";
import GalleryCarouselControllerButtons from "@/components/GalleryCarouselControllerButtons";
import rightHand from "../../../public/static/images/galleryRightHand.png"
import leftHand from "../../../public/static/images/galleryLeftHand.png"
import about from "../../components/GalleryCarousel.module.css";
import cross from "../../../public/static/images/cross.svg";
import bgImage from "../../../public/static/images/galleryPageBgImage.png";
// import { useWindowSize } from "rooks";
const gallery = () => {
  console.log(bgImage)
    // const { innerWidth, innerHeight } = useWindowSize();
  return <>

        <div className={styles.pageWrapper} style={{background: `url(${bgImage.src})`}}>
        {/* {innerWidth < 700 && ( */}
          <Image
          suppressHydrationWarning
            onClick={() => router.back()}
            src={cross}
            alt="close"
            className={styles.close}
            draggable={false}
          />
        {/* )} */}
        {/* {innerWidth > 700 && ( */}
          {/* <div className={styles.backBtn} onClick={() => router.back()}> */}
            {/* <svg */}
              {/* xmlns="http://www.w3.org/2000/svg" */}
              {/* width="34" */}
              {/* height="34" */}
              {/* viewBox="0 0 34 34" */}
              {/* fill="none" */}
            {/* > */}
              {/* <path */}
                {/* d="M31 3L3 31M3 3L31 31" */}
                {/* stroke="#5DB3F1" */}
                {/* strokeWidth="5" */}
                {/* strokeLinecap="round" */}
                {/* strokeLinejoin="round" */}
              {/* /> */}
            {/* </svg> */}
          {/* </div> */}
        {/* )} */}
            <Image suppressHydrationWarning src={web} alt ="Image not Found"className={styles.webImage}/>
            <div className={styles.heading}>
                <span>Gallery</span>
            </div>
                <GalleryCarousel/>
                <GalleryCarouselControllerButtons classApplied={about.carouselControllerButtons} />
        {/* </div> */}
        <GalleryCarouselControllerButtons
          classApplied={about.carouselControllerButtonsMobile}
        />
                <div className={styles.rightHand}>
        <Image suppressHydrationWarning src={rightHand} alt ="Image not Found"className={styles.rightHandImage}/>
        </div>
        <div className={styles.leftHand}>
        <Image suppressHydrationWarning src={leftHand} alt ="Image not Found"className={styles.leftHandImage}/>
        </div>
        </div>

  </>;
};

export default gallery;
