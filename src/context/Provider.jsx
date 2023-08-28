import React from "react";
import HamContextProvider from "./HamContextProvider";

export default function Provider({children}) {
  return (
    <HamContextProvider>
      {children}
    </HamContextProvider>
  );
}
