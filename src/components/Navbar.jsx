import React from "react";
import * as nav from "../components/navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className={nav.navWrapper}>
        <Link href="/register" legacyBehavior>
          <a className={nav.navItem}>SPONSORS</a>
        </Link>
        <Link href="/register" legacyBehavior>
          <a className={nav.navItem}>CONTACT</a>
        </Link>
        <Link href="/register" legacyBehavior>
          <a className={nav.navItem}>EVENTS</a>
        </Link>
        <Link href="/register" legacyBehavior>
          <a className={nav.navItem}>ABOUT US</a>
        </Link>
        <Link href="/register" legacyBehavior>
          <a className={nav.navItem}>HOME</a>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
