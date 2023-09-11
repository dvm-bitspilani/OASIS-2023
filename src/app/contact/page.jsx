"use client"
import React, {useState} from 'react'
import styles from "./page.module.css";
import { AnimatePresence, motion } from "framer-motion";
import ImageWrapper from "../../../public/static/images/contacts.png"
import phone from "../../../public/static/images/phone.svg"
import mail from "../../../public/static/images/mail.svg"
import shivang from "../../../public/static/images/shivang.png"
// import ImageWrapper1 from "../../../public/static/images/navLogo.png"
// import ImageWrapper2 from "../../../public/static/images/hamBG.png"
// import ImageWrapper3 from "../../../public/static/images/Group3.png"
// import ImageWrapper4 from "../../../public/static/images/Group2.png"
// import ImageWrapper5 from "../../../public/static/images/Group1.png"
// import ImageWrapper6 from "../../../public/static/images/LandingPageBook.png"
// import ImageWrapper7 from "../../../public/static/images/Library.png"
import ContactProfile from '@/components/ContactProfile';
import Image from 'next/image';
const Page = () => {
    const [imageSrc, setImageSrc] = useState(ImageWrapper);
    const [isLoading, setIsLoading] = useState(false);
    
    //  const [hoveredProfile, setHoveredProfile] = useState(null);
     const [hoveredProfileIndex, setHoveredProfileIndex] = useState(null);
  // const handleMouseOver = (image, profile) => {
    // setImageSrc(image);
    // setHoveredProfile(profile);
  // };
  const handleMouseOver = (image, profile, index) => {
    setImageSrc(image);
    setHoveredProfileIndex(index);
  };
  const profiles = [
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
    { name: 'Shwetabh Niket', dept: 'Registration, Events & Approval Queries' },
    { name: 'Prateek Kashyap', dept: 'Registration, Events & Approval Queries' },
    { name: 'Jay Goyal', dept: 'Registration, Events & Approval Queries' },
    { name: 'Vaibhav Singla', dept: 'Controls' },
    { name: 'Vedant Vyas', dept: 'Reception and Accommodation' },
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },

    // Add more profiles here
  ];
  const hoveredProfile = profiles[hoveredProfileIndex];
  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.heading}>CONTACT US</div>
        <div className={styles.mainSection}>
            <div className={styles.department}>
              {/* <p>Registration, Events & Approval Queries</p> */}
              {/* <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
              <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
              <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
              <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
              <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
              <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
              <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
              <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p> */}
              {profiles.map((profile, index) => (
              <p
                key={index}
                onMouseOver={() =>
                  handleMouseOver(ImageWrapper, profile, index)
                }
              >
                {profile.dept}
              </p>
            ))}
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
                  : "scaleX(.9) translateX(0) translateY(-3rem) rotate(-10deg)",
              }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
                <Image
                src={imageSrc}
                alt=""
                className={styles["bookImage"]}
                />
                <AnimatePresence>
                {hoveredProfile && (
                 <motion.div
                 className={styles['details']}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ ease: 'easeOut', duration: 0.5 }}
               >
                  <Image src={shivang} alt="" />
                  <h1>{hoveredProfile.name}</h1>
                  <h2>{hoveredProfile.dept}</h2>
                  <div className={styles['iconsContainer']}>
                    <Image src={phone} alt="" />
                    <Image src={mail} alt="" />
                  </div>
                </motion.div>
              )}
                </AnimatePresence>
                {/* {
                  hoveredProfile && (
                    <ContactProfile name= {hoveredProfile.name} dept = {hoveredProfile.dept} />
                  )
                } */}
            </motion.div>
        </div>
      </div>
    </>
  );
};

export default Page;
