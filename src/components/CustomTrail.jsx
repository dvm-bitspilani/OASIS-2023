"use client"

import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail"
import { useWindowSize } from "rooks"
import { useReducedMotion } from "framer-motion"

export default function CustomTrail({ children }) {
  const { innerWidth } = useWindowSize()
  const reducedMotion = useReducedMotion()

  const trailProps = {
    lineDuration: 3,
    lineWidthStart: 10,
    strokeColor: "#5DB3F1",
    lag: 0,
  }
  return <>{innerWidth > 820 && !reducedMotion && <MouseTrail {...trailProps} />}</>
}
