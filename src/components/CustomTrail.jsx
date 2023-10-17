"use client"

import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";

export default function CustomTrail({ children }) {
    const trailProps = {
        lineDuration: 15,
        lineWidthStart: 10,
        strokeColor: "#5DB3F1",
        lag: 0,
      };
    return (
        <MouseTrail {...trailProps}/>
    );
}