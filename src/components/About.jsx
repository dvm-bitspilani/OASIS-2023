import styles from './about.module.css'
import landingStyles from '../app/page.module.css'

import updatedBgLibraryImage from '../../public/static/images/updatedLibraryBgImage.png'
import leftHandImg from '../../public/static/images/aboutLeftHand.png'
import rightHandMobile from '../../public/static/images/rightHandMobile.png'
import leftHandMobile from '../../public/static/images/leftHandMobile.png'
// import rightHandImg from "../../public/static/images/aboutRightHand.png";
import topHandImg from '../../public/static/images/zombieHandsUpdated.png'

import Image from 'next/image'
import AboutCarousel from '@/components/AboutCarousel'
import CarouselControllerButtons from './CarouselControllerButtons'

export default function page() {
  return (
    <main className={styles.pageWrapper}>
      <Image
        suppressHydrationWarning
        draggable={false}
        src={updatedBgLibraryImage}
        className={styles.pageBgImage}
        alt=""
      />
      <div className={styles.heading}>
        <h1>About Us</h1>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.carouselContainer}>
          <Image
            suppressHydrationWarning
            src={topHandImg}
            alt=""
            draggable={false}
            className={styles.carouselHand}
          />
          <AboutCarousel />
          <CarouselControllerButtons
            classApplied={styles.carouselControllerButtons}
          />
        </div>
        <CarouselControllerButtons
          classApplied={styles.carouselControllerButtonsMobile}
        />
        <div className={styles.description}>
          <p>
            Oasis, the annual cultural extravaganza of Birla Institute of
            Technology and Science, Pilani, has been a vibrant part of
            India&apos;s cultural tapestry since 1971. Managed entirely by
            students, it&apos;s a dazzling showcase of talent in Dance, Drama,
            Literature, Comedy, Fashion, and Music. It&apos;s where dreams come
            alive, laughter fills the air, and creativity knows no bounds. Step
            into the world of Oasis, where youth&apos;s boundless potential
            shines.
          </p>
        </div>
      </div>
      <Image
        suppressHydrationWarning
        src={leftHandImg}
        className={styles.leftHand}
        alt=""
        draggable={false}
      />
      <Image
        suppressHydrationWarning
        src={leftHandImg}
        className={styles.rightHand}
        alt=""
        draggable={false}
      />
      {/* <Image
        src={leftHandMobile}
        className={styles.leftHandMobile}
        alt=""
        draggable={false}
      />
      <Image
        src={rightHandMobile}
        className={styles.rightHandMobile}
        alt=""
        draggable={false}
      /> */}
    </main>
  )
}
