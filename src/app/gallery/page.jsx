"use client";
import React, {useState, useEffect} from "react";
import * as styles from "./gallery.module.css";
import web from "../../../public/static/images/web1.svg";
import Image from "next/image";
import GalleryCarousel from "@/components/GalleryCarousel";
import GalleryCarouselControllerButtons from "@/components/GalleryCarouselControllerButtons";
import "../globals.css";
import { useRouter } from "next/navigation";
import rightHand from "../../../public/static/images/galleryRightHand.png"
import leftHand from "../../../public/static/images/galleryLeftHand.png"
import about from "../../components/GalleryCarousel.module.css";
import cross from "../../../public/static/images/cross.svg";
import bgImage from "../../../public/static/images/galleryPageBgImage.png";
import { useWindowSize } from "rooks";
import CustomCursor from "@/components/CustomCursor";
const gallery = () => {
  const {innerWidth, innerHeight} = useWindowSize();
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [allAssetsLoaded, setAllAssetsLoaded] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoading(true);
      setShowLoader(true);
      const assets = [
        rightHand.src,
        leftHand.src,
        bgImage.src,
        cross.src,
      ];
      const loadAssets = async () => {
        const assetPromises = assets.map((asset) => {
          if (asset) {
            return new Promise((resolve, reject) => {
              // const img = new img();
              const img = document.createElement("img");
              img.onload = resolve;
              img.onerror = reject;
              img.src = asset;
            });
          }
        });
        const results = await Promise.allSettled(assetPromises);
        const allSuccessful = results.every(
          (result) => result.status === "fulfilled"
        );
        Promise.all(assetPromises)
          .then(() => {
            setAllAssetsLoaded(true);
            // console.log("loaded");
            setTimeout(() => {
              setIsLoading(false);
              setShowLoader(false);
            }, 2000);
            // console.log('All assets loaded successfully');
          })
          .catch((error) => {
            console.error("Error loading assets:", error);
            // setIsLoading(false);
            setAllAssetsLoaded(true);
            // console.log("loaded");
            setShowLoader(false);
            setTimeout(() => {
              setIsLoading(false);
              setShowLoader(false);
            }, 3000);
          });
      };

      loadAssets();
    }
  }, []);

  // console.log(bgImage)
  return <>
  {isLoading && (
        <div className={styles.loaderContainer}>
          {/* <MyVideoLoader/> */}
          <video
            src={require("../../../public/static/images/loadervideo.mp4")} // Update with the correct path
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            width="100%"
          />
        </div>
      )}
      {!isLoading && innerWidth >= 600 && <CustomCursor />}
        <div className={styles.pageWrapper} style={{background: `url(${bgImage.src})`}}>
         <Image
         suppressHydrationWarning
           onClick={() => router.push('/')}
           src={cross}
           alt="close"
           className={styles.close}
           draggable={false}
         />
           <Image src={web} alt ="Image not Found" 
           className={styles.webImage}/>
           <div className={styles.heading}>
               <span>Gallery</span>
           </div>
               <GalleryCarousel/>
               <GalleryCarouselControllerButtons classApplied={about.carouselControllerButtons} />
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
