import styles from "./about.module.css";
import landingStyles from "../page.module.css";

import updatedBgLibraryImage from "../../../public/static/images/updatedLibraryBgImage.png";
import leftHandImg from "../../../public/static/images/aboutLeftHand.png";
// import rightHandImg from "../../../public/static/images/aboutRightHand.png";
import topHandImg from "../../../public/static/images/aboutHandTop.png";

import Image from "next/image";
import AboutCarousel from "@/components/AboutCarousel";
import CarouselControllerButtons from "./CarouselControllerButtons";

export default function page() {
  return (
    <main className={styles.pageWrapper}>
      <Image
        draggable={false}
        src={updatedBgLibraryImage}
        className={landingStyles.pageBgImage}
        alt=""
      />
      <div className={styles.heading}>
        <h1>About Us</h1>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.carouselContainer}>
          <Image
            src={topHandImg}
            alt=""
            draggable={false}
            className={styles.carouselHand}
          />
          <AboutCarousel />
          <CarouselControllerButtons />
        </div>
        <div className={styles.description}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat not
          </p>
        </div>
      </div>
      <Image
        src={leftHandImg}
        className={styles.leftHand}
        alt=""
        draggable={false}
      />
      <Image
        src={leftHandImg}
        className={styles.rightHand}
        alt=""
        draggable={false}
      />
    </main>
  );
}


