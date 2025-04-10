"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaLinkedin } from 'react-icons/fa6';
import { IoArrowBack, IoLocationSharp, IoMail, IoMoon, IoSunny } from 'react-icons/io5';
import Link from 'next/link';

type WorkExperience = {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

type Education = {
  title: string;
  subtitle?: string;
  place: string;
  duration: string;
}

const jobs: WorkExperience[] = [
  {
    company: "Pensieve Technology",
    title: "Front End Engineer",
    duration: "2024 - Present",
    location: "Jakarta, Indonesia",
    description: [
      "Developed dashboards for complex products using the latest front-end technologies",
      "Engineered and developed advanced technologies aimed at improving security",
      "Worked closely with teams members to guarantee smooth and fast solutions"
    ]
  },
  {
    company: "Feedloop.ai",
    title: "Software Engineer",
    duration: "2020 - 2024",
    location: "Jakarta, Indonesia",
    description: [
      "Developed intuitive and interactive dashboards, leveraging responsive web application frameworks to support diverse AI solutions",
      "Engineered and implemented a robust Customer Data Platform, facilitating comprehensive insights into audience demographics, behaviors, and preferences",
      "Collaborated closely with cross-functional teams to ensure seamless integration of front-end solutions",
      "Maintained project versioning and release deployment",
    ]
  },
  {
    company: "PT. Aldaberta Indonesia",
    title: "Technical Staff",
    duration: "2018 - 2019",
    location: "Jakarta, Indonesia",
    description: [
      "Orchestrated the design and development of the company website, optimizing the corporate profile for enhanced brand representation and user engagement",
      "Collected and organized essential data to support engineering tender proposals, ensuring accuracy and completeness for successful project bids",
      "Initiated a strategic project aimed at modernizing and centralizing the company's file management system"
    ]
  }
]

const education: Education[] = [
  {
    title: "Full Stack Javascript",
    duration: "2020",
    place: "Hactiv8, Jakarta, Indonesia"
  },
  {
    title: "Bachelor of Mechanical Engineering",
    subtitle: "Minor in Mathematics",
    duration: "2014-2018",
    place: "Univeristy of Houston, Houston, TX"
  }
]

export default function Resume() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on initial load
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* <Head>
        <title>My Resume</title>
        <meta name="description" content="Professional Resume" />
      </Head> */}

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <Link href='/'>
            <button className={`cursor-pointer h-8 w-8 flex items-center justify-center rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
              <IoArrowBack />
            </button>
          </Link>

          <button
            onClick={()=>setDarkMode(!darkMode)}
            className={`cursor-pointer relative flex items-center justify-between w-16 h-8 rounded-full p-1 ${darkMode ? "bg-gray-700" : "bg-gray-200"} transition-colors duration-300`}
            aria-label={`Toggle theme mode`}
          >
            <span className="sr-only">Toggle dark/light mode</span>
            <span
              className={`absolute flex items-center justify-center w-6 h-6 rounded-full transform transition-transform duration-300 ${!darkMode ? 'translate-x-0 bg-white' : 'translate-x-8 bg-gray-900'
                }`}
            >
              {!darkMode ? (
                <IoSunny className="w-4 h-4 text-yellow-500" />
              ) : (
                <IoMoon className="w-4 h-4 text-teal-300" />
              )}
            </span>
            <IoSunny className={`mx-1 w-4 h-4 ${!darkMode ? 'text-yellow-500' : 'text-gray-400'}`} />
            <IoMoon className={`mx-1 w-4 h-4 ${darkMode ? 'text-teal-300' : 'text-gray-400'}`} />
          </button>




        </div>

        {/* Resume Content */}
        <div className={`rounded-lg shadow-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          {/* Header */}
          <div className={`p-6 ${darkMode ? 'bg-gray-700' : 'bg-teal-600'} text-white`}>
            <h1 className="text-3xl font-bold">Muhammad Hasbi Fauzi</h1>
            <p className="text-lg opacity-90">Front End Engineer</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="flex items-center gap-1">
                <IoMail />
                <a href='mailto:muhammad.h.fauzi@gmail.com' className='cursor-pointer'>muhammad.h.fauzi@gmail.com</a>
              </div>
              <div className="flex items-center gap-1">
                <FaLinkedin />
                <a href='https://www.linkedin.com/in/muhammad-h-fauzi' target='_blank'>linkedin.com/in/muhammad-h-fauzi</a>
              </div>
              <div className="flex items-center gap-1">
                <IoLocationSharp />
                Jakarta, Indonesia
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6">
            {/* Summary */}
            <section className="mb-8">
              <h2 className={`text-xl font-semibold mb-4 pb-2 border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>Professional Summary</h2>
              <p className="text-justify">
                Skilled Front-End Web Developer with 4+ years of practical experience in creating engaging user experiences through new and innovative technologies. Possessing a strong foundation in front-end development while equipped with a solid comprehensive understanding of full-stack principles. Seeking opportunities that combine my technical expertise and creative vision to craft effective and impactful user-centric solutions.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h2 className={`text-xl font-semibold mb-4 pb-2 border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>Work Experience</h2>
              {jobs.map((job, idx) => <div className="mb-6" key={idx}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium">{job.title}</h3>
                  <span className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-teal-300' : 'bg-teal-100 text-teal-800'}`}>{job.duration}</span>
                </div>
                <h4 className={`mb-2 ${darkMode ? 'text-teal-300' : 'text-teal-600'}`}>{job.title}, {job.location}</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {job.description.map((desc, jdx) => <li key={job.company + jdx}>
                    {desc}
                  </li>)}
                </ul>
              </div>)}
            </section>

            {/* Education */}
            <section className="mb-8">
              {education.map((ed, idx) => <div key={idx}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-medium">{ed.title}</h3>
                    {!!ed.subtitle && <h5 className='text-sm'>{ed.subtitle}</h5>}
                  </div>

                  <span className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-teal-300' : 'bg-teal-100 text-teal-800'}`}>{ed.duration}</span>
                </div>
                <h4 className={`mb-4 ${darkMode ? 'text-teal-300' : 'text-teal-600'}`}>{ed.place}</h4>
              </div>)}

            </section>

            {/* Skills */}
            <section className="mb-8">
              <h2 className={`text-xl font-semibold mb-4 pb-2 border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>Technical Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'NodeJs', 'GraphQL'].map(skill => (
                  <span key={skill} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Projects */}
            {/* <section>
              <h2 className={`text-xl font-semibold mb-4 pb-2 border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>Notable Projects</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">E-commerce Platform Optimization</h3>
                  <p className="text-sm opacity-80 mb-2">Led performance optimization efforts for a high-traffic e-commerce site</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Reduced bundle size by 45% through code splitting and lazy loading</li>
                    <li>Implemented server-side rendering which improved SEO rankings</li>
                    <li>Introduced caching strategies that reduced API calls by 60%</li>
                  </ul>
                </div>

              </div>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
}