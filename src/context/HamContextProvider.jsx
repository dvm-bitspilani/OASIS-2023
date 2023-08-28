"use client";

import React from "react";

export const HamContext = React.createContext();

export default function HamContextProvider({ children }) {
  const [isHamOpen, setIsHamOpen] = React.useState(false);

  return (
    <HamContext.Provider value={{ isHamOpen, setIsHamOpen }}>
      {children}
    </HamContext.Provider>
  );
}


