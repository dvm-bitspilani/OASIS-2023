"use client"
import React, {useState,useEffect} from "react"
import * as styles from "./dev.module.css"

import CustomCursor from "@/components/CustomCursor"
import Image from "next/image"
// Importing assets for bg and people
import bg from "./Dev Assets/bg.png"
import front from "./Dev Assets/Front.png"
import frontBg from "./Dev Assets/Frontbg.png"
import design from "./Dev Assets/Design.png"
import designBg from "./Dev Assets/Designbg.png"
import back from "./Dev Assets/Back.png"
import backBg from "./Dev Assets/Backbg.png"
import video from "./Dev Assets/Video.png"
import videoBg from "./Dev Assets/Videobg.png"
import shelf from "./Dev Assets/shelf.png"
import DevTeam from "./DevTeam"
import akshit from "./Dev Assets/akshitDVM.jpg"
import bharat from "./Dev Assets/bharat.JPG"
import luv from "./Dev Assets/luv.jpg"
import ritik from "./Dev Assets/ritikDev.jpg"
import shreyas from "./Dev Assets/shreyas.jpg"
import sunpreet from "./Dev Assets/sunpreet.jpeg"
import trehan from "./Dev Assets/trehan.jpg"
import praneel from "./Dev Assets/praneelDVM.jpg"
import nabisha from "./Dev Assets/nabisha.jpg"
import rakshit from "./Dev Assets/sakhuja.jpg"
import himanshu from "./Dev Assets/himanshu.jpeg"
import raj from "./Dev Assets/clerk.jpg"
import manish from "./Dev Assets/manish.jpg"
import dhruv from "./Dev Assets/dhruv.jpg"
import srinivasa from "./Dev Assets/srinivasa.jpeg"
import rahul from "./Dev Assets/rahul.jpg"
import gurekas from "./Dev Assets/gurekas.jpg"
import tarun from "./Dev Assets/tarun.jpeg"
import { useRouter } from 'next/navigation';
import backBtn from "./Dev Assets/cross.svg"
import {motion} from "framer-motion"
export default function DevelopersPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(true)
  const [allAssetsLoaded, setAllAssetsLoaded] = useState(false)
  const [backgroundImage, setBackgroundImage] = useState(bg.src);
  const [showTeam, setShowTeam] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const handleCloseTeam = () => {
    setShowTeam(false);
    setSelectedTeam(null);
  };
  const handleBookClick = (team, bookBg) => {
    setBackgroundImage(bookBg);
    setSelectedTeam(team);
    setShowTeam(true);
  };
  
  const handleMouseEnter = (bookBg) => {
    setBackgroundImage(bookBg);
    setShowTeam(false);
  };
  
  const handleMouseLeave = () => {
    setBackgroundImage(bg.src);
    setShowTeam(false);
  };
  const handleBackButtonClick = () => {
    router.push('/');
  };
  const FrontTeam = [
    {
        id: 1,
        name: "Ritik Chandra",
        desc: "As responsive as my pages",
        image: ritik,
        linkedin: "https://www.linkedin.com/in/ritik-chandra-016ba9187/",
        github: "https://github.com/Ritikchandra",
        instagram: "https://instagram.com/rritikcchandra?igshid=OGQ5ZDc2ODk2ZA",
        behance: "",
        jersey: "69",
        hostel: "RM",
      },
      {
          id: 3,
          name: "Bharat Raj Singal",
          desc: "geekwolf best in business ",
          image: bharat,
          linkedin: "https://www.linkedin.com/in/bharatrajsingal000/",
          github: "https://github.com/GeekWolf007",
          instagram: "https://www.instagram.com/bharatrajsingal/",
          behance: "",
          jersey: "42",
          hostel: "VK",
      },
    {
        id: 2,
        name: "Luv Gupta",
       
        image: luv,
        linkedin: "https://www.linkedin.com/in/luv-guptaa/",
        github: "https://github.com/LuvGuptaa",
        instagram: "https://www.instagram.com/luv_guptaa_/",
        behance: "",
        jersey: "07",
        hostel: "SK",
    },
    {
        id: 4,
        name: "Shreyas Gantayet",
        desc: "git touch grass",
        image: shreyas,
        linkedin: "https://www.linkedin.com/in/shreyas-gantayet-4b5993280/",
        github: "https://github.com/Y0shicon",
        instagram: "https://www.instagram.com/shreyyas.04/",
        behance: "",
        jersey: "18",
        hostel: "VY",
    },
    {
        id: 5,
        name: "Akshit Garg",
        desc: "thinking out loud",
        image: akshit,
        linkedin: "https://www.linkedin.com/in/agx09",
        github: "https://github.com/AgX09",
        instagram: "https://instagram.com/_akshit__garg_?igshid=OGQ5ZDc2ODk2ZA==",
        behance: "",
        jersey: "09",
        hostel: "RM",
      },
]
const BackTeam = [
    {
        id: 1,
        name: "Gurekas Singh Sahney",
        desc: "",
        image: gurekas,
        linkedin: "https://www.linkedin.com/in/gurekas/",
        github: "https://github.com/string-eureka",
        instagram: "https://www.instagram.com/singh.eureka/",
        behance: "",
        jersey: "00",
        hostel: "AK",
    },
    {
        id: 2,
        name: "Himanshu Kumar",
        desc: "loves both sarc and dvm work ",
        image: himanshu,
        linkedin: "https://www.linkedin.com/in/himanshu-kumar-679ab31b0",
        github: "https://github.com/Zendovo",
        instagram: "https://instagram.com/himanshuuuk",
        behance: "",
        jersey: "13",
        hostel: "RM",
    },
    {
        id: 3,
        name: "RaCl",
        desc: "only person in back who has a gf",
        image: raj,
        linkedin: "https://www.linkedin.com/in/rajclerk",
        github: "https://www.github.com/itsRaCl",
        instagram: "https://www.instagram.com/its_RaCl/",
        behance: "",
        jersey: "11",
        hostel: "AK",
    },
    {
        id: 4,
        name: "Rakshit Sakhuja",
        desc: "proud toxic member of back team",
        image: rakshit,
        linkedin: "https://www.linkedin.com/in/rakshit-sakhuja-61ab00138",
        github: "https://github.com/Rakshit2622",
        instagram: "https://instagram.com/rakshit2622?igshid=OGQ5ZDc2ODk2ZA==",
        behance: "",
        jersey: "18",
        hostel: "AK",
    },
]
const DesignTeam = [
    {
        id: 1,
        name: "Praneel Maddula",
        desc: "Canva users, stay away please",
        image: praneel,
        linkedin: "https://www.linkedin.com/in/praneel-maddula-409421261/",
        github: "",
        instagram: "https://instagram.com/praneel710?igshid=MmU2YjMzNjRlOQ==",
        behance: "https://www.behance.net/praneelmaddula",
        jersey: "45",
        hostel: "RP",
    },
    {
        id: 2,
        name: "Arnav Trehan",
        desc: "",
        image: trehan,
        linkedin: "https://www.linkedin.com/in/arnavtrehan/",
        github: "",
        instagram: "https://www.instagram.com/arnavtrehan3370/",
        behance: "https://www.behance.net/arnavtrehan",
        jersey: "19",
        hostel: "RM",
    },
    {
        id: 3,
        name: "Nabisha Obaid",
        desc: "",
        image: nabisha,
        linkedin: "https://www.linkedin.com/in/nabisha-obaid-19175a264",
        github: "",
        instagram: "https://instagram.com/ ?igshid=OGQ5ZDc2ODk2ZA==",
        behance: "https://www.behance.net/nabishaobaid2",
        jersey: "10",
        hostel: "BD",
    },
    {
        id: 4,
        name: "Sunpreet Brar",
        desc: "don't come too close, it's dark inside ",
        image: sunpreet,
        linkedin: "https://www.linkedin.com/in/sunpreet-brar-a7806a251",
        github: "",
        instagram: "https://instagram.com/sunpreetbrar?utm_source=qr&igshid=OGIxMTE0OTdkZA==",
        behance: "https://dribbble.com/sunpreetbrar",
        jersey: "36",
        hostel: "RM",
    },
]
const VideoTeam = [
  {
      id: 1,
      name: "Dhruv Verma",
      desc: "Canva users, stay away please",
      image: dhruv,
      linkedin: "https://www.linkedin.com/in/dhruv-verma-70582a249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "",
      instagram: "https://instagram.com/dverma._?igshid=YTQwZjQ0NmI0OA==",
      behance: "",
      jersey: "45",
      hostel: "RP",
  },
  {
      id: 2,
      name: "Rahul Gupta",
      desc: "Canva users, stay away please",
      image: rahul,
      linkedin: "https://www.linkedin.com/in/rahul-gupta-234446208",
      github: "",
      instagram: "https://instagram.com/rahulg7888?igshid=MzMyNGUyNmU2YQ==",
      behance: "",
      jersey: "45",
      hostel: "RP",
  },
  {
      id: 3,
      name: "Manish goyal",
      desc: "Canva users, stay away please",
      image: manish,
      linkedin: "https://www.linkedin.com/in/manish-goyal-30b884240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "",
      instagram: "https://instagram.com/manishgoyal.__?igshid=YTQwZjQ0NmI0OA==",
      behance: "",
      jersey: "45",
      hostel: "RP",
  },
  {
      id: 4,
      name: "Srinivasa",
      desc: "Canva users, stay away please",
      image: srinivasa,
      linkedin: "https://www.linkedin.com/in/srinivasa-shankar-b1662524b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "",
      instagram: "https://instagram.com/sri_ni_vas16?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
      behance: "",
      jersey: "45",
      hostel: "RP",
  },
  {
      id: 5,
      name: "Tarun S",
      desc: "Canva users, stay away please",
      image: tarun,
      linkedin: "https://www.linkedin.com/in/tarun-s-055967261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "",
      instagram: "https://www.instagram.com/natrunyx/",
      behance: "",
      jersey: "45",
      hostel: "RP",
  },

]
const teams = {
  FrontTeam,
  BackTeam,
  DesignTeam,
  VideoTeam
};
useEffect(() => {
  if (typeof window !== "undefined") {
    // console.log('first')
    setIsLoading(true)
    setShowLoader(true)
    const assets = [
      bg.src, front.src, frontBg.src, design.src, designBg.src, back.src, backBg.src, video.src, videoBg.src, shelf.src, akshit.src, bharat.src, luv.src, ritik.src, shreyas.src, sunpreet.src, trehan.src, praneel.src, nabisha.src, rakshit.src, himanshu.src, raj.src, manish.src, dhruv.src, srinivasa.src, rahul.src, gurekas.src, tarun.src,luv.src,
    ]
    // console.log('second')
    const loadAssets = async () => {
      const assetPromises = assets.map((asset) => {
        if (asset) {
          return new Promise((resolve, reject) => {
            // const img = new img();
            const img = document.createElement("img")
            img.onload = resolve
            img.onerror = reject
            img.src = asset
          })
        }
      })
      const results = await Promise.allSettled(assetPromises)
      const allSuccessful = results.every(
        (result) => result.status === "fulfilled"
      )
      Promise.all(assetPromises)
        .then(() => {
          setAllAssetsLoaded(true)
          // console.log("loaded");
          setTimeout(() => {
            setIsLoading(false)
            setShowLoader(false)
          }, 2000)
          // console.log('All assets loaded successfully');
        })
        .catch((error) => {
          console.error("Error loading assets:", error)
          // setIsLoading(false);
          setAllAssetsLoaded(true)
          // console.log("loaded");
          setShowLoader(false)
          setTimeout(() => {
            setIsLoading(false)
            setShowLoader(false)
          }, 3000)
        })
    }

    loadAssets()
  }
}, [])
  return (
    <>
    {isLoading ? (
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
      ): <>
      <CustomCursor />
      <div className={styles.pageWrapper} style={{backgroundImage:`url(${backgroundImage})`}} >  
     <Image src={backBtn} className={styles.backBtn} alt="back" onClick={handleBackButtonClick} style={{opacity: window.innerWidth > 800 ? showTeam ? "0" : "1" : "1"}}></Image>
      <div className={styles.heading}>Developers</div>
      {/* <div className={styles.booksWrapper} >
      <Image src={design} alt="Design Book" className={styles.designBook} onMouseEnter={() => handleBookHover(designBg.src)}  onMouseLeave={handleMouseLeave}/>
          <Image src={front} alt="front Book" className={styles.frontBook} onMouseEnter={() => handleBookHover(frontBg.src)}  onMouseLeave={handleMouseLeave}/>
          <Image src={back} alt="back Book" className={styles.backBook} onMouseEnter={() => handleBookHover(backBg.src)}  onMouseLeave={handleMouseLeave}/>
          <Image src={video} alt="video Book" className={styles.videoBook} onMouseEnter={() => handleBookHover(videoBg.src)}  onMouseLeave={handleMouseLeave}/>
          <Image src={shelf} alt="shelf" className={styles.shelf} onMouseEnter={() => handleBookHover(bg.src)} />
      </div> */}
      {showTeam ? (
          <DevTeam team={teams[selectedTeam]} onClose={handleCloseTeam}/>
        ) : (
          <motion.div className={styles.booksWrapper} exit={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}>
          <Image src={design} alt="Design Book" className={styles.designBook} onMouseEnter={() => handleMouseEnter(designBg.src)} onMouseLeave={handleMouseLeave} onClick={() => handleBookClick("DesignTeam", designBg.src)} />
          <Image src={front} alt="front Book" className={styles.frontBook} onMouseEnter={() => handleMouseEnter(frontBg.src)} onMouseLeave={handleMouseLeave} onClick={() => handleBookClick("FrontTeam", frontBg.src)} />
          <Image src={back} alt="back Book" className={styles.backBook} onMouseEnter={() => handleMouseEnter(backBg.src)} onMouseLeave={handleMouseLeave} onClick={() => handleBookClick("BackTeam", backBg.src)} />
          <Image src={video} alt="video Book" className={styles.videoBook} onMouseEnter={() => handleMouseEnter(videoBg.src)} onMouseLeave={handleMouseLeave} onClick={() => handleBookClick("VideoTeam", videoBg.src)} />
          <Image src={shelf} alt="shelf" className={styles.shelf} onMouseEnter={() => handleMouseEnter(bg.src)} onMouseLeave={handleMouseLeave}/>
        </motion.div>
        )}
      </div>
      </>}
      
    </>
  )
}
