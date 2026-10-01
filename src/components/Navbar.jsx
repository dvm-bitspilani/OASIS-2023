import React from "react"
import nav from "../components/navbar.module.css"
import Link from "next/link"

const Navbar = ({ handleTransition, preloadSection }) => {
  const handleNavClick = (page) => {
    handleTransition(page)
  }

  return (
    <>
      <div className={nav.navWrapper}>
        <a
          className={`${nav.navItem} customHover`}
          href="#contact" onMouseEnter={() => preloadSection("contact") } onFocus={() => preloadSection("contact") }
          onClick={(event) => { event.preventDefault(); handleNavClick("contact") }}
        >
          CONTACT
        </a>
        <a
          className={`${nav.navItem} customHover`}
          href="#events" onMouseEnter={() => preloadSection("events") } onFocus={() => preloadSection("events") }
          onClick={(event) => { event.preventDefault(); handleNavClick("events") }}
        >
          EVENTS
        </a>
        <a
          className={`${nav.navItem} customHover`}
          href="#about" onMouseEnter={() => preloadSection("about") } onFocus={() => preloadSection("about") }
          onClick={(event) => { event.preventDefault(); handleNavClick("about") }}
        >
          ABOUT US
        </a>
        <a
          className={`${nav.navItem} customHover`}
          href="#home" onMouseEnter={() => preloadSection("home") } onFocus={() => preloadSection("home") }
          onClick={(event) => { event.preventDefault(); handleNavClick("home") }}
        >
          HOME
        </a>
      </div>
    </>
  )
}

export default Navbar
