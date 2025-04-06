"use client"
import Section from "@/components/content/section";
import { FaTree } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { motion } from "framer-motion"

export default function AboutMe() {
  return <Section id="about" className="bg-blue-400">
    {({ inView }) => <div>
      <motion.div
        initial={{ y: '-100%', opacity: 1 }}
        animate={inView ? { y: '20%', opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute text-yellow-300 left-[5%]">
        <MdSunny className="w-36 h-36" />
      </motion.div>
      <div className="absolute bottom-0 w-full h-48 bg-emerald-600">
        <FaTree className="h-48 w-48 text-green-950 absolute right-4 lg:right-28 -top-32" />
        <FaTree className="h-32 w-32 text-green-700 absolute right-8 lg:right-56 -top-12" />
      </div>
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
