'use client'

import { motion, useMotionValue, animate } from 'framer-motion'
import { useEffect } from 'react'
import { IoMdCloud } from 'react-icons/io'

const CloudIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 60" fill="white">
    <path d="M85,30c0,0,11,0,11,10s-8,10-8,10H15c0,0-11,0-11-10s8-10,8-10c0,0-3-12,7-12s10,12,10,12c0,0-2-15,10-15
    s12,15,12,15c0,0-1-10,8-10S85,30,85,30z"/>
  </svg>
)

export default function AnimatedClouds() {
  const clouds = [
    { id: 1, initialX: -200, x:10, y: 5, size: 'h-52 w-52', hoverRange: 10, delay: 0.5 },
    { id: 2, initialX: 200, x:80,y: 20, size: 'h-40 w-40', hoverRange: 15, delay: 0.8 },
    { id: 3, initialX: -200, x:20,y: 70, size: 'h-24 w-24', hoverRange: 8, delay: 1.1 },
    { id: 4, initialX: 200, x:75,y: 75, size: 'h-32 w-32', hoverRange: 12, delay: 1.2 }
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none w-dvw z-10">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          initial={{ x: cloud.initialX, opacity: 0 }}
          animate={{ 
            x: 0,
            opacity: 1,
          }}
          transition={{
            x: { 
              type: 'spring', 
              stiffness: 50,
              damping: 10,
              delay: cloud.delay,
            },
            opacity: { duration: 1, delay: cloud.delay }
          }}
          className={`absolute ${cloud.size}`}
          style={{ top: `${cloud.y}%`, left: `${cloud.x}%` }}
        >
          <motion.div
            animate={{
              x: [0, cloud.hoverRange, 0, -cloud.hoverRange, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 8 + Math.random() * 4,
                ease: "easeInOut",
              },
              delay: cloud.delay + 1 // Start hovering after arrival
            }}
          >
            <IoMdCloud className="w-full h-full opacity-90"/>
            {/* <CloudIcon className="w-full h-full opacity-90" /> */}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}