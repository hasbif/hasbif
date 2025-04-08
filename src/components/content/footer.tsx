"use client"
import Section from "@/components/content/section";
import { motion } from "framer-motion"
import { FaInstagram, FaLinkedinIn, FaSpotify } from "react-icons/fa6";
import { IoLogoGithub, IoLogoYoutube } from "react-icons/io5";
import { SiApplemusic } from "react-icons/si";

export default function Footer() {
  return <Section id="about" bgImage="/firework.jpg">
    {({ inView }) =>
      <div className="relative w-full h-full min-h-dvh flex flex-col justify-between">
        <div className="flex-1 h-full w-full flex flex-col justify-between items-center p-4 lg:py-8 gap-4">
          <div className="flex-1 h-full w-full flex flex-col justify-center items-center">
            Content stuff
          </div>
          <div className="w-[90%] lg:w-[80%] lg:grid lg:grid-cols-[auto_1fr] gap-8 relative items-end">
            <img src='/8bit-me.png' height={96} width={96} className="rounded-2xl hidden lg:block" />
            <div className="flex flex-col gap-2 relative">
              <motion.div
                initial={{ x: -60, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0 }}
                className="text-base lg:text-lg bg-yellow-100 opacity-90 p-4 lg:p-8 rounded-2xl">
                <img src='/8bit-me.png' className="rounded h-16 w-16 lg:hidden float-left mr-4" />
                <p>That’s about it. If you’re still curious or just wanna chat, feel free to reach out to me somehow. Thanks for stopping by and checking out my little corner of the internet.</p>
                <p className="text-right font-fancy text-2xl font-bold leading-6">Yours truly, Hasbi</p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white flex justify-between items-center w-full p-4 flex-col md:flex-row gap-4">
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
            <p className="text-xs">Shoutout to freepik.com for the arts</p>
          </div>
        </div>
      </div>
    }
  </Section>
}
