"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import { AnimatePresence, motion } from "framer-motion";
import ImageWrapper from "../../public/static/images/contacts.png";
import phone from "../../public/static/images/compressed_phone.svg";
import mail from "../../public/static/images/compressed_mail.svg";
// import mobilebgImage from "../../public/static/images/mobileLibraryBgImage.png";
import updatedbgImage from "../../public/static/images/updatedLibraryBgImage.png";
// import shivang from "../../public/static/images/shivang.png";
import shaurya from "../../public/static/images/shaurya.png";
import sarthak from "../../public/static/images/sarthak.png";
import supreeth from "../../public/static/images/supreeth.png";
import sarthak_president from "../../public/static/images/prez.png"
import vaibhav from "../../public/static/images/vaibhav.png"
import abhinav from "../../public/static/images/abhinav.png"
import adarsh from "../../public/static/images/adarsh.png"
import paurana from "../../public/static/images/paurana.png"
import contactGhost from "../../public/static/images/contactGhost.png";
import mobileImageWrapper from "../../public/static/images/updatedMobileContactImageContainer.png";
import ContactProfile from "@/components/ContactProfile";
import Image from "next/image";

const Page = () => {
  // console.log(shivang)
  const [imageSrc, setImageSrc] = useState(ImageWrapper);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredProfileIndex, setHoveredProfileIndex] = useState(null);
  // const [hoveredProfile, setHoveredProfile] = useState(null);
  const [hoveredProfile, setHoveredProfile] = useState({
    name: "Sarthak Arora",
    dept: "Website, App & Online Payments",
    image: sarthak.src,
  });
  const handleMouseOver = (image, profile, index) => {
    setImageSrc(image);
    setHoveredProfileIndex(index);
    setHoveredProfile(profile);
  };
  const profiles = [
    {
      name: "Sarthak Arora",
      dept: "Website, App & Online Payments",
      image: `${sarthak.src}`,
      phone: "tel:+91-7087797760",
      mail: "mailto:webmaster@bits-oasis.org",
    },
    {
      name: "Aayush Paurana",
      dept: "Logistics and Operations",
      image: `${paurana.src}`,
      phone: "tel:+91-9930486791",
      mail: "mailto:controls@bits-oasis.org",
    },
    {
      name: "Shaurya Parikh",
      dept: "Sponsorship and Marketing",
      image: `${shaurya.src}`,
      phone: "tel:+91-9920618766",
      mail: "mailto:Shaurya@bits-oasis.org",
    },
    {
      name: "Vaibhav Jain",
      dept: "Registration, Events & Approval Queries",
      image: `${vaibhav.src}`,
      phone: "tel:+91-9818332330",
      mail: "mailto:pcr@bits-oasis.org",
    },
    {
      name: "Supreeth MK",
      dept: "Reception and Accommodation",
      image: `${supreeth.src}`,
      phone: "tel:+91-7349738884",
      mail: "mailto:recnacc@bits-oasis.org",
    },
    {
      name: "Adarsh Goel",
      dept: "Online Collaborations and Publicity",
      image: `${adarsh.src}`,
      phone: "tel:+91-8979951532",
      mail: "mailto:collaborations@bits-oasis.org",
    },
    {
      name: "Sarthak Aggarwal",
      dept: "President, Students' Union",
      image: `${sarthak_president.src}`,
      phone: "tel:+91-8005000213",
      mail: "mailto:president@pilani.bits-pilani.ac.in",
    },
    {
      name: "Abhinav Lamba",
      dept: "General Secretary, Students' Union",
      image: `${abhinav.src}`,
      phone: "tel:+91-7078879443",
      mail: "mailto:gensec@pilani.bits-pilani.ac.in",
    },
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
                className={`${styles.registerBtnWrapper} customHover`}
              >
                {profile.dept}
              </p>
            ))}
          </div>
          <motion.div
            className={styles.imgWrapper}
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
            <Image src={imageSrc} alt="" className={styles["bookImage"]} suppressHydrationWarning />
            <AnimatePresence>
              {hoveredProfile && (
                <motion.div
                  className={styles["details"]}
                  initial={{ opacity: 1 }}
                  key={hoveredProfile.name}
                >
                  {hoveredProfile && (
                    <>
                      {/* <ContactProfile
                  name={hoveredProfile.name}
                  dept={hoveredProfile.dept}
                  image = {hoveredProfile.image}
                  phone = {hoveredProfile.phone}
                  mail = {hoveredProfile.mail}
                /> */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1 }}
                          className={styles.contactDetails}
                        >
                          <ContactProfile
                            name={hoveredProfile.name}
                            dept={hoveredProfile.dept}
                            image={hoveredProfile.image}
                            phone={hoveredProfile.phone}
                            mail={hoveredProfile.mail}
                          />
                        </motion.div>
                      </AnimatePresence>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <div className={styles.mobilePageWrapper}>
        <Image src={updatedbgImage} className={styles.mobileBgImage} alt="" suppressHydrationWarning />
        <div className={styles.mobileContentWrapper}>
          <div className={styles.mobileHeading}>
            <span>CONTACT US</span>
          </div>
          <div className={styles.mobileMainSection}>
            {profiles.map((profile, index) => (
              <div className={styles.mobileDetails} key={index}>
                <Image
                  src={mobileImageWrapper}
                  className={styles.newMobileImageWrapper}
                  alt=""
                  priority
                  suppressHydrationWarning
                />
                <div className={styles.mobileDetailsContent}>
                  <Image src={profile.image} width={100} height={124} alt="" placeholder="blur" blurDataURL={sarthak.blurDataURL} suppressHydrationWarning/>
                  <div className={styles.mobileTextDetails}>
                    <span className={styles.mobileDetailsName}>
                      {profile.name}
                    </span>
                    <span className={styles.mobileDetailsDept}>
                      {profile.dept}
                    </span>
                    <div className={styles.mobileIcons}>
                      <a href={profile.phone}>
                        <Image
                          src={phone}
                          className={styles.mobileCallIcon}
                          alt=""
                          priority
                          suppressHydrationWarning
                        />
                      </a>
                      <a href={profile.mail}>
                        <Image
                          src={mail}
                          className={styles.mobileMailIcon}
                          alt=""
                          priority
                          suppressHydrationWarning
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
