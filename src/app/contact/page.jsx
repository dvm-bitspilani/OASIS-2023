"use client"
import React, {useState} from 'react'
import styles from "./page.module.css";
import { motion } from "framer-motion";
import ImageWrapper from "../../../public/static/images/contacts.png"
import phone from "../../../public/static/images/phone.svg"
import mail from "../../../public/static/images/mail.svg"
// import ImageWrapper1 from "../../../public/static/images/navLogo.png"
// import ImageWrapper2 from "../../../public/static/images/hamBG.png"
// import ImageWrapper3 from "../../../public/static/images/Group3.png"
// import ImageWrapper4 from "../../../public/static/images/Group2.png"
// import ImageWrapper5 from "../../../public/static/images/Group1.png"
// import ImageWrapper6 from "../../../public/static/images/LandingPageBook.png"
// import ImageWrapper7 from "../../../public/static/images/Library.png"
import Image from 'next/image';
const Page = () => {
    const [imageSrc, setImageSrc] = useState(ImageWrapper);
    const [isLoading, setIsLoading] = useState(false);
     const [hoveredProfile, setHoveredProfile] = useState(null);

  const handleMouseOver = (image, profile) => {
    setImageSrc(image);
    setHoveredProfile(profile);
  };

  const profiles = [
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },

    // Add more profiles here
  ];

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
            <motion.div className={styles.imgWrapper}
              initial={{
                opacity: 0,
                transform: "scale(1) translateX(0) translateY(0) rotate(0deg)",
              }}
              animate={{
                opacity: isLoading ? 0 : 1,
                transform: isLoading
                  ? "scale(1) translateX(0) translateY(0) rotate(0)"
                  : "scaleX(.9) translateX(-8rem) translateY(-3rem) rotate(-0deg)",
              }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
                <Image
                src={imageSrc}
                />
                <div className="details">
                  <Image />
                  <h1></h1>
                  <h2></h2>
                  <div className="icons">
                    <Image src={phone} />
                    <Image src={mail} />
                  </div>
                </div>
            </motion.div>
        </div>
      </div>
    </>
  );
};

export default Page;
