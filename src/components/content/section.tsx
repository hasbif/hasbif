"use client"
import React, { ReactNode, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

type SectionProps = {
  id: string
  children: ((props: { inView: boolean, ref: React.RefObject<HTMLDivElement | null>}) => ReactNode) | ReactNode;
  className?: string
  bgImage?: string
  style?: React.CSSProperties
}

const Section = ({ id, children, className, bgImage, style }: SectionProps) => {
  const ref = useRef<HTMLDivElement>(null)
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
      className={`relative h-full min-h-dvh w-full overflow-hidden ${className} ${inView ? 'opacity-100' : 'opacity-80'} transition-opacity duration-500 text-black`}
      style={style}
    >
      {bgImage && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={bgImage}
            alt="Background-Image"
            fill
            quality={100}
            priority
            className="object-cover"
          />
        </div>
      )}
      {typeof children === 'function' ? children({ inView: inView, ref }) : children}
    </section>
  )
}

export default Section