"use client"

import { useEffect, useState } from "react"

const initialSize = {innerWidth: null, innerHeight: null}

// The first browser render must match the statically exported server markup.
export function useWindowSize() {
  const [size, setSize] = useState(initialSize)
  useEffect(() => {
    const update = () => setSize({innerWidth: window.innerWidth, innerHeight: window.innerHeight})
    update()
    window.addEventListener("resize", update, {passive: true})
    return () => window.removeEventListener("resize", update)
  }, [])
  return size
}
