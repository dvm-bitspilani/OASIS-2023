"use client"
import React, {useState} from 'react'
import styles from "./page.module.css";
import ImageWrapper from "../../../public/static/images/BookContact.png"
// import ImageWrapper1 from "../../../public/static/images/navLogo.png"
// import ImageWrapper2 from "../../../public/static/images/hamBG.png"
// import ImageWrapper3 from "../../../public/static/images/Group3.png"
// import ImageWrapper4 from "../../../public/static/images/Group2.png"
// import ImageWrapper5 from "../../../public/static/images/Group1.png"
// import ImageWrapper6 from "../../../public/static/images/LandingPageBook.png"
// import ImageWrapper7 from "../../../public/static/images/Library.png"
import Image from 'next/image';
const page = () => {
    const [imageSrc, setImageSrc] = useState(ImageWrapper);

  const handleMouseOver = (image) => {
    setImageSrc(image);
  };
  return (
    <>
    <div className={styles.pageWrapper}>
        <div className={styles.heading}>CONTACT US</div>
        <div className={styles.mainSection}>
            <div className={styles.department}>
            {/* <p>Registration, Events & Approval Queries</p> */}
            <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
            <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
            <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
            <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
            <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
            <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
            <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
            <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
            </div>
            <div className={styles.imgWrapper}>
                <Image
                src={imageSrc}
                />
            </div>
        </div>
    </div>
    </>
  )
}

export default page