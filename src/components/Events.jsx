import React, { useEffect, useState } from "react";
import * as events from "../components/events.module.css";
import Image from "next/image";
import Map from "../../public/static/images/EventsMap.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSafeSetState, useWindowSize } from "rooks";
import StreetDance from "../../public/static/images/StreetDance.png";
import RapWars from "../../public/static/images/RapWars.png";
import Tandav from "../../public/static/images/Tandav.png";
import Swaranjali from "../../public/static/images/Swaranjali.png";
import EventItem from "./EventItem";
import EventModal from "./EventModal";
gsap.registerPlugin(ScrollTrigger);

const Events = ({ showBackBtn, handleTransition }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [reduceBrightness, setReduceBrightness] = useState(false);
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
      desc: "Swaranjali is a classical music competition. Participants trained in the vocal and instrumental aspects of both Carnatic and Hindustani styles are invited to compete. (Instruments: violin, sitar, veena, flute, Hawaiian guitar, tabla, mridangam, ghatam, keyboard, harmonium, kanjira, sarangi and sarod.)",
      image: Swaranjali,
      top: "65%",
      left: "9%",
    },
    {
      key: 6,
      name: "TANDAV",
      desc: "Tandav is a classical dance competition. It invites participants trained in Odissi, Kathak, Kuchipudi, Bharatanatyam, Manipuri, Kathakali, Mohiniattam and Sattriya.",
      image: Tandav,
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
  const { innerWidth, innerHeight } = useWindowSize();

  useEffect(() => {
    // Set initial states
    gsap.set("#scrollDist", { width: "100%", height: "100%" });
    gsap.set("#container", {
      position: "fixed",
      width: 4096,
      height: 2305,
      transformOrigin: "0 0",
      left: innerWidth / -25,
      top: innerHeight / -50,
    });
    gsap.to("#container", {
      duration: 1,
      opacity: 1,
      ease: "ease",
      delay: 0.3,
    });

    // Tween the SVG path + circle
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#scrollDist",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      })
      .to("#c", { motionPath: "#p", immediateRender: true, ease: "none" }, 0);
    // .from("#p", { drawSVG: "0 0", ease: "none" }, 0);

    // Move container's x/y to follow the red circle
    gsap.ticker.add(() =>
      gsap.to("#container", {
        duration: 2.5,
        x: -gsap.getProperty("#c", "x"),
        y: -gsap.getProperty("#c", "y"),
      })
    );

    // Center the container's left/top position
    const resizeHandler = () => {
      gsap.set("#container", {
        left: 0,
        top: 0,
      });
    };

    window.addEventListener("load", resizeHandler);
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("load", resizeHandler);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  const handleBtnClick = (page) => {
    handleTransition(page);
  };
  const openModal = (event) => {
    setSelectedEvent(event);
    setReduceBrightness(true);
  };

  const closeModal = () => {
    setTimeout(() => {
      setSelectedEvent(null);
      setReduceBrightness(false);
    }, 300)
  };
  const containerClassName = reduceBrightness ? `${events.container} ${events.reduceBrightness}` : events.container;
  return (
    <>
      {showBackBtn && (
        <div className={events.backBtn}>
          <button onClick={() => handleBtnClick("home")}>BACK TO HOME</button>
        </div>
      )}
      <div className={events.wrapper}>
        <div id="scrollDist" className={events.scrollDist}></div>

        <div id="container" className={containerClassName}>
          <Image
            src={Map}
            width={4096}
            height={2305}
            draggable={false}
            alt=""
            style={{ position: "absolute" }}
            className={events.map}
            suppressHydrationWarning
          />
          <svg
            width="2359"
            height="1173"
            viewBox="0 0 2359 1173"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute" }}
            suppressHydrationWarning
          >
            <circle id="c" r="10" fill="#51B6FF" />
            <path
              id="p"
              d="M9.5 32.9988C47.8333 436.832 222.9 1180.4 488.5 1162C820.5 1139 678 -179.001 991 32.9988C1304 244.999 1019 1111.5 1396.5 1162C1774 1212.5 1789.5 32.9989 2110.5 32.9988C2460.5 32.9987 2332 429.499 2299.5 535.5C2256.75 674.927 2245.5 796.5 2198 1162"
              stroke="#51B6FF"
              strokeWidth="5"
            />
          </svg>

          <div className={events.itemWrapper}>
            {tasks.map((evt) => {
              return (
                <div
        key={evt.key}
        onClick={() => openModal(evt)}
        className={events.eventItem}
      >
                <EventItem
                  key={evt.key}
                  name={evt.name}
                  desc={evt.desc}
                  image={evt.image}
                  // top={evt.top}
                  // left={evt.left}
                />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {selectedEvent && (
  <EventModal event={selectedEvent} closeModal={closeModal} />
)}
    </>
  );
};

export default Events;
