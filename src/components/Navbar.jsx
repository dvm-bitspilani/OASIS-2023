import React from "react";
import * as nav from "../components/navbar.module.css";
import Link from "next/link";

const Navbar = ({ handleTransition }) => {
  const handleNavClick = (page) => {
    handleTransition(page);
  };

  return (
    <>
      <div className={nav.navWrapper}>
        <a className={nav.navItem} onClick={() => handleNavClick("sponsors")}>
          SPONSORS
        </a>
        <a className={nav.navItem} onClick={() => handleNavClick("contact")}>
          CONTACT
        </a>
        <a className={nav.navItem} onClick={() => handleNavClick("events")}>
          EVENTS
        </a>
        <a className={nav.navItem} onClick={() => handleNavClick("about")}>
          ABOUT US
        </a>
        <a className={nav.navItem} onClick={() => handleNavClick("home")}>
          HOME
        </a>
      </div>
    </>
  );
};

export default Navbar;
