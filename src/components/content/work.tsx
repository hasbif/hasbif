"use client"
import Section from "@/components/content/section";
import { motion, useAnimation, useInView } from "framer-motion"
import { SiChakraui, SiCss3, SiDocker, SiGit, SiGraphql, SiHtml5, SiJavascript, SiNextdotjs, SiNodedotjs, SiOpenai, SiPostgresql, SiReact, SiTailwindcss, SiTypescript, SiVitest, SiVuedotjs, SiWordpress } from 'react-icons/si';
import { useEffect, useMemo, useRef, useState } from "react";
import { FaGlobe, FaLinkedinIn, FaUserSecret } from "react-icons/fa6";

export default function Work() {
  return <Section id="about" bgImage="/cyber-bg.jpg">
    {({ inView }) =>
      <div className="relative w-full h-full min-h-dvh flex flex-col justify-center items-center p-4 lg:py-8 gap-2">
        <DigitalRain />
        <div className="w-[90%] lg:w-[80%] relative z-30 flex flex-col gap-8">
          <motion.div
            // initial={{ x: -60, opacity: 0 }}
            // animate={inView ? { x: 0, opacity: 1 } : {}}
            // transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-xl flex flex-col border-2 border-fuchsia-600 bg-indigo-950 opacity-90 rounded text-fuchsia-400 font-mono">
            <div className="text-2xl border-b-2 border-fuchsia-600 p-2 flex justify-between items-center">
              Pensieve
              <div className="flex gap-4 items-center">
                <a className='hover:text-fuchsia-300 cursor-pointer' target='_blank' href='https://www.linkedin.com/company/pensieve-id/'>
                  <FaLinkedinIn />
                </a>
                <a className='hover:text-fuchsia-300 cursor-pointer' target='_blank' href='https://pensieve.id/'>
                  <FaGlobe />
                </a>
              </div>
            </div>
            <div className="text-sm lg:text-lg p-2">
              <div className="flex items-center mt-2 mb-4 gap-3">
                <FaUserSecret />
                Secret tech — shhh!
              </div>
              <TypingText inView={inView} text="I built dashboards for complex, data-heavy products — turning giant datasets into slick, interactive charts that might make you feel like a hacker (even if you’re just checking reports). Can’t say much more (NDA life), but trust me, it looked cool and worked fast." />
            </div>
          </motion.div>
          <motion.div
            className="text-base lg:text-xl flex flex-col border-2 border-fuchsia-600 bg-indigo-950 opacity-90 rounded text-fuchsia-400 font-mono">
            <div className="text-2xl border-b-2 border-fuchsia-600 p-2 flex justify-between items-center">
              Feedloop.io
              <div className="flex gap-4 items-center">
                <a className='hover:text-fuchsia-300 cursor-pointer' target='_blank' href='https://www.linkedin.com/company/feedloopai/'>
                  <FaLinkedinIn />
                </a>
                <a className='hover:text-fuchsia-300 cursor-pointer' target='_blank' href='https://feedloop.ai/'>
                  <FaGlobe />
                </a>
              </div>
            </div>
            <div className="text-sm lg:text-lg p-2">
              <div className="flex items-center mt-2 mb-4 gap-3">
                <SiNextdotjs />
                <SiChakraui />
                <SiGraphql />
              </div>
              <TypingText inView={inView} speed={30} pauseBetweenChunks={40} chunkSize={2} text="I developed applications for AI-powered tools (aka fancy OpenAI wrapper) and a Customer Data Platform webapp that definitely isn’t stalking your every click — just analyzing for “better user experiences.” Worked with awesome teams to make sure things shipped smooth and didn’t catch on fire." />
            </div>
          </motion.div>

          <motion.div
            className="text-base lg:text-xl flex flex-col border-2 border-fuchsia-600 bg-indigo-950 opacity-90 rounded text-fuchsia-400 font-mono">
            <div className="text-2xl border-b-2 border-fuchsia-600 p-2 flex justify-between items-center">
              PT. Aldaberta
              <div className="flex gap-4 items-center">
                <a className='hover:text-fuchsia-300 cursor-pointer' target='_blank' href='https://www.linkedin.com/company/pt-aldaberta-indonesia/'>
                  <FaLinkedinIn />
                </a>
                <a className='hover:text-fuchsia-300 cursor-pointer' target='_blank' href='https://aldaberta.com/'>
                  <FaGlobe />
                </a>
              </div>
            </div>
            <div className="text-sm lg:text-lg p-2">
              <div className="flex items-center mt-2 mb-4 gap-3">
                <SiWordpress />
              </div>
              <TypingText inView={inView} speed={50} pauseBetweenChunks={20} chunkSize={1} text="I made a wordpress website. It was my first ever trying out web developent so please be kind :)" />
            </div>
          </motion.div>
        </div>
      </div>
    }
  </Section>
}

function DigitalRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const characters = "100010101011010100100101001010101001010100011010101000101101010101010110"

    function draw() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(228, 56, 255, 0.95)";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );

        const opacity = 0.2 + (0.8 * (drops[i] * fontSize / canvas.height));
        ctx.globalAlpha = opacity;

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const intervalId = setInterval(draw, 33);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-70">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
}


function TypingText({
  text,
  inView,
  speed = 20,
  chunkSize = 3,
  pauseBetweenChunks = 50,
  restartOnReenter = true
}: {
  text: string
  inView: boolean
  speed?: number
  chunkSize?: number
  pauseBetweenChunks?: number
  restartOnReenter?: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const chunks = useMemo(() => {
    const words = text.split(' ')
    const result = []
    for (let i = 0; i < words.length; i += chunkSize) {
      result.push(words.slice(i, i + chunkSize).join(' '))
    }
    return result
  }, [text, chunkSize])

  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!inView) {
      if (restartOnReenter) {
        setDisplayedText('')
        setCurrentIndex(0)
      }
      setIsAnimating(false)
      return
    }
    setIsAnimating(true)
  }, [inView, restartOnReenter])

  // Typing animation effect
  useEffect(() => {
    if (!isAnimating || currentIndex >= chunks.length) return

    const timeout = setTimeout(() => {
      setDisplayedText(prev =>
        prev ? `${prev} ${chunks[currentIndex]}` : chunks[currentIndex]
      )
      setCurrentIndex(prev => prev + 1)
    }, currentIndex === 0 ? speed : speed + pauseBetweenChunks)

    return () => clearTimeout(timeout)
  }, [isAnimating, currentIndex, chunks, speed, pauseBetweenChunks])

  return (
    <div ref={containerRef} className="relative">
      <div
        aria-hidden
        className="invisible whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ __html: text }}
      />

      <div className="absolute inset-0 whitespace-pre-wrap">
        {displayedText}
        {isAnimating && currentIndex < chunks.length && (
          <span className="animate-pulse">|</span>
        )}
      </div>
    </div>
  )
}