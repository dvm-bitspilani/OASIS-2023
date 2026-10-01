"use client"

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import { MotionConfig } from "framer-motion"
import { useRouter } from "next/navigation"
import HamContextProvider from "./HamContextProvider"

const RegistrationContext = createContext(null)

export function useRegistrationClosed() {
  return useContext(RegistrationContext)
}

export default function Provider({ children }) {
  const router = useRouter()
  const dialog = useRef(null)
  const opener = useRef(null)
  const [registrationOpen, setRegistrationOpen] = useState(false)
  const openRegistration = useCallback(() => {
    opener.current = document.activeElement
    setRegistrationOpen(true)
  }, [])

  useEffect(() => {
    if (registrationOpen && dialog.current && !dialog.current.open) {
      dialog.current.showModal()
    }
  }, [registrationOpen])

  useEffect(() => {
    const warmed = new Set()
    const prefetch = (event) => {
      const anchor = event.target.closest?.("a[href]")
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return
      const url = new URL(anchor.href, location.href)
      if (url.origin !== location.origin || url.pathname === location.pathname || warmed.has(url.pathname)) return
      warmed.add(url.pathname)
      router.prefetch(url.pathname)
    }
    document.addEventListener("pointerover", prefetch, {passive: true})
    document.addEventListener("focusin", prefetch)
    document.addEventListener("touchstart", prefetch, {passive: true})
    return () => {
      document.removeEventListener("pointerover", prefetch)
      document.removeEventListener("focusin", prefetch)
      document.removeEventListener("touchstart", prefetch)
    }
  }, [router])

  return (
    <MotionConfig reducedMotion="user">
      <RegistrationContext.Provider value={openRegistration}>
        <HamContextProvider>{children}</HamContextProvider>
        <dialog ref={dialog} className="registration-closed" aria-labelledby="registration-closed-title" onClose={() => {
          setRegistrationOpen(false)
          opener.current?.focus?.()
        }} onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current.close()
        }}>
          <h2 id="registration-closed-title">Registration is closed for this edition</h2>
          <form method="dialog"><button autoFocus type="submit">Close</button></form>
        </dialog>
      </RegistrationContext.Provider>
    </MotionConfig>
  )
}
