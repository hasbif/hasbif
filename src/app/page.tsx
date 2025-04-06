import AboutMe from "@/components/content/aboutme";
import Section from "@/components/content/section";
import Skills from "@/components/content/skills";
import Work from "@/components/content/work";

export default function Home() {

  return <>
    <AboutMe/>
    <Skills/>
    <Work/>

    <Section id="projects">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Project 1</h3>
          <p>An amazing project with great impact.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Project 2</h3>
          <p>Another fantastic project I worked on.</p>
        </div>
      </div>
    </Section>

    <Section id="contact">
      <form className="max-w-md">
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </Section>
  </>
  return (
    <div className="flex flex-col">
      <h6>Yours truly</h6>
      <h1>Hasbi</h1>
      <h2>Front End Engineer</h2>
      <h3>Web Developer</h3>
      <h6>globe logo: Jakarta, Indonesia</h6>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          Hasbi
          Front End Developer
          5+ years
          Linkedin/Github/Insta
          List of Skill
        </div>
        <p>
          {/* <p>In sidescroller instead of 5, make a countup timer for years of experience</p> */}
          Hiya, I’m a Front-End Developer who loves building clean, thoughtful, and user-friendly web experiences. I’ve been crafting websites and interfaces for over 5 years — always with a mix of creativity, modern technology, and way too many browser tabs open.
          <br />
          I like writing code that not only works well but feels good to use (writing about myself though, let’s just say I had a very helpful artifical friend for this part).
          When I’m not writing "useful" code, I’m usually busy overthinking pixel spacing, second-guessing font sizes, or convincing myself that no one will notice the different hex codes for gray.
          <br />
          Always up for learning new things, working with great people, and building cool stuff together.
        </p>
        <i>P.S. I promise I can switch gears and be all professional when needed, depending on the company culture. If you’re looking for a more formal summary of my experience, feel free to check out my resume.</i>

        <h5>Tech i use</h5>
        <p>icons of front end dev, in random the icon will shake , friend deepseek/openAi</p>

        <h5>Work Experience</h5>
        <ul>
          <li>
            Pensieve
            <div>
              Built dashboards for some pretty complex products, handling large datasets and transforming them into sleek, interactive graphs and charts — basically making the data look way cooler than it has any right to (and, no, I can’t tell you exactly what I did because, well, NDA).
              Worked with the latest front-end tech to create user experiences that, if you’re not careful, might make you feel like a hacker (even if you’re just trying to check a report).
              Collaborated with some amazing teammates to ensure everything was fast, efficient, and, you know, actually worked like it was supposed to. Pretty much the usual, minus the whole "top-secret" part.
            </div>
            <div>
              <code>Next.Js</code><code>React</code><code>Typescript</code><code>Javascript</code><code>Graphql</code><code>CSS</code><code>HTML</code>
            </div>
            <div>
              Linkedin:https://www.linkedin.com/company/pensieve-id/
              Website:https://pensieve.id/
            </div>
          </li>
          <li>
            Built intuitive and interactive dashboards using responsive web frameworks to support various AI solutions (which, let’s be honest, is basically just a fancy wrapper for OpenAI — but it sounds cooler, right?).
            Developed and launched a Customer Data Platform that gives deep insights into audience demographics, behaviors, and preferences (yep, we basically track...I mean analyze everything you do on the web — but all in the name of better experiences!).
            Worked closely with cross-functional teams to integrate front-end solutions and kept everything on track with versioning and smooth release deployments.
            <code>react</code> <code>typescript</code>
          </li>
          <li>
            expeirences 1
            <code>react</code> <code>typescript</code>
          </li>
          https://www.linkedin.com/company/feedloopai/
          https://feedloop.ai/
        </ul>

        <h5>Non Program experience</h5>
        <ul>
          <li>
            {/* <p>This was my firs time building website, how i started my web skill</p> */}
            <p>
              As a Technical Staff member, I helped design and develop the company website to boost our brand and user engagement. I also organized key data for engineering proposals and kicked off a project to modernize and centralize our file management system.
            </p>
            <code>Wordpress</code>
          </li>
        </ul>

        <h5>Education</h5>
        <p>

        </p>
        <p>
          Mechanical Enginering B.S. from Univeristy of Houston (2014-2024)
          Go Coogs!
          {/* I hold a Bachelor’s degree in Mechanical Engineering from the University of Houston */}
          (I know, not exactly related to web development, but hey, engineers are engineers, right?).
          {/* Why did I switch to web development? Well, it’s a bit of a long story. But if you’re really curious, maybe save it for the interview. ;) */}
        </p>
        <p>
          Hactiv8
          {/* I’m also a graduate of a coding bootcamp (you know, the kind where people say you don’t learn the "basics" but somehow end up building websites anyway). Sure, we focused a lot on frameworks and building projects, but hey, I still managed to pick up some solid coding fundamentals along the way! */}
        </p>

        <h6>Otherstuff</h6>
        <p>Did you know I do music?  When I’m not coding, I’m probably making tunes. Feel free to check it out, and if you really want to help me out, play it on repeat — those royalty pennies aren't going to collect themselves!</p>
      </main>
      <footer>
        <p>Thanks for checking out my website! Feel free to reach out if you want to chat, collaborate, or just vibe. Yours truly, Hasbi</p>
        <p>Copyright {new Date().getFullYear()}</p>
        <p>github: https://github.com/hasbif</p>
        <p>linkedin: https://www.linkedin.com/in/muhammad-h-fauzi/</p>
        <p>spotify</p>
      </footer>
    </div>
  );
}
