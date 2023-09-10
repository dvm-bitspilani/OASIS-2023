import React, { useEffect } from "react";
import * as events from "../components/events.module.css";
import Image from "next/image";
import Map from "../../public/static/images/EventsMap.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "rooks";
import StreetDance from "../../public/static/images/StreetDance.png";
import EventItem from "./EventItem";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const tasks = [
  {
    key: 1,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "10%",
    left: "5%",
  },
  {
    key: 2,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "25%",
    left: "10%",
  },
  {
    key: 3,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "35%",
    left: "20%",
  },
  {
    key: 4,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "50%",
    left: "5%",
  },
  {
    key: 5,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "65%",
    left: "9%",
  },
  {
    key: 6,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "70%",
    left: "30%",
  },
  {
    key: 7,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "55%",
    left: "35%",
  },
  {
    key: 8,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "25%",
    left: "40%",
  },
  {
    key: 9,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "45%",
    left: "50%",
  },
  {
    key: 10,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "67%",
    left: "55%",
  },
  {
    key: 11,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "35%",
    left: "55%",
  },
  {
    key: 12,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "10%",
    left: "50%",
  },
  {
    key: 13,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "20%",
    left: "60%",
  },
  {
    key: 14,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "12%",
    left: "75%",
  },
  {
    key: 15,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "30%",
    left: "72%",
  },
  {
    key: 16,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "40%",
    left: "77%",
  },
  {
    key: 17,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "55%",
    left: "60%",
  },
  {
    key: 18,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "60%",
    left: "77%",
  },
  {
    key: 19,
    name: "STREET DANCE",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
    image: StreetDance,
    top: "75%",
    left: "70%",
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
      ease: "power2.inOut",
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
      .to("#c", { motionPath: "#p", immediateRender: true, ease: "none" }, 0)
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

  return (
    <div className={events.wrapper}>
      <div id="scrollDist" className={events.scrollDist}></div>
      <div id="container" className={events.container}>
        <Image
          src={Map}
          width={4096}
          height={2305}
          draggable={false}
          alt=""
          style={{ position: "absolute" }}
        />
        <svg
          width="2359"
          height="1173"
          viewBox="0 0 2359 1173"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute" }}
        >
          <circle id="c" r="10" fill="#f00" />
          <path
            id="p"
            d="M9.5 32.9988C47.8333 436.832 222.9 1180.4 488.5 1162C820.5 1139 678 -179.001 991 32.9988C1304 244.999 1019 1111.5 1396.5 1162C1774 1212.5 1789.5 32.9989 2110.5 32.9988C2460.5 32.9987 2332 429.499 2299.5 535.5C2256.75 674.927 2245.5 796.5 2198 1162"
            stroke="#FF0000"
            strokeWidth="5"
            fill="none"
          />
        </svg>
        <div className={events.itemWrapper}>
          {tasks.map((evt) => {
            return (
              <EventItem key={evt.key} name={evt.name} desc={evt.desc} image={evt.image} top={evt.top} left={evt.left}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
