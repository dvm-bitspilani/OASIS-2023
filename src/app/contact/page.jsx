"use client"
import React, {useState} from 'react'
import styles from "./page.module.css";
import { AnimatePresence, motion } from "framer-motion";
import ImageWrapper from "../../../public/static/images/contacts.png"
import phone from "../../../public/static/images/phone.svg"
import mail from "../../../public/static/images/mail.svg"
import mobilebgImage from "../../../public/static/images/mobileLibraryBgImage.png"
import updatedbgImage from "../../../public/static/images/updatedLibraryBgImage.png"
import shivang from "../../../public/static/images/shivang.png"
import shaurya from "../../../public/static/images/shaurya.png"
import sarthak from "../../../public/static/images/sarthak.png"
import supreeth from "../../../public/static/images/supreeth.png"
import contactGhost from "../../../public/static/images/contactGhost.png"
import mobileImageWrapper from "../../../public/static/images/mobileContactImageContainer.png"
import ContactProfile from '@/components/ContactProfile';
import Image from 'next/image';
const Page = () => {
  // console.log(shivang)
    const [imageSrc, setImageSrc] = useState(ImageWrapper);
    const [isLoading, setIsLoading] = useState(false);
     const [hoveredProfileIndex, setHoveredProfileIndex] = useState(null);
  // const [hoveredProfile, setHoveredProfile] = useState(null);
  const [hoveredProfile, setHoveredProfile] = useState({
    name: 'Sarthak Arora',
    dept: 'Website, App & Online Payments',
    image: sarthak.src,
  });
  const handleMouseOver = (image, profile, index) => {
    setImageSrc(image);
    setHoveredProfileIndex(index);
    setHoveredProfile(profile)
  };
  const profiles = [
    { name: 'Sarthak Arora', dept: 'Website, App & Online Payments', image: `${sarthak.src}` },
    { name: 'Aayush Paurana', dept: 'Logistics and Operations', image: `${contactGhost.src}`  },
    { name: 'Shaurya Parikh', dept: 'Sponsorship and Marketing', image: `${shaurya.src}`  },
    { name: 'Vaibhav Jain', dept: 'Registration, Events & Approval Queries', image: `${contactGhost.src}`  },
    { name: 'Supreeth', dept: 'Reception and Accommodation', image: `${supreeth.src}`  },
    { name: 'Adarsh Goel', dept: 'Online Collaborations and Publicity' , image: `${contactGhost.src}` },
    // { name: 'contactGhost Rai', dept: 'Registration, Events & Approval Queries', image: `${contactGhost.src}`  },
    // { name: 'contactGhost Rai', dept: 'Registration, Events & Approval Queries', image: `${shivang.src}`  },
  ];
  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.heading}>CONTACT US</div>
        <div className={styles.mainSection}>
            <div className={styles.department}>
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
                 initial={{ opacity: 1 }}
                 key={hoveredProfile.name}
               >
                  {hoveredProfile && (
                    <>
                <ContactProfile
                  name={hoveredProfile.name}
                  dept={hoveredProfile.dept}
                  image = {hoveredProfile.image}
                />
                </>
              )}
                </motion.div>
              )}
                </AnimatePresence>
            </motion.div>
        </div>
      </div>
      <div className={styles.mobilePageWrapper}>
        <Image src={updatedbgImage} className={styles.mobileBgImage}/>
        <div className={styles.mobileHeading}>
          <span>CONTACT US</span>
        </div>
        <div className={styles.mobileMainSection}>
          <div className={styles.mobileDetails}>
                    <Image src={mobileImageWrapper} className={styles.mobileImageWrapper}/>
                    <Image src = {sarthak} className={styles.porImage}/>
                    <h1>Sarthak Arora</h1>
                  <h2>Website, App & Online Payments</h2>
                  <div className={styles.mobileIconsContainer}>
                    <Image src={phone} alt="" />
                    <Image src={mail} alt="" />
                  </div>
                    </div>
          <div className={styles.mobileDetails}>
                    <Image src={mobileImageWrapper} className={styles.mobileImageWrapper}/>
                    <Image src = {contactGhost} className={styles.porImage}/>
                    <h1>Aayush Paurana</h1>
                  <h2 style={{height:"40px"}}>Logistics and Operations</h2>
                  <div className={styles.mobileIconsContainer}>
                    <Image src={phone} alt="" />
                    <Image src={mail} alt="" />
                  </div>
                    </div>
          <div className={styles.mobileDetails}>
                    <Image src={mobileImageWrapper} className={styles.mobileImageWrapper}/>
                    <Image src = {shaurya} className={styles.porImage}/>
                    <h1>Shaurya Parikh</h1>
                  <h2>Sponsorship and Marketing</h2>
                  <div className={styles.mobileIconsContainer}>
                    <Image src={phone} alt="" />
                    <Image src={mail} alt="" />
                  </div>
                    </div>
          <div className={styles.mobileDetails}>
                    <Image src={mobileImageWrapper} className={styles.mobileImageWrapper}/>
                    <Image src = {contactGhost} className={styles.porImage}/>
                    <h1>Vaibhav Jain</h1>
                  <h2>Registration, Events & Approval Queries</h2>
                  <div className={styles.mobileIconsContainer} style={{bottom:'15px', top:"unset"}}>
                    <Image src={phone} alt="" />
                    <Image src={mail} alt="" />
                  </div>
                    </div>
          <div className={styles.mobileDetails}>
                    <Image src={mobileImageWrapper} className={styles.mobileImageWrapper}/>
                    <Image src = {supreeth} className={styles.porImage}/>
                    <h1>Supreeth</h1>
                  <h2>Reception and Accommodation</h2>
                  <div className={styles.mobileIconsContainer}>
                    <Image src={phone} alt="" />
                    <Image src={mail} alt="" />
                  </div>
                    </div>
          <div className={styles.mobileDetails}>
                    <Image src={mobileImageWrapper} className={styles.mobileImageWrapper}/>
                    <Image src = {contactGhost} className={styles.porImage}/>
                    <h1>Adarsh Goel</h1>
                  <h2>Online Collaborations and Publicity</h2>
                  <div className={styles.mobileIconsContainer} style={{bottom:'15px', top:"unset"}}>
                    <Image src={phone} alt="" />
                    <Image src={mail} alt="" />
                  </div>
                    </div>

        </div>
      </div>
    </>
  );
};

export default Page;
