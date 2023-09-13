import React from "react";
import Image from "next/image";
import * as events from "./events.module.css";
import Item from "../../public/static/images/StreetDance.png";

const EventItem = ({ name, desc, image, top, left }) => {
  return (
    <>
      <div className={events.itemContainer} style={{top: top, left: left}}>
        <div className={events.itemImage}>
        <Image src={Item} height={240} width={362} alt="Street Dance"></Image>
        </div>
        <div className={events.itemContent}>
          <h2>{name}</h2>
          <p>
            {desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default EventItem;
