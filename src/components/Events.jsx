import { getEventDetails } from "@/helpers/archive"
import React, { useEffect, useState } from "react"
import events from "../components/events.module.css"
import Image from "next/image"
import Map from "../../public/static/images/EventsMap.webp"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useWindowSize } from "@/helpers/useWindowSize"
import { useReducedMotion } from "framer-motion"
import EventItem from "./EventItem"
import EventModal from "./EventModal"

gsap.registerPlugin(ScrollTrigger)

import cross from "../../public/static/images/cross.svg"

const Events = ({ active, showBackBtn, handleTransition }) => {
  const reducedMotion = useReducedMotion()
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [reduceBrightness, setReduceBrightness] = useState(false)
  const [eventDetails, setEventDetails] = useState([])
  const [crossButtonOpacity, setCrossButtonOpacity] = useState(1)
  useEffect(() => {
    setCrossButtonOpacity(selectedEvent ? 0 : 1)
  }, [selectedEvent])



  useEffect(() => {
    getEventDetails()
      .then((data) => {
        setEventDetails(
          data.map((item) => {
            return {
              name: item.name,
              desc: item.about,
              image: item.img_url,
              organiser: item.organiser,
              contact: item.contact,
            }
          })
        )
        // console.log(data);
      })
      .catch((error) => {
        console.log(error)
      })
    // console.log(eventDetails)
  }, [])

  const { innerWidth, innerHeight } = useWindowSize()

  useEffect(() => {
    if (!active || !innerWidth || innerWidth <= 820) return
    let follow
    const context = gsap.context(() => {
      gsap.set("#scrollDist", {width: "100%", height: "100%"})
      gsap.set("#container", {position: "fixed", width: 4096, height: 2305, transformOrigin: "0 0", left: innerWidth / -25, top: innerHeight / -50, opacity: 1})
      gsap.timeline({scrollTrigger: {
        trigger: "#scrollDist",
        scroller: document.querySelector("main"),
        start: "top top",
        end: "bottom bottom",
        scrub: reducedMotion ? true : 0.5,
      }}).to("#c", {motionPath: "#p", immediateRender: true, ease: "none"}, 0)
      const xTo = gsap.quickTo("#container", "x", {duration: reducedMotion ? 0 : 0.7, ease: "power2.out"})
      const yTo = gsap.quickTo("#container", "y", {duration: reducedMotion ? 0 : 0.7, ease: "power2.out"})
      follow = () => { xTo(-gsap.getProperty("#c", "x")); yTo(-gsap.getProperty("#c", "y")) }
      gsap.ticker.add(follow)
    })
    return () => { gsap.ticker.remove(follow); context.revert() }
  }, [active, innerWidth, innerHeight, reducedMotion])
  const handleBtnClick = (page) => {
    handleTransition(page)
  }
  const openModal = (event) => {
    setSelectedEvent(event)
    setReduceBrightness(true)
  }

  const closeModal = () => {
    setTimeout(() => {
      setSelectedEvent(null)
      setReduceBrightness(false)
    }, 300)
  }
  const containerClassName = reduceBrightness
    ? `${events.container} ${events.reduceBrightness}`
    : events.container
  return (
    <>
      {showBackBtn && (
        <button
          onClick={() => handleBtnClick("home")}
          className={events.cross}
          style={{ opacity: crossButtonOpacity }}
        >
          <Image src={cross} alt="Close" />
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
            style={{ position: "absolute", scale: 1.5 }}
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
            {eventDetails.map((evt) => {
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
              )
            })}
          </div>
        </div>
      </div>
      {selectedEvent && (
        <EventModal event={selectedEvent} closeModal={closeModal} />
      )}
    </>
  )
}

export default Events
