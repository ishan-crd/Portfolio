import Profile from "./components/Profile";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
// import DesignProjects from "./components/DesignProjects";
import Insydpage from "./components/Insydpage";
import JobPage from "./components/JobPage";
import GennextPage from "./components/GennextPage";
import Cradlepage from "./components/Cradlepage";
import Resandcafe from "./components/Resandcafe";
import Unmesapage from "./components/Unmesapage";
import Denpage from "./components/Denpage";

const companyDetails = [
  {
    logo: "/insyd-logo.png",
    job: "Founder, Designer & App Developer",
    text: [
      "As the creator of Insyd, I led the product from concept to launch,handling end-to-end design, development, and strategy. I designed the UI/UX to deliver a sleek, nightlife-focused experience and built the app using React Native and Firebase for a smooth,cross-platform performance.",
      "I also handled branding, marketing strategy, and user feedback loops to guide iterations. Insyd was built to bridge the gap between partygoers and nightlife venues, creating a dynamic clubbing ecosystem.",
    ],
    client: "Insyd",
    techStack: ["React Native", "JavaScript"],
  },
  {
    logo: "/gennext-logo.png",
    job: "Designer & Front-End App Developer",
    text: [
      "At Gennext IT, I was responsible for designing the frontend of the company’s official website. I created a modern, responsive focusing on clear user flows and intuitive navigation to enhance user engagement.",
      "I led the UI/UX design process from wireframes to final implementation, ensuring the brand’s professionalism and services were effectively communicated. My work helped establish a strong digital presence for Gennext IT and improved user trust through thoughtful design and seamless performance.",
    ],
    client: "Gennext IT",
    techStack: ["React.js", "JavaScript", "Framer"],
  },
  {
    logo: "/cradle-logo.png",
    job: "Full Stack Developer & Designer",
    text: [
      "For Cradle, I handled the entire digital presence of the brand, from designing the user experience in Figma to developing the full-stack e-commerce website. I crafted a bold, athletic aesthetic that matched the brand's identity, focusing on a smooth shopping experience and strong visual appeal. ",
      "On the development side, I implemented product listings, cart and checkout functionality, and admin tools using modern web technologies. The result was a fully responsive, performance-optimized site that blended strong branding with seamless usability.",
    ],
    client: "Cradle",
    techStack: ["React.js", "CSS", "Javascript"],
  },
  {
    logo: "/res&cafe-logo.png",
    job: "Designing",
    text: [
      "At Res&Cafe, I led the UI/UX design for a digital restaurant menu and ordering app, focused on streamlining the dining experience. Using Figma, I crafted an intuitive, visually appealing interface that allowed customers to easily browse the menu, customize orders, and place them seamlessly. ",
      "The design prioritized ease of use, responsiveness across devices, and a smooth user journey from selection to checkout, tailored for both dine-in and takeaway experiences.",
    ],
    client: "Res&Cafe",
    techStack: ["UI/UX Designer"],
  },
  {
    logo: "/unmesa/unmesa-logo.svg",
    job: "Full Stack Developer & Designer",
    text: [
      "At Unmesa.ai, I designed and developed a comprehensive AI-powered platform that revolutionizes how businesses interact with artificial intelligence. I created an intuitive user interface that makes complex AI capabilities accessible to users of all technical backgrounds.",
      "The platform features a modern, responsive design built with cutting-edge technologies, focusing on seamless user experience and powerful functionality. I handled both the frontend development and backend integration, ensuring optimal performance and scalability.",
    ],
    client: "Unmesa.ai",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    logo: "/den/logo.svg",
    job: "Full Stack Developer",
    text: [
      "For Den, I designed and developed a modern streaming platform with a retro-inspired aesthetic that connects creators and viewers. I crafted a light themed interface that emphasizes content discovery, live streaming, and interactive features like clips, leaderboards, and fan passes.",
      "The platform features a lowkey retro vibe with a sleek navigation system, real-time notifications, and a seamless viewing experience. I implemented responsive design across desktop and mobile devices, ensuring the platform works beautifully on all screen sizes while maintaining its distinctive visual identity.",
    ],
    client: "Den",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-mono">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white font-semibold text-lg font-mono">
              Ishan Gupta
            </div>
            <a
              href="/IshanGupta-Resume.pdf"
              download
              className="md:hidden lg:hidden ml-10 relative flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors border border-zinc-700 px-3 py-1.5 rounded-md hover:bg-zinc-800 font-mono"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
            </a>

            <div className="hidden md:flex items-center space-x-8 text-sm font-mono">
              <a
                href="#about"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#tech"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Tech Stack
              </a>
              <a
                href="#experience"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <section id="profile">
          <Profile />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="tech">
          <TechStack />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="cradle-project" className="hidden md:block lg:block">
          <JobPage company={companyDetails[2]} />
          <Cradlepage />
        </section>

        <section id="insyd-project" className="hidden md:block lg:block">
          <JobPage company={companyDetails[0]} />
          <Insydpage />
        </section>

        <section id="gennext-project" className="hidden md:block lg:block">
          <JobPage company={companyDetails[1]} />
          <GennextPage />
        </section>

        <section id="resandcafe-project" className="hidden md:block lg:block">
          <JobPage company={companyDetails[3]} />
          <Resandcafe />
        </section>

        <section id="unmesa-project" className="hidden md:block lg:block">
          <JobPage company={companyDetails[4]} />
          <Unmesapage />
        </section>

        <section id="den-project" className="hidden md:block lg:block">
          <JobPage company={companyDetails[5]} />
          <Denpage />
        </section>

        <section id="dev projects">
          <Projects />
        </section>

        {/* <section id="des projects">
          <DesignProjects />
        </section> */}

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
