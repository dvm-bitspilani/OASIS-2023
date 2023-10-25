"use client"
import React , {useState} from "react"
import * as styles from "./gallery.module.css"
import web from "../../../public/static/images/web1.svg"
import Image from "next/image"
import GalleryCarousel from "@/components/GalleryCarousel"
import GalleryCarouselControllerButtons from "@/components/GalleryCarouselControllerButtons"
import rightHand from "../../../public/static/images/galleryRightHand.png"
import leftHand from "../../../public/static/images/galleryLeftHand.png"
import about from "../../components/GalleryCarousel.module.css"
import cross from "../../../public/static/images/cross.svg"
import bgImage from "../../../public/static/images/galleryPageBgImage.png"
import Loader from "@/helpers/Loader"
import CustomCursor from "@/components/CustomCursor"

const Page = () => {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
    <CustomCursor />
    <Loader isLoading={isLoading} setIsLoading={setIsLoading} />
      <div
        className={styles.pageWrapper}
        style={{ background: `url(${bgImage.src})` }}
      >
        <Image
          suppressHydrationWarning
          onClick={() => router.back()}
          src={cross}
          alt="close"
          className={styles.close}
          draggable={false}
        />
        <Image
          suppressHydrationWarning
          src={web}
          alt="Image not Found"
          className={styles.webImage}
        />
        <div className={styles.heading}>
          <span>Gallery</span>
        </div>
        <GalleryCarousel />
        <GalleryCarouselControllerButtons
          classApplied={about.carouselControllerButtons}
        />
        <GalleryCarouselControllerButtons
          classApplied={about.carouselControllerButtonsMobile}
        />
        <div className={styles.rightHand}>
          <Image
            suppressHydrationWarning
            src={rightHand}
            alt="Image not Found"
            className={styles.rightHandImage}
          />
        </div>
        <div className={styles.leftHand}>
          <Image
            suppressHydrationWarning
            src={leftHand}
            alt="Image not Found"
            className={styles.leftHandImage}
          />
        </div>
      </div>
    </>
  )
}

export default Page
