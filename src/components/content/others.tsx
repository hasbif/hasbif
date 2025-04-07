"use client"
import Section from "@/components/content/section";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

export default function Others() {
  return <Section id="about" bgImage="/bedroom-bg.jpg">
    {({ inView }) =>
      <div className="relative w-full h-full min-h-dvh flex flex-col justify-center items-center p-2 lg:py-8 gap-2">
        <div className="lg:grid lg:grid-cols-[auto_1fr] w-[80%] gap-8 relative">
          <img src='/8bit-me.png' height={96} width={96} className="rounded-2xl hidden lg:block" />
          <div className="flex flex-col gap-2 relative">
            {/* <ScrollSlideList items={["asd","qwe","xc"]}/>
            {["asd","qwe","xc"].map((val,idx)=>{
              return <ScrollProgressItem key={idx} index={idx} children={val}/>
            })} */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0 }}
              className="text-base lg:text-lg flex flex-col gap-4 bg-yellow-100 opacity-90 p-4 lg:p-8 rounded-2xl">
              <p>If ur still curious, heres a little bit more about myself</p>
            </motion.div>
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base lg:text-lg flex flex-col gap-4 bg-yellow-100 opacity-90 p-4 lg:p-8 rounded-2xl">
              <p>My backround is actually Mechanical Engineering from the Univeristy of Houston (I know, not exactly related to web development, but hey, web engineers are engineers, right?).</p>
              <p className="text-right">— Whose house? COOUUUGS HOUSE!</p>
            </motion.div>
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base lg:text-lg flex flex-col gap-4 bg-yellow-100 opacity-90 p-4 lg:p-8 rounded-2xl">
              <p>
                I took a coding bootcamp (Hactiv8) — because apparently 4 months is all it takes to dive headfirst into a lifetime of debugging, learning, and realizing how little you actually know (spoiler: still learning).
              </p>
            </motion.div>
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base lg:text-lg flex flex-col gap-4 bg-yellow-100 opacity-90 p-4 lg:p-8 rounded-2xl">
              <p>
                {"Did you know I do music? Bit of a self-plug but feel free to check it out, and if you really want to help me out, play it on repeat for those royalty pennies ;)"}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    }
  </Section>
}
