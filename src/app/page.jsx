"use client";

import Image from "next/image";
import styles from "./page.module.css";

import React from "react";
import { HamContext } from "@/context/HamContextProvider";

export default function Home() {
  const { isHamOpen, setIsHamOpen } = React.useContext(HamContext);

  return (
    <main>
      <button onClick={() => setIsHamOpen((prev) => !prev)}>
        Change state
      </button>
      <br />
      {!isHamOpen && "hello"}
    </main>
  );
}
