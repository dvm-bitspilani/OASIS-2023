"use client"

import React, { useState, useEffect } from "react";
import Card from "./EventsMobileCard"
import BG from "../../../public/static/images/eventsmobileBG.png"
import * as styles from "./eventsMobile2.module.css"
import Image from "next/image";
import StreetDance from "../../../public/static/images/SampleEvent.png"
import Forward from "../../../public/static/images/forwardArrow.svg"
import Backward from "../../../public/static/images/backArrow.svg"

export default function EventsMobile2({ handleTransition }) {
  const tasks = [
    {
      key: 1,
      name: "RAZZMATAZZ",
      desc: "Razzmatazz is a one-of-its-kind group dance competition that tests finesse and artistry in showcasing coordinated group choreographies. With equal weightage in judgement given to execution, presentation and creativity, it is fashioned to test the esprit de corps of the participating teams. All forms of dance including fusions are allowed. So trip the light fantastic toe and let there be a razzle-dazzle of sheer splendour.",
      image: StreetDance,
      top: "10%",
      left: "5%",
    },
    {
      key: 2,
      name: "DESERT DUEL",
      desc: "It is a solo dance event in which dancers from every college participate and showcase their talent. Depending on the dancer, styles can vary from western to classical to hip-hop and even to the typical Bollywood style.",
      image: StreetDance,
      top: "25%",
      left: "10%",
    },
    {
      key: 3,
      name: "METAMORPHOSIS",
      desc: "Metamorphosis is a short film making contest, where participants have to make a full short film following the given theme.",
      image: StreetDance,
      top: "35%",
      left: "20%",
    },
    {
      key: 4,
      name: "ANDHOLIKA",
      desc: "Andholika is a talent hunt for the most versatile singer among the participants. The event is split into two categories, Eastern and Western.",
      image: StreetDance,
      top: "50%",
      left: "5%",
    },
    {
      key: 5,
      name: "SWARANJALI",
      desc: "Swaranjali is the classical music competition.",
      image: StreetDance,
      top: "65%",
      left: "9%",
    },
    {
      key: 6,
      name: "TANDAV",
      desc: "Tandav is the classical dance competition",
      image: StreetDance,
      top: "70%",
      left: "30%",
    },
    {
      key: 7,
      name: "STAGE PLAY",
      desc: "Drama competition, done on stage for a 30-60 mins",
      image: StreetDance,
      top: "55%",
      left: "35%",
    },
    {
      key: 8,
      name: "STREET PLAY",
      desc: "Street play, 20 mins max, captures a social message or skit without costumes or sound prod",
      image: StreetDance,
      top: "33%",
      left: "37%",
    },
    {
      key: 9,
      name: "TARANG",
      desc: "Street dance",
      image: StreetDance,
      top: "7%",
      left: "23%",
    },
    {
      key: 10,
      name: "PITCH PERFECT",
      desc: "Acapella competition",
      image: StreetDance,
      top: "20%",
      left: "30%",
    },
    {
      key: 11,
      name: "CHOREO",
      desc: "Contemporary dance-stage competition",
      image: StreetDance,
      top: "45%",
      left: "50%",
    },
    {
      key: 12,
      name: "STREET DANCE",
      desc: "Drama competition, done on stage for a 30-60 mins",
      image: StreetDance,
      top: "67%",
      left: "55%",
    },
    {
      key: 13,
      name: "FASHP",
      desc: "Fashion show competition",
      image: StreetDance,
      top: "42%",
      left: "70%",
    },
    {
      key: 14,
      name: "Wordstock",
      desc: "Series of word games and puzzles held in 2 rounds - Prelims and Finals",
      image: StreetDance,
      top: "10%",
      left: "50%",
    },
    {
      key: 15,
      name: "Cinema and Literature quiz",
      desc: "A quiz with the topics of cinema and literature",
      image: StreetDance,
      top: "20%",
      left: "60%",
    },
    {
      key: 16,
      name: "HyperCut",
      desc: "HyperCut is an Ad making competition. Participants can form teams and show their creativity in making the ads. The teams will have 3 days from the reveal of the brand on which the ad has to be made to the final submission.",
      image: StreetDance,
      top: "12%",
      left: "75%",
    },
    {
      key: 17,
      name: "Uncharted - An Escape Room",
      desc: "Just a standard escape room in which hints and riddles will be there in form of film  related stuff",
      image: StreetDance,
      top: "30%",
      left: "72%",
    },

    {
      key: 18,
      name: "Film Festival Inauguration",
      desc: "Film Festival is an umbrella event consisting of events hosted by FMaC, Photog, CrAC, etc. An Inauguration for the same is needed, for which a Guest from the industry will be invited (with Embryo's help)",
      image: StreetDance,
      top: "55%",
      left: "60%",
    },
    {
      key: 19,
      name: "Movie Screening with Guest Talk",
      desc: "A movie will be screened in the presence of a guest from the industry, followed by the guest talk",
      image: StreetDance,
      top: "75%",
      left: "70%",
    },
    {
      key: 20,
      name: "REAL POLITIK",
      desc: "AUCTION OF WORLD LEADERS OF THE PAST AND PRESENT. First round, i.e., quiz round, will be conducted on the spot. the second round will be the auction round. limited teams will be going to the auction round.",
      image: StreetDance,
      top: "57%",
      left: "75%",
    },
  ];

  const [width, setWidth] = useState(0)
  const [translateX, setTranslateX] = useState(0);
  const [cardNo, setCardNo] = useState(1)
  const totalCards = tasks.length + 2


  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const [buttonTranslate, setButtonTranslate] = useState(() => window.innerWidth);

  const handleForward = () => {
    // console.log("fowrard")
    if (cardNo != totalCards) {
      setCardNo(cardNo + 1)
      setTranslateX(translateX - width)
    }
  }
  const handleBackward = () => {
    // console.log("back")
    if (cardNo != 1) {
      setCardNo(cardNo - 1)
      setTranslateX(translateX + width)
    }
  }

  const handleFirstForward = () => {
    setCardNo(cardNo + 1)
    setTranslateX(translateX - width)
    setButtonTranslate(0)
  }

  const handleFirstBackward = () => {
    setCardNo(cardNo - 1)
    setTranslateX(translateX + width)
    setButtonTranslate(width)
  }

  const handleLastForward = () => {
    if (cardNo != totalCards) {
    setCardNo(cardNo + 1)
    setTranslateX(translateX - width)
    setButtonTranslate(-width)}
  }

  const handleLastBackward = () => {
    setCardNo(1)
    setTranslateX(translateX + width*(totalCards-1))
    setButtonTranslate(width)
  }

  const translateStyle = {
    transform: `translateX(${translateX}px)`,
  }
  const buttonTranslateStyle = {
    transform: `translateX(${buttonTranslate}px)`,
  }

  let CardsList = tasks.map((card) => {
    return (
      <Card
        key={card.key}
        name={card.name}
        image={card.image}
        desc={card.desc}
        onBackward={handleBackward}
        onForward={handleForward}
        width={width}
      />
    )

  })

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainContainer}
          style={translateStyle}
        >
          <div className="firstCard" style={{ width: width }}>
            <h1 className={styles.firstHeading} style={{ width: width }}>EVENTS</h1>
            <p className={styles.firstText} style={{ width: width }}>Tap to start your journey!<br />Adventures lie ahead...</p>
            <div className={styles.navigation} style={{ width: width }}>
              {/* <Image src={Backward} onClick={handleBackward} /> */}
              <Image src={Forward} onClick={handleFirstForward} />
            </div>
          </div>
          {CardsList}
          <div className="firstCard" style={{ width: width }}>
            <p className={styles.lastText} style={{ width: width }}>More adventure?<br/>Here awaits a map containing all events</p>
            <div className={styles.lastArrow} style={{ width: width }}>
                    {/* <Image src={Backward} onClick={handleBackward} /> */}
                    <Image  src={Forward}
                    // onClick={() => handleNavClick("events")}
                    />
            </div>
            <div onClick={handleLastBackward} className={styles.backToStart} style={{ width: width }}>&lt;&lt;&lt; back to start</div>
           </div>
        </div>
        <div className={styles.navigation} style={buttonTranslateStyle}>
          <Image src={Backward} onClick={cardNo == 2 ? handleFirstBackward : handleBackward}
          />
          <Image src={Forward} onClick={cardNo == totalCards-1 ? handleLastForward : handleForward} />
        </div>
      </div>
    </>
  )
}