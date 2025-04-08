"use client"
import Section from "@/components/content/section";
import { motion } from "framer-motion"

export default function Others() {
  return <Section id="about" bgImage="/bedroom-bg.jpg">
    {({ inView }) =>
      <div className="relative w-full h-full min-h-dvh flex flex-col lg:flex-col-reverse justify-center items-center p-4 lg:py-8 gap-4">
        <div className="w-[90%] lg:w-[80%] lg:grid lg:grid-cols-[auto_1fr] gap-8 relative">
          <img src='/8bit-me.png' height={96} width={96} className="rounded-2xl hidden lg:block" />
          <div className="flex flex-col gap-2 relative">
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0 }}
              className="text-base lg:text-lg flex flex-col gap-4 bg-yellow-100 opacity-90 p-4 lg:p-8 rounded-2xl">
              <p>If ur still curious, here's a little bit more about myself</p>
            </motion.div>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[90%] lg:w-[80%] grid lg:grid-cols-3 gap-y-4 gap-x-0 lg:gap-x-8 lg:gap-y-0 font-sour">
            <motion.div
              initial={{ y: 200, opacity: 0.5 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative text-base lg:text-lg bg-rose-300">
              <motion.img className="absolute top-[1%] right-[1%] h-14" src="/graduation-cap.png"
                animate={{ scale: [1, 1.2, 1], rotate: [-5, 360 - 5], y: [0, -100, 0] }}
                transition={{ repeat: Infinity, repeatType: 'loop', duration: 2, ease: "easeInOut" }}
              />
              <div className="relative overflow-hidden p-4">
                <img className="absolute left-0 bottom-0 opacity-10 h-48 -rotate-12" src="/uh-logo.png" />
                <div className="flex flex-col gap-4 ">
                  <h6 className="text-rose-600 font-semibold text-xl">Univeristy of Houston</h6>
                  <hr className="text-rose-600" />
                  <p>My backround is actually Mechanical Engineering. I know, not exactly related to web development, but hey, front-end engineers are engineers, right?</p>
                  <p className="text-right">— Whose house? <span className="whitespace-nowrap">COOUUUGS HOUSE!</span></p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 200, opacity: 0.5 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="relative text-base lg:text-lg p-4 bg-orange-200 overflow-hidden">
              <img className="absolute -right-8 -bottom-2 opacity-5 h-32" src="/hacktiv8.png" />
              <motion.img
                className="absolute top-1 right-0 h-12"
                animate={{
                  x: [0, -100, 0, 0, 0],
                  scale: [1, 1, 1, 1.1, 1]
                }}
                transition={{
                  duration: 2.5,
                  times: [0, 0.4, 0.8, 0.8, 0.95, 1],
                  repeat: Infinity,
                }}
                src="/mouse.png"
              />
              <div className="flex flex-col gap-4">
                <h6 className="text-orange-500 font-semibold text-xl">Hacktiv8</h6>
                <hr className="text-orange-500" />
                <p>Apparently 4 months of coding bootcamp is all it takes to dive headfirst into a lifetime of debugging, learning, and realizing how little you actually know.
                  <br />spoiler: still learning
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 200, opacity: 0.5 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="relative text-base lg:text-lg p-4 bg-yellow-200">
              <motion.img className="absolute top-[-2%] right-[-2%] lg:top-[-2%] lg:right-[-4%] h-16" src="/speakers.png"
                animate={{ scale: [1, 1.2, 1, 1.25, 1], rotate: [5, -1, 5] }}
                transition={{ repeat: Infinity, repeatType: 'loop', duration: 2, ease: "easeInOut" }}
              />
              <div className="flex flex-col gap-4">
                <h6 className="text-yellow-600 font-semibold text-xl">But i'm not a singer</h6>
                <hr className="text-yellow-600" />
                <p>{"Did you know I do music? Bit of a self-plug but feel free to check it out, and if you really want to help me out, play it on repeat so I get those royalty pennies ;)"}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    }
  </Section>
}
