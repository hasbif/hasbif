"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Navbar from '../content/navbar'
import { setupCustomScroll } from './scroll'
// import StickyButton from './StickyButton'
// import Sidebar from './Sidebar'

type LayoutProps = {
  children: React.ReactNode
  title?: string
}

const Layout = ({ children, title = 'Personal Website' }: LayoutProps) => {
  const [navbar, setNavbar] = useState(true)

  return (
    <>
      <AnimatePresence>
        {navbar && <Navbar onClose={() => setNavbar(false)} />}
      </AnimatePresence>

      <StickyButton 
        isOpen={navbar} 
        onClick={() => setNavbar(!navbar)} 
      />
      <ScrollIndicator />
      <main className="relative">
        {children}
      </main>
    </>
  )
}

export default Layout



type StickyButtonProps = {
  isOpen: boolean
  onClick: () => void
}

const StickyButton = ({ isOpen, onClick }: StickyButtonProps) => {

  return <button
  onClick={onClick}
  className="fixed top-2 right-2 lg:top-8 lg:right-8 z-50 w-12 h-12 flex items-center justify-center overflow-hidden rounded-lg hover:bg-yellow-300 text-yellow-300 hover:text-black
  transition-colors duration-200 "
>
  <AnimatePresence mode="popLayout" initial={false}>
    {!isOpen ? (
      <motion.span
        key="open"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 40, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute text-lg font-medium tracking-wider"
      >
        tl;dr
      </motion.span>
    ) : (
      <motion.span
        key="close"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 40, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute text-2xl font-light"
      >
        ×
      </motion.span>
    )}
  </AnimatePresence>
</button>
}


type ScrollState = 'falling' | 'flying' | 'stationary'

function ScrollIndicator() {
  const [scrollState, setScrollState] = useState<ScrollState>('stationary')

  useEffect(() => {
    const cleanup = setupCustomScroll((direction) => {
      setScrollState(
        direction === 'down' ? 'falling' : 
        direction === 'up' ? 'flying' : 'stationary'
      )
    })
    return cleanup
  }, [])

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-indigo-600 shadow-lg flex items-center justify-center text-white font-bold text-sm"
      animate={scrollState}
      variants={{
        falling: { y: [0, 10, 0], transition: { repeat: Infinity, duration: 1 } },
        flying: { y: [0, -10, 0], transition: { repeat: Infinity, duration: 1 } },
        stationary: { y: 0 }
      }}
    >
      {scrollState === 'falling' && '▼'}
      {scrollState === 'flying' && '▲'}
      {scrollState === 'stationary' && '●'}
    </motion.div>
  )
}