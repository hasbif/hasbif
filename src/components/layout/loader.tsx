'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader({ isLoading }: { isLoading: boolean }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 10, 100))
    }, 100)
    return () => clearInterval(interval)
  }, [])
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-sky-600 flex items-center justify-center"
        >
          <motion.p
            animate={{
              scale: [1, 1.2],
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            className="text-2xl rounded-full"
          >
            gimme a sec..</motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-1 bg-yellow-300 absolute top-0 left-0"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}