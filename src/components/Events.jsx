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
import OasisLogo from "../../public/static/images/eventsOasisLogo.png";
import EventItem from "./EventItem";
import EventModal from "./EventModal";
gsap.registerPlugin(ScrollTrigger);

import cross from "../../public/static/images/cross.svg";

const Events = ({ showBackBtn, handleTransition }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [reduceBrightness, setReduceBrightness] = useState(false);
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
          data[0]["events"].map((item) => {
            return {
              name: item.name,
              desc: item.about,
              image: item.img_url,
              organiser: item.organiser,
              contact: item.contact,
            };
          })
        );
        // console.log(data[0]["events"]);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  const tasks = [
    {
      key: 1,
      name: "RAZZMATAZZ",
      desc: "Razzmatazz is a one-of-its-kind group dance competition that tests finesse and artistry in showcasing coordinated group choreographies. With equal weightage in judgement given to execution, presentation and creativity, it is fashioned to test the esprit de corps of the participating teams. All forms of dance including fusions are allowed. So trip the light fantastic toe and let there be a razzle-dazzle of sheer splendour.",
      image: OasisLogo,
      top: "10%",
      left: "5%",
    },
    {
      key: 2,
      name: "DESERT DUEL",
      desc: "It is a solo dance event in which dancers from every college participate and showcase their talent. Depending on the dancer, styles can vary from western to classical to hip-hop and even to the typical Bollywood style.",
      image: OasisLogo,
      top: "25%",
      left: "10%",
    },
    {
      key: 3,
      name: "CHOREO",
      desc: "Choreo is a dance event which features contemporary dance performances by teams from colleges around the country. This event is conducted in the central auditorium. After the initial elimination round, about six to eight teams are shortlisted for the final round. The final round features contemporary dance performances that are usually based on a certain theme.",
      image: OasisLogo,
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
    // {
    //   key: 5,
    //   name: "SWARANJALI",
    //   desc: "Swaranjali is a classical music competition. Participants trained in the vocal and instrumental aspects of both Carnatic and Hindustani styles are invited to compete. (Instruments: violin, sitar, veena, flute, Hawaiian guitar, tabla, mridangam, ghatam, keyboard, harmonium, kanjira, sarangi and sarod.)",
    //   image: Swaranjali,
    //   top: "65%",
    //   left: "9%",
    // },
    {
      key: 6,
      name: "TANDAV",
      desc: "Tandav is a classical dance competition. It invites participants trained in Odissi, Kathak, Kuchipudi, Bharatanatyam, Manipuri, Kathakali, Mohiniattam and Sattriya.\n There are 2 categories: \n Solo and Group",
      image: Tandav,
      top: "70%",
      left: "30%",
    },
    {
      key: 7,
      name: "STAGE PLAY",
      desc: "It is said that the stage is a magic circle where only the most real things happen, a neutral territory outside the jurisdiction of fate where stars may be crossed with impunity. A truer and more real place does not exist in all the universe. The Stage Play event brings you a wholesome feat of drama to awaken and thrill your senses. It gives you a chance to captivate your audience with your actions and expressions and to watch and perform captivating plays.",
      image: OasisLogo,
      top: "55%",
      left: "35%",
    },
    {
      key: 8,
      name: "STREET PLAY",
      desc: "Oasis brings to you, right from the streets, a loud and larger-than-life exchange of ideologies, with drama full of humour and zeal. Street Plays aka Nukkad Natak, are carried out to propagate social and political messages among the masses, amidst the direct, intimate, and effective means of theatre by means of shouts, chants, drums and catchy songs.",
      image: OasisLogo,
      top: "33%",
      left: "37%",
    },
    {
      key: 9,
      name: "TARANG",
      desc: "Tarang – a musical fusion extravaganza from the Indian heartland and its innumerably diverse facets. Cover an existing piece or create your own. Come as a band and the stage is yours.",
      image: OasisLogo,
      top: "7%",
      left: "23%",
    },
    {
      key: 10,
      name: "PITCH PERFECT",
      desc: "Be it the catchy rhythm of Anna Kendrick or the calm and breezy voice of Bobby McFerrin, experience a cappella at its best at Pitch Perfect. With participants from over 10 institutions, Pitch Perfect is the platform for a growing crowd of Cappella enthusiasts to face off against each other. A battle of the bands with no instruments, this symphony of voices at the Main Auditorium is establishing a new dimensionality of music vastly unexplored till date.",
      image: OasisLogo,
      top: "20%",
      left: "30%",
    },
    {
      key: 11,
      name: "SWARANJALI",
      desc: "Swaranjali is a classical music competition. Participants trained in the vocal and instrumental aspects of both Carnatic and Hindustani styles are invited to compete. (Instruments: violin, sitar, veena, flute, Hawaiian guitar, tabla, mridangam, ghatam, keyboard, harmonium, kanjira, sarangi and sarod.) \n There are 4 categories: \n 1. Solo Vocals \n 2. Solo Wind and String \n 3. Solo Percussion \n 4. Group",
      image: Swaranjali,
      top: "45%",
      left: "50%",
    },
    {
      key: 12,
      name: "ANDHOLIKA",
      desc: "Andholika is a talent hunt for the most versatile singer amongst the participants. The event is split into two independent sections, Eastern And Western",
      image: OasisLogo,
      top: "67%",
      left: "55%",
    },
    {
      key: 13,
      name: "METAMORPHOSIS",
      desc: "Metamorphosis is a theme based short film making competition, where aspiring filmmakers from all over the country showcase their talent through their aesthetic sense, ingenuity, perspective and emotion. Every year we get multiple entries and the best of them are screened during Oasis.",
      image: OasisLogo,
      top: "42%",
      left: "70%",
    },
    {
      key: 14,
      name: "FASHP",
      desc: "Fashion is an art, a religion, a peek into a personality. For some, it’s an escape or a disguise while for others it’s just being comfortable. But ultimately, fashion is an individual statement of expression for each of us and Fashion Parade is the avenue to express yourself. The epilogue of one's pursuit of fashion and style. With the stage set for ingenious designers to parade their stunning models in their own never-seen-before designs, it will be an ethereal experience for all.",
      image: OasisLogo,
      top: "10%",
      left: "50%",
    },
    // {
    //   key: 15,
    //   name: "Cinema and Literature quiz",
    //   desc: "A quiz with the topics of cinema and literature",
    //   image: StreetDance,
    //   top: "20%",
    //   left: "60%",
    // },
    // {
    //   key: 16,
    //   name: "HyperCut",
    //   desc: "HyperCut is an Ad making competition. Participants can form teams and show their creativity in making the ads. The teams will have 3 days from the reveal of the brand on which the ad has to be made to the final submission.",
    //   image: StreetDance,
    //   top: "12%",
    //   left: "75%",
    // },
    // {
    //   key: 17,
    //   name: "Uncharted - An Escape Room",
    //   desc: "Just a standard escape room in which hints and riddles will be there in form of film  related stuff",
    //   image: StreetDance,
    //   top: "30%",
    //   left: "72%",
    // },

    // {
    //   key: 18,
    //   name: "Film Festival Inauguration",
    //   desc: "Film Festival is an umbrella event consisting of events hosted by FMaC, Photog, CrAC, etc. An Inauguration for the same is needed, for which a Guest from the industry will be invited (with Embryo's help)",
    //   image: StreetDance,
    //   top: "55%",
    //   left: "60%",
    // },
    // {
    //   key: 19,
    //   name: "Movie Screening with Guest Talk",
    //   desc: "A movie will be screened in the presence of a guest from the industry, followed by the guest talk",
    //   image: StreetDance,
    //   top: "75%",
    //   left: "70%",
    // },
    // {
    //   key: 20,
    //   name: "REAL POLITIK",
    //   desc: "AUCTION OF WORLD LEADERS OF THE PAST AND PRESENT. First round, i.e., quiz round, will be conducted on the spot. the second round will be the auction round. limited teams will be going to the auction round.",
    //   image: StreetDance,
    //   top: "57%",
    //   left: "75%",
    // },
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
    }, 300);
  };
  const containerClassName = reduceBrightness
    ? `${events.container} ${events.reduceBrightness}`
    : events.container;
  return (
    <>
      {showBackBtn && (
        <button onClick={() => handleBtnClick("home")} className={events.cross}>
          <Image
            src={cross}
            alt="Close"
          />
        </button>
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
