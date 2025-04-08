"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../content/navbar'
import { setupCustomScroll } from './scroll'
import Loader from './loader'
import { useNavbar } from './navbarContext'
// @ts-ignore
import { SpriteAnimator } from 'react-sprite-animator'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { isOpen, toggle, close, open } = useNavbar()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000) // Adjust time as needed

    // For real apps, use this:
    // window.addEventListener('load', () => setIsLoading(false))

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader isLoading={isLoading} />
      <AnimatePresence>
        {isOpen && <Navbar onClose={close} />}
      </AnimatePresence>
      <div className={isLoading ? 'relative opacity-0' : 'relative opacity-100 transition-opacity duration-200'}>
        <StickyButton
          isOpen={isOpen}
          onClick={toggle}
        />
        <ScrollIndicator />
      </div>
      <main className="relative">
        <div className={isLoading ? 'opacity-0 relative' : 'opacity-100 transition-opacity duration-1000 relative'}>
          {children}
        </div>
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
    className="fixed top-2 right-2 lg:top-8 lg:right-8 z-50 w-12 h-12 flex items-center justify-center overflow-hidden rounded-lg bg-yellow-300 text-black
  transition-colors duration-200 cursor-pointer"
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
        >x
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
      className="fixed bottom-8 md:bottom-16 right-2 lg:right-8 z-50 flex items-center justify-center text-white font-bold text-sm"
      // animate={scrollState}
      // variants={{
      //   falling: { y: [0, 10, 0], transition: { repeat: Infinity, duration: 1 } },
      //   flying: { y: [0, -10, 0], transition: { repeat: Infinity, duration: 1 } },
      //   stationary: { y: 0 }
      // }}
    >
      <SpriteAnimator
        sprite="/sprite-walk.png"
        width={64}
        height={64}
        fps={12}
        shouldAnimate={scrollState !== 'stationary'}
      />
      {/* {scrollState === 'falling' && '▼'}
      {scrollState === 'flying' && '▲'}
      {scrollState === 'stationary' && '●'} */}
    </motion.div>
  )
}