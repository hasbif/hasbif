"use client"
import React, { ReactElement, ReactNode, RefObject, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type SectionProps = {
  id: string
  children: ((props: {inView: boolean, ref: React.RefObject<HTMLDivElement | null>}) => ReactNode) | ReactNode; 
  className?: string
  bgImage?: string
}

const Section = ({ id, children, className, bgImage }: SectionProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['-30%', '30%'])
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0.8])
  
  const [inViewRef, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  })

  // Combine refs
  useEffect(() => {
    if (ref.current) {
      inViewRef(ref.current)
    }
  }, [inViewRef])

  return (
    <section 
      id={id}
      ref={ref}
      className={`relative h-screen w-full overflow-hidden ${className} ${inView ? 'opacity-100' : 'opacity-80'} transition-opacity duration-500 text-black`}
    >
      {bgImage && (
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${bgImage})`,
            y,
            opacity
          }}
        />
      )}
      {typeof children === 'function' ? children({inView: inView, ref}) : children}

      
      {/* <div className="container mx-auto h-full flex flex-col justify-center relative z-10 px-8"> */}
        {/* {children} */}
        {/* <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          {title}
        </motion.h2>
        
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl"
        >
          {children}
        </motion.div> */}
      {/* </div> */}
    </section>
  )
}

export default Section