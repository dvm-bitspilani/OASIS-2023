"use client";

import React, { useState, useEffect } from "react";
import Card from "./EventsMobileCard";
import BG from "../../../public/static/images/eventsmobileBG.png";
import * as styles from "./eventsMobile2.module.css";
import Image from "next/image";
import StreetDance from "../../../public/static/images/eventsModalOasisLogo.png";
// import StreetDance from "../../../public/static/images/eventsOasisModalLogo.png"
import Forward from "../../../public/static/images/forwardArrow.svg";
import Backward from "../../../public/static/images/backArrow.svg";
import { useWindowSize } from "rooks";

export default function EventsMobile2({ handleTransition }) {
  const { innerWidth, innerHeight } = useWindowSize();
  const [eventDetails, setEventDetails] = useState([]);

  async function getEventDetails() {
    const res = await fetch(
      "https://bits-oasis.org/2023/main/registrations/events_details"
    );
    if (!res.ok) {
      throw new Error("Failed to get Events");
    }
    return res.json();
  }

  useEffect(() => {
    getEventDetails()
      .then((data) => {
        setEventDetails(
          data.map((item) => {
            return {
              name: item.name,
              desc: item.about,
              image: item.img_mobile_url,
              organiser: item.organiser,
              contact: item.contact,
            };
          })
        );
        // console.log(data);
      })
      .catch((error) => {
        // console.log(error);
      });
      // console.log(eventDetails)
  }, []);

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
      name: "CHOREO",
      desc: "Choreo is a dance event which features contemporary dance performances by teams from colleges around the country. This event is conducted in the central auditorium. After the initial elimination round, about six to eight teams are shortlisted for the final round. The final round features contemporary dance performances that are usually based on a certain theme.",
      image: StreetDance,
      top: "35%",
      left: "20%",
    },
    {
      key: 4,
      name: "STREET DANCE",
      desc: "As the name suggests, Street Dance is a street-style dance event which features performances by teams from colleges around the country. Street Dance is considered a crowd favourite and is held in the Rotunda, the open-air amphitheatre of BITS. After the initial elimination round, about eight to ten teams are shortlisted for the final round. The first stage of the final round features street-style performances by the participating teams. The second stage of the final round is a face-off challenge between pairs of teams. These pairs are allotted randomly.",
      image: StreetDance,
      top: "50%",
      left: "5%",
    },
    {
      key: 6,
      name: "TANDAV",
      desc: "Tandav Solo is an Indian classical dance competition wherein Dancers across India come and participate in a show of their best abilities on an individual level.",
      image: StreetDance,
      top: "70%",
      left: "30%",
    },
    {
      key: 7,
      name: "STAGE PLAY",
      desc: "It is said that the stage is a magic circle where only the most real things happen, a neutral territory outside the jurisdiction of fate where stars may be crossed with impunity. A truer and more real place does not exist in all the universe. The Stage Play event brings you a wholesome feat of drama to awaken and thrill your senses. It gives you a chance to captivate your audience with your actions and expressions and to watch and perform captivating plays.",
      image: StreetDance,
      top: "55%",
      left: "35%",
    },
    {
      key: 8,
      name: "STREET PLAY",
      desc: "Oasis brings to you, right from the streets, a loud and larger-than-life exchange of ideologies, with drama full of humour and zeal. Street Plays aka Nukkad Natak, are carried out to propagate social and political messages among the masses, amidst the direct, intimate, and effective means of theatre by means of shouts, chants, drums and catchy songs.",
      image: StreetDance,
      top: "33%",
      left: "37%",
    },
    {
      key: 9,
      name: "TARANG",
      desc: "Tarang – a musical fusion extravaganza from the Indian heartland and its innumerably diverse facets. Cover an existing piece or create your own. Come as a band and the stage is yours.",
      image: StreetDance,
      top: "7%",
      left: "23%",
    },
    {
      key: 10,
      name: "PITCH PERFECT",
      desc: "Be it the catchy rhythm of Anna Kendrick or the calm and breezy voice of Bobby McFerrin, experience a cappella at its best at Pitch Perfect. With participants from over 10 institutions, Pitch Perfect is the platform for a growing crowd of Cappella enthusiasts to face off against each other. A battle of the bands with no instruments, this symphony of voices at the Main Auditorium is establishing a new dimensionality of music vastly unexplored till date.",
      image: StreetDance,
      top: "20%",
      left: "30%",
    },
    {
      key: 11,
      name: "SWARANJALI SOLO (VOCALS)",
      desc: "Swaranjali is a classical music competition. Participants trained in the vocal and instrumental aspects of both Carnatic and Hindustani styles are invited to compete. (Instruments: violin, sitar, veena, flute, Hawaiian guitar, tabla, mridangam, ghatam, keyboard, harmonium, kanjira, sarangi and sarod.) There are 4 categories: 1. Solo Vocals 2. Solo Wind and String 3. Solo Percussion 4. Group",
      image: StreetDance,
      top: "45%",
      left: "50%",
    },
    {
      key: 12,
      name: "ANDHOLIKA",
      desc: "Andholika is a talent hunt for the most versatile singer amongst the participants. The event is split into two independent sections, Eastern And Western",
      image: StreetDance,
      top: "67%",
      left: "55%",
    },
    {
      key: 13,
      name: "METAMORPHOSIS",
      desc: "Metamorphosis is a theme based short film making competition, where aspiring filmmakers from all over the country showcase their talent through their aesthetic sense, ingenuity, perspective and emotion. Every year we get multiple entries and the best of them are screened during Oasis.",
      image: StreetDance,
      top: "42%",
      left: "70%",
    },
    {
      key: 14,
      name: "FASHP",
      desc: "Fashion is an art, a religion, a peek into a personality. For some, it’s an escape or a disguise while for others it’s just being comfortable. But ultimately, fashion is an individual statement of expression for each of us and Fashion Parade is the avenue to express yourself. The epilogue of one's pursuit of fashion and style. With the stage set for ingenious designers to parade their stunning models in their own never-seen-before designs, it will be an ethereal experience for all.",
      image: StreetDance,
      top: "10%",
      left: "50%",
    },
  ];

  const [width, setWidth] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [cardNo, setCardNo] = useState(1);
  const totalCards = tasks.length + 1;

  useEffect(() => {
    const updateWidth = () => {
      setWidth(innerWidth);
    };
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // const [buttonTranslate, setButtonTranslate] = useState(() => innerWidth);
  // console.log(buttonTranslate)

  let translateStyle = {
    transform: `translateX(${translateX}px)`,
  };
  // let buttonTranslateStyle = {
  //   transform: `translateX(${buttonTranslate}px)`,
  // };

  const handleForward = () => {
    // console.log("fowrard")
    if (cardNo != totalCards) {
      setCardNo(cardNo + 1);
      setTranslateX(translateX - width);
    }
  };
  const handleBackward = () => {
    // console.log("back")
    if (cardNo != 1) {
      setCardNo(cardNo - 1);
      setTranslateX(translateX + width);
    }
  };

  const handleFirstForward = () => {
    setCardNo(cardNo + 1);
    setTranslateX(translateX - width);
    // setButtonTranslate(0);
  };

  const handleFirstBackward = () => {
    setCardNo(cardNo - 1);
    setTranslateX(translateX + width);
    // setButtonTranslate(width);
  };

  // const handleLastForward = () => {
  //   if (cardNo != totalCards) {
  //     setCardNo(cardNo + 1);
  //     setTranslateX(translateX - width);
  //     setButtonTranslate(-width);
  //   }
  // };

  // const handleLastBackward = () => {
  //   setCardNo(1);
  //   setTranslateX(translateX + width * (totalCards - 1));
  //   setButtonTranslate(width);
  // };

  

  let CardsList = eventDetails.map((card) => {
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
    );
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainContainer} style={translateStyle}>
          <div className="firstCard" style={{ width: width }}>
            <h1 className={styles.firstHeading} style={{ width: width }}>
              EVENTS
            </h1>
            <p className={styles.firstText} style={{ width: width }}>
              Tap to start your journey!
              <br />
              Adventures lie ahead...
            </p>
            <div
              className={styles.navigation}
              style={{ width: width}}
            >
              {/* <Image src={Backward} onClick={handleBackward} /> */}
              <Image src={Forward} onClick={handleFirstForward} alt="" />
            </div>
          </div>
          {CardsList}
          {/* <div className="firstCard" style={{ width: width }}>
            <p className={styles.lastText} style={{ width: width }}>More adventure?<br/>Here awaits a map containing all events</p>
            <div className={styles.lastArrow} style={{ width: width }}>
                    <Image  src={Forward}
                    />
            </div>
            <div onClick={handleLastBackward} className={styles.backToStart} style={{ width: width }}>&lt;&lt;&lt; back to start</div>
           </div> */}
        </div>
        <div className={styles.navigation} style={{transform: cardNo == 1 ? `translateX(${width}px)` : `translateX(${0}px)`}}>
          <Image
            src={Backward}
            onClick={cardNo == 2 ? handleFirstBackward : handleBackward}
          />
          <Image
            src={Forward}
            onClick={cardNo == totalCards ? "" : handleForward}
            style={{
              opacity: cardNo == totalCards ? "0.4" : "1",
              cursor: cardNo == totalCards ? "auto" : "pointer",
            }}
          />
        </div>
      </div>
    </>
  );
}
