"use client"
import Section from "@/components/content/section";
import { motion, useAnimation } from "framer-motion"
import { SiChakraui, SiCss3, SiDocker, SiGit, SiGraphql, SiHtml5, SiJavascript, SiNextdotjs, SiNodedotjs, SiOpenai, SiPostgresql, SiReact, SiTailwindcss, SiTypescript, SiVitest, SiVuedotjs } from 'react-icons/si';

export default function Skills() {
  return <Section id="about" bgImage="/treasure-bg.jpg"
  >
    {({ inView }) =>
      <div className="relative w-full min-h-dvh h-full flex flex-col justify-center items-center p-4 gap-2">
        <FloatingColumnIcons />
        <div className="lg:grid lg:grid-cols-[auto_1fr] w-[90%] lg:w-[80%] gap-8 items-end">
          <img src='/8bit-me.png' height={96} width={96} className="rounded-2xl hidden lg:block" />
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-xl bg-yellow-100 opacity-90 p-4 lg:p-8 rounded-2xl">
              <div className="min-h-16 lg:min-h-0">
              <img src='/8bit-me.png' className="rounded h-16 w-16 lg:hidden float-left mr-4" /> 
              <p><i>"Think of learning as your personal pot of gold."</i> - some dude, probably</p>
              </div>
          </motion.div>
        </div>
      </div>
    }
  </Section>
}


const icons = [
  { name: 'React', icon: <SiReact /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'HTML', icon: <SiHtml5 /> },
  { name: 'CSS', icon: <SiCss3 /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'Chakra', icon: <SiChakraui /> },
  { name: 'GraphQL', icon: <SiGraphql /> },
  { name: 'Vitest', icon: <SiVitest /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Postgres', icon: <SiPostgresql /> },
  { name: 'OpenAi', icon: <SiOpenai /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'Docker', icon: <SiDocker /> },
]

function FloatingColumnIcons() {
  return (
    <div className="flex justify-center gap-12 lg:gap-24 p-8">
      <IconColumn
        icons={icons.slice(0, 5)}
        direction="up"
        speed={15}
      />
      <IconColumn
        icons={icons.slice(5, 10)}
        direction="down"
        speed={20}
      />
      <IconColumn
        icons={icons.slice(10, 15)}
        direction="up"
        speed={15}
      />
    </div>
  )
}



function IconColumn({ icons, direction, speed }: {
  icons: { name: string, icon: React.ReactNode }[]
  direction: 'up' | 'down'
  speed: number
}) {
  return (
    <motion.div className="flex flex-col gap-10"
      initial={{ y: 0 }}
      animate={{
        y: direction === 'up' ? [-10, 10, -10] : [10, -10, 10]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {icons.map((icon, index) => (
        <InteractiveCoin key={index}
          className="w-16 h-16 lg:h-20 lg:w-20"
          back={<span className="text-xs lg:sm">{icon.name}</span>}
          front={<span className="text-xl lg:text-4xl">{icon.icon}</span>}
        />
      ))}
    </motion.div>
  )
}


function InteractiveCoin({ className = "w-32 h-32", back, front }: { className?: string, front?: React.ReactNode, back?: React.ReactNode }) {
  const controls = useAnimation()
  const handleHoverStart = async () => {
    await controls.start({
      rotateY: 180,
      transition: { duration: 0.6, ease: "easeOut" }
    })
  }
  const handleHoverEnd = async () => {
    await controls.start({
      rotateY: 360,
      transition: { duration: 0.6, ease: "easeIn" }
    })
    controls.set({ rotateY: 0 })
  }
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className={`relative rounded-full cursor-pointer ${className}`}
        animate={controls}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        style={{
          transformStyle: 'preserve-3d',
          background: 'linear-gradient(135deg, #ffcf40 0%, #ffdc73 50%, #ffbf00 100%)',
        }}
        onTapStart={handleHoverStart}
        onTapCancel={handleHoverEnd}
        onTap={handleHoverEnd}
      >

        <motion.div
          className="absolute inset-0 flex items-center justify-center rounded-full"
          style={{
            backfaceVisibility: 'hidden',
            rotateY: 0
          }}
        >
          {front}
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center rounded-full"
          style={{
            backfaceVisibility: 'hidden',
            rotateY: 180
          }}
        >
          {back}
        </motion.div>
      </motion.div>
    </div>
  )
}