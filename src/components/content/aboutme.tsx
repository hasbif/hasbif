"use client"
import Section from "@/components/content/section";
import { FaTree } from "react-icons/fa6";
import { motion } from "framer-motion"
import { useEffect, useRef } from "react";
import { useNavbar } from "../layout/navbarContext";

export default function AboutMe() {
  const { open } = useNavbar()
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartY = useRef(0)
  const threshold = 50

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    const handleWheel = (e: WheelEvent) => {
      if (container.scrollTop === 0 && e.deltaY < -threshold) {
        open()
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY
      const diff = touchStartY.current - touchEndY
      if (container.scrollTop === 0 && diff < -threshold) {
        open()
      }
    }

    container.addEventListener("wheel", handleWheel)
    container.addEventListener("touchstart", handleTouchStart)
    container.addEventListener("touchend", handleTouchEnd)

    return () => {
      container.removeEventListener("wheel", handleWheel)
      container.removeEventListener("touchstart", handleTouchStart)
      container.removeEventListener("touchend", handleTouchEnd)
    }
  }, [open, threshold, containerRef])

  return <Section id="about" bgImage="/main-bg.jpg">
    {({ inView }) => <div ref={containerRef}>
      <motion.div
        initial={{ y: '-100%', opacity: 1 }}
        animate={inView ? { y: '20%', opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute left-[5%]">
        <Sun />
      </motion.div>
      {/* <div className="absolute bottom-0 w-full h-48 bg-emerald-600">
        <FaTree className="h-48 w-48 text-green-950 absolute right-4 lg:right-28 -top-32" />
        <FaTree className="h-32 w-32 text-green-700 absolute right-8 lg:right-56 -top-12" />
      </div> */}
      <div className="relative w-full h-dvh flex flex-col justify-center items-center z-10">
        <div className="lg:grid lg:grid-cols-[auto_1fr] w-[80%] gap-8">
          <img src='/8bit-me.png' height={96} width={96} className="rounded-2xl hidden lg:block" />
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-xl flex flex-col gap-4 bg-yellow-100 opacity-90 p-4 lg:p-8 rounded-2xl">
            <h3>Hi, Hasbi here!</h3>
            <p>I’m a Front-End Developer who loves building clean, thoughtful, and user-friendly web experiences.</p>
            <p>
              I like to write code with a mix of creativity, modern technology, and way too many browser tabs open.
            </p><p>When I’m not writing "useful" code, I’m usually busy overthinking pixel spacing, second-guessing font sizes, or convincing myself that no one will notice the different hex codes for gray.</p>
            <p>Always up for learning new things, working with great people, and building cool stuff together.</p>
            <i className="text-xs lg:text-base">P.S. If you’re looking for a more formal summary of my experience, feel free to check out my <a>resume</a></i>
          </motion.div>
        </div>
      </div>
    </div>
    }
  </Section>
}


function Sun() {
  return (
    <div className="relative">
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-36 h-36 rounded-full bg-yellow-20000/50 blur-3xl"
      />
      <motion.div
        animate={{
          rotate: 360,
          boxShadow: [
            '0 0 60px 15px rgba(255, 200, 0, 0.7)',
            '0 0 80px 30px rgba(255, 150, 0, 0.6)',
            '0 0 60px 15px rgba(255, 200, 0, 0.7)'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="relative w-28 h-28 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-300 shadow-xl"
      >
      </motion.div>
    </div>
  )
}