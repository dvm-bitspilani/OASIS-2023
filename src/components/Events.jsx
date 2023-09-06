import React from "react";
import * as events from "../components/events.module.css";
import Image from "next/image";
import Map from "../../public/static/images/EventsMap.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  return (
    <div>
      <div id="scrollDist"></div>
      <div id="container">
        <Image
          src={Map}
          width={4096}
          height={2305}
          draggable={false}
          alt=""
        />
      </div>
    </div>
  );
};

export default Events;
