"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import "../globals.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

import skullImg from "../../../public/static/images/skull.svg";
import CustomCursor from "@/components/CustomCursor";
// import skullImg from "../../../";

import cross from "../../../public/static/images/cross.svg";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const skullRef = useRef(null);
  const contentRef = useRef(null);

  const handleTrackSnap = (e) => {
    const formContainerElem = contentRef.current;
    const scrollBarContainer = document.querySelector(
      `.${styles.scrollBarContainer}`
    );

    const percentage =
      ((e.clientY - scrollBarContainer.offsetTop) /
        scrollBarContainer.clientHeight) *
      100;
    const maxScrollTopValue =
      formContainerElem.scrollHeight - formContainerElem.clientHeight;

    formContainerElem.scrollTo({
      top: (percentage / 100) * maxScrollTopValue,
      behavior: "smooth",
    });
  };

  const handleSkullMouseDown = (e) => {
    // console.log("mousedown");
    e.preventDefault();

    document.addEventListener("mousemove", handleSkullDragMove);
    document.addEventListener("touchmove", handleSkullDragMove);

    document.addEventListener("mouseup", handleSkullDragEnd);
    document.addEventListener("touchend", handleSkullDragEnd);
  };

  const handleSkullDragMove = (e) => {
    // const skullElem = skullRef.current;
    const formContainerElem = contentRef.current;
    const scrollBarContainer = document.querySelector(
      `.${styles.scrollBarContainer}`
    );

    const maxScrollTopValue =
      formContainerElem.scrollHeight - formContainerElem.clientHeight;

    const clientY = e.clientY || e.touches[0].clientY;

    const percentage =
      ((clientY - scrollBarContainer.offsetTop) /
        scrollBarContainer.clientHeight) *
      100;

    formContainerElem.scrollTop = (percentage / 100) * maxScrollTopValue;
  };

  const handleSkullDragEnd = (e) => {
    document.removeEventListener("mousemove", handleSkullDragMove);
    document.removeEventListener("mouseup", handleSkullDragEnd);
    document.removeEventListener("touchmove", handleSkullDragMove);
    document.removeEventListener("touchend", handleSkullDragEnd);
  };

  function handleScroll(inp) {
    // const maxScrollTopValue = formContainerRef.current.scrollTopMax;
    const maxScrollTopValue =
      contentRef.current.scrollHeight - contentRef.current.clientHeight;
    // const percentage = (contentRef.current.scrollTop / maxScrollTopValue )*100;
    const percentage = (contentRef.current.scrollTop / maxScrollTopValue) * 100;
    percentage > 100
      ? (skullRef.current.style.top = "100%")
      : (skullRef.current.style.top = `${percentage}%`);

    // console.log(percentage);
    // skullRef.current.style.top = `${percentage}%`;
    // skullElem.style.top = `${percentage}%`;
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://bits-oasis.org/2023/main/wallet/sponsors/"
      );
      const json = await res.json();
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      setData(json);
    };
    fetchData();
  }, []);

  // map the data to the cards where url is not ''
  const sponsorCards = data.map((sponsor) => {
    return (
      <SponsorCard
        key={sponsor.id}
        props={{
          id: sponsor.id,
          name: sponsor.name,
          description: sponsor.category,
          image: sponsor.url,
        }}
      />
    );
  });

  return (
    <>
      {isLoading && (
        <div className="loaderContainer">
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
      )}
      <div className={styles["sponsorsPage"]}>
        <CustomCursor />
        <Image
          suppressHydrationWarning
          src={cross}
          onClick={() => {
            router.push("/");
          }}
          alt="Close"
          className={styles.cross}
        />
        <h1 className={styles.heading}>SPONSORS</h1>

        <div className={styles.sponsorsContent}>
          <div className={styles.scrollBarContainer} onClick={handleTrackSnap}>
            <div className={styles.scrollBar}></div>
            <Image
              suppressHydrationWarning
              draggable={false}
              onMouseDown={handleSkullMouseDown}
              onTouchStart={handleSkullMouseDown}
              id="skull"
              src={skullImg}
              alt="skull"
              ref={skullRef}
            />
          </div>
          <div
            className={styles.sponsorsContentContainer}
            ref={contentRef}
            onScroll={handleScroll}
          >
            <div className={styles.cardsContainer}>
              <div className={styles.cardsFirstRow}>{sponsorCards[0]}</div>
              <div className={styles.cardsSecondRow}>
                {sponsorCards.splice(1, 2)}
              </div>
              <div className={styles.cardsFirstRow}>{sponsorCards[1]}</div>
              <div className={styles.cardsFirstRow}>{sponsorCards[2]}</div>
              {sponsorCards.splice(3)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

export function SponsorCard({ props }) {
//   console.log(props);
  return (
    <div className={styles.card}>
      <div
        className={styles.imgContainer}
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className={styles.cardContent}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
