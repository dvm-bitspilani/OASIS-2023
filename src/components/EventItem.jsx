import React from "react";
import Image from "next/image";
import * as events from "./events.module.css";
import Item from "../../public/static/images/StreetDance.png";
import scrollAsset from "../../public/static/images/EventItem.png";
import StreetDance from "../../public/static/images/StreetDance.png";

const EventItem = ({ name, desc, image, top, left }) => {
  return (
    <>
        {/* <div className={events.itemImage}> */}
        <Image suppressHydrationWarning draggable={false} src={image} height={240} width={362} alt="Street Dance"></Image>
        {/* </div> */}
        <div className={events.itemContent}>
          <h2>{name}</h2>
          <p>
            {desc.length > 210 ? desc.slice(0, 210) + "..." : desc}
          </p>
        </div>
      {/* <div className={events.itemData}>
          <Image draggable={false} alt="" src={scrollAsset} height={1200} width={840} />
      </div> */}
    </>
  );
};

export default EventItem;
