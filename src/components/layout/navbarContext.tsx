"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type NavbarContextType = {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined)

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((prev) => !prev)

  return (
    <NavbarContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </NavbarContext.Provider>
  )
}

export const useNavbar = () => {
  const context = useContext(NavbarContext)
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider")
  }
  return context
}
