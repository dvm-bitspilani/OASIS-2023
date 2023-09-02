import React from "react";
import "./navbar.css";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <div className="navLogo">
        <Image
          src="/static/images/navLogo.png"
          width={80}
          height={80}
          className="navLogoImg"
          alt="Text Oasis Logo"
        />
      </div>
    </>
  );
};

export default Navbar;
