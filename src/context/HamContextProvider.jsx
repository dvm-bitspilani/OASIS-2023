'use client'

import React from 'react'

export const HamContext = React.createContext()

export default function HamContextProvider({ children }) {
  const [isHamOpen, setIsHamOpen] = React.useState(false)
  const [page, setPage] = React.useState('')

  return (
    <HamContext.Provider value={{ isHamOpen, setIsHamOpen, page, setPage }}>
      {children}
    </HamContext.Provider>
  )
}
