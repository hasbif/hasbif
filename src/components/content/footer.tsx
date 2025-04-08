"use client"
import Section from "@/components/content/section";
import Fireworks, { FireworksHandlers } from "@fireworks-js/react";
import { motion, useAnimation } from "framer-motion"
import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { FaInstagram, FaLinkedinIn, FaSpotify } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { filePathParse } from "../utils";


export default function Footer() {
  const formControls = useAnimation()
  const mailControls = useAnimation()
  const textControls = useAnimation()
  const triangleControls = useAnimation()
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isAnimating) return
    setIsAnimating(true)
    textControls.set({
      opacity: 0,
      scale: 1.4
    })
    await mailControls.start({
      height: '100%',
      width: '100%'
    })
    await triangleControls.start({
      clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)'
    })
    await textControls.start({
      opacity: 1,
      scale: 1
    })
    await formControls.start({
      scale: 1.1,
      y: 20,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
        delay: 0.8
      }
    })
    await formControls.start({
      y: -400,
      scale: 0.5,
      opacity: 0.5,
      transition: {
        duration: 0.5,
      }
    })
    formControls.set({
      opacity: 0,
      y: 0,
      scale: 0.5
    })
    mailControls.set({
      height: 0,
      width: 0
    })
    textControls.set({
      opacity: 0
    })
    triangleControls.set({ clipPath: 'polygon(50% 0%, 0% 0%, 100% 0%)' })
    await formControls.start({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeIn",
        delay: 1
      }
    })
    setIsAnimating(false)
  }

  return <Section id="about" bgImage="/firework.jpg">
    {({ inView }) =>
      <div className="relative w-full h-full min-h-dvh flex flex-col justify-between">
        <FireworksBackground inView={inView} />
        <div className="flex-1 h-full w-full flex flex-col justify-between items-center p-4 lg:py-8 gap-4">
          <div className="flex-1 h-full w-full flex flex-col justify-center items-center">
            <motion.div className="w-[90%] lg:w-[60%] bg-blue-950 relative"
              animate={formControls}
            >
              <motion.div className="absolute top-0 left-0 w-full bg-amber-200 flex flex-col justify-center items-center rounded" animate={mailControls} initial={{
                height: 0,
                width: 0
              }}>
                <motion.div animate={textControls} className="z-10 p-4" initial={{ opacity: 0 }}>
                  <p className="bg-amber-50 p-4 uppercase text-center">
                    Launching message into the void
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ clipPath: 'polygon(50% 0%, 0% 0%, 100% 0%)' }}
                animate={triangleControls}
                className="absolute top-0 left-0 w-full h-[50%] bg-amber-400"
              />
              <form className="p-4 bg-blue-500 border-2 border-blue-600 rounded flex flex-col gap-4" onSubmit={handleClick}>
                <h6 className="text-center font-bold text-xl text-blue-50 mb-2">Write something</h6>
                <input type="email" placeholder="Place your email here (optional)" className="bg-blue-200 p-2 placeholder:text-gray-600 focus:outline-blue-600 focus:outline-2 rounded" />
                <textarea className="bg-blue-200 p-2 placeholder:text-gray-600 focus:outline-blue-600 focus:outline-2 rounded
                min-h-24 max-h-64 overflow-y-auto
                focus:outline-none focus:ring-2 focus:ring-blue-500
                " placeholder="Type something here... or just click send if you wanna see a cool animation" />
                <small className="text-blue-50">Note: This doesn't actually do anything {":)"}</small>
                <button className="self-end cursor-pointer rounded-2xl bg-blue-200 hover:bg-blue-300 transition-colors p-2 px-4 font-semibold">Send</button>
              </form>
            </motion.div>
          </div>
          <div className="w-[90%] lg:w-[80%] lg:grid lg:grid-cols-[auto_1fr] gap-8 relative items-end">
            <Image alt="avatar" src={filePathParse('/8bit-me.png')} height={96} width={96} className="rounded-2xl hidden lg:block" />
            <div className="flex flex-col gap-2 relative">
              <motion.div
                initial={{ x: -60, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0 }}
                className="text-base lg:text-lg bg-yellow-100 opacity-90 p-4 lg:p-8 rounded-2xl">
                <Image alt="avatar" src={filePathParse('/8bit-me.png')} height={64} width={64} className="rounded lg:hidden float-left mr-4" />
                <p>That’s about it. If you’re still curious or just wanna chat, feel free to reach out to me somehow. Thanks for stopping by and checking out my little corner of the internet.</p>
                <p className="text-right font-fancy text-2xl font-bold leading-6">Yours truly, Hasbi</p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white flex justify-between items-center w-full p-4 flex-col md:flex-row gap-4 relative z-10">
          <div className="flex items-center gap-4 text-2xl">
            <a className='hover:text-yellow-300 cursor-pointer' target='_blank' href='https://www.linkedin.com/in/muhammad-h-fauzi/'>
              <FaLinkedinIn />
            </a>
            <a className='hover:text-yellow-300 cursor-pointer' target='_blank' href='https://github.com/hasbif'>
              <IoLogoGithub />
            </a>
            <a className='hover:text-yellow-300 cursor-pointer' target='_blank' href='https://www.instagram.com/hasbae/'>
              <FaInstagram />
            </a>
            <a className='hover:text-yellow-300 cursor-pointer' target='_blank' href='https://open.spotify.com/artist/3F7wF0Xu2wZgsQicsQYxr2'>
              <FaSpotify />
            </a>
          </div>
          <div className="text-sm text-center md:text-right">
            <p>Copyright © <code className="border border-stone-200/70 bg-stone-100/30 px-1 text-xs">new Date().getFullYear()</code></p>
            <p className="text-xs">Shoutout to freepik.com & Liberated Pixel Cup for the arts</p>
          </div>
        </div>
      </div>
    }
  </Section>
}


function FireworksBackground({ inView }: { inView: boolean }) {
  const fireworksRef = useRef<FireworksHandlers>(null);
  useEffect(() => {
    if (!fireworksRef.current) return;
    if (inView) {
      console.log("srtart")
      fireworksRef.current.start();
    } else {
      console.log("stopss")
      fireworksRef.current.stop();
    }
  }, [inView,])

  return <Fireworks
    ref={fireworksRef}
    className="absolute top-0 left-0 w-full h-full"
    options={{
      hue: {
        max: 255,
        min: 120,
      },
      acceleration: 1,
      brightness: {
        max: 70,
        min: 30
      },
      // decay
      delay: {
        max: 60,
        min: 30
      },
      autoresize: true,
      explosion: 6,
      flickering: 0,
      intensity: 15,
      particles: 80,
      traceLength: 3,
      traceSpeed: 10,
      rocketsPoint: {
        max: 55,
        min: 45
      },
      mouse: {
        click: true,
        max: 5
      }
    }}
  />
}