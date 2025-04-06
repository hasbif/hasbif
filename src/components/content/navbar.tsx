import dayjs from 'dayjs'
import { motion, useAnimation } from 'framer-motion'
import { FaInstagram, FaLaptopCode } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaSpotify } from "react-icons/fa6";
import { FaGlobeAsia } from 'react-icons/fa';
import { SiCss3, SiGraphql, SiHtml5, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTypescript } from 'react-icons/si';
import AnimatedClouds from './clouds';
import { useEffect } from 'react';



type NavbarProps = {
  onClose: () => void
}

const Navbar = ({ onClose }: NavbarProps) => {
  return (
    <motion.div
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ type: 'spring', damping: 20 }}
      className="fixed inset-0 z-40 bg-sky-600 shadow-xl overflow-y-auto flex items-center justify-center"
    >
      <div className='grid grid-cols-1 lg:grid-cols-3 p-4 lg:p-24 container gap-x-0 gap-y-2 lg:gap-16 z-30'>
        <div>
          <ShinyImage src='/64bit-me.png' alt='64bit-profile' />
        </div>
        <div className='flex flex-col justify-between col-span-2 gap-6'>
          <div className='flex flex-col gap-3'>
            <h3 className='text-2xl lg:text-4xl'>
              Muhammad Hasbi Fauzi
            </h3>
            <h1 className='text-3xl lg:text-6xl'>
              Front-End Developer
            </h1>
            <h5 className='text-xl lg:text-2xl flex gap-3 items-center'>
              <FaLaptopCode className='text-2xl lg:text-3xl' /> {dayjs().diff("2020-8-1", 'y')}+ years
            </h5>
            <h6 className='text-lg lg:text-xl flex gap-2.5 items-center'>
              <FaGlobeAsia className='text-xl lg:text-2xl' />
              Jakarta, Indonesia
            </h6>
            <div className='flex gap-2 flex-wrap mt-2'>
              <SkillPill>
                <SiNextdotjs /> Next.js
              </SkillPill>
              <SkillPill>
                <SiReact /> React
              </SkillPill>
              <SkillPill>
                <SiTypescript /> Typescript
              </SkillPill>
              <SkillPill>
                <SiJavascript />  Javascript
              </SkillPill>
              <SkillPill>
                <SiHtml5 /> HTML
              </SkillPill>
              <SkillPill>
                <SiCss3 /> CSS
              </SkillPill>
              {/* <SkillPill>
                <SiGraphql /> Graphql
              </SkillPill>
              <SkillPill>
                <SiNodedotjs /> Node.js
              </SkillPill> */}
            </div>
          </div>
          <div className='flex text-4xl gap-2'>
            <a className='hover:text-emerald-300 cursor-pointer' target='_blank' href='https://www.linkedin.com/in/muhammad-h-fauzi/'>
              <FaLinkedinIn />
            </a>
            <a className='hover:text-emerald-300 cursor-pointer' target='_blank' href='https://github.com/hasbif'>
              <IoLogoGithub />
            </a>
            <a className='hover:text-emerald-300 cursor-pointer' target='_blank' href='https://www.instagram.com/hasbae/'>
              <FaInstagram />
            </a>
            <a className='hover:text-emerald-300 cursor-pointer' target='_blank' href='https://open.spotify.com/artist/3F7wF0Xu2wZgsQicsQYxr2'>
              <FaSpotify />
            </a>
          </div>
        </div>
        <div className='col-span-full flex items-center justify-center'>
          <button className='rounded-full bg-yellow-300 p-3 px-5 text-2xl text-black cursor-pointer' onClick={onClose}>
            Get to know me more
          </button>
        </div>
      </div>
      <AnimatedClouds />
    </motion.div>
  )
}

function SkillPill({ children }: { children: React.ReactNode }) {
  return <div className='rounded-full p-2 px-3 flex items-center gap-1.5 bg-white text-sky-600 h-fit'>
    {children}
  </div>
}

function ShinyImage({ src, alt }: { src: string; alt: string }) {
  const controls = useAnimation()

  useEffect(() => {
    let isMounted = true
    let timeoutId: NodeJS.Timeout
    let animationFrameId: number

    const startAnimation = async () => {
      while (isMounted) {
        // Random delay between 3-8 seconds
        const delay = 4 + Math.random() * 10
        await new Promise(resolve => {
          timeoutId = setTimeout(resolve, delay * 1000)
        })

        if (!isMounted) break

        // Trigger the shine animation
        animationFrameId = requestAnimationFrame(() => {
          controls.start({
            x: ['-100%', '150%'],
            transition: {
              duration: 0.8,
              ease: 'easeInOut'
            },
            skewX: 30
          })
        })
      }
    }

    startAnimation()

    return () => {
      isMounted = false
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationFrameId)
      controls.stop() // Stop any ongoing animations
    }
  }, [controls])

  return (
    <div className="relative overflow-hidden border-8 rounded-4xl border-amber-600 inline-block max-w-[30dvh] lg:max-w-none">
      <img
        src={src}
        alt={alt}
        className="block w-full h-auto relative z-0"
      />

      <motion.div
        initial={{ x: '-100%', skewX: 0 }}
        animate={controls}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(120deg,
                        rgba(255, 255, 255, 0) 0%,
                        rgba(255, 255, 255, 0.4) 50%,
                        rgba(255, 255, 255, 0) 100%
                      )`,
        }}
      />
    </div>
  )
}

export default Navbar