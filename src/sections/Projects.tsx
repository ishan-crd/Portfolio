import { motion, useScroll } from "motion/react"
import { useRef } from "react";
import JobPage from "../utility/JobPage";
import Denpage from "../utility/Denpage";
import Edwancepage from "../utility/Edwancepage";
import Tanglepage from "../utility/Tanglepage";
import Unmesapage from "../utility/Unmesapage";
import Cradlepage from "../utility/Cradlepage";
import Insydpage from "../utility/Insydpage";
import ProjectSection from "../utility/ProjectSection";
import ProjectCard from "../utility/ProjectCard";

type Company = {
  logo: string;
  job: string;
  text: string[];
  client: string;
  techStack: string[];
};

type ProjectData = {
  company: Company;
  PageComponent: React.FC;
  // Mobile card data
  projectName: string;
  image: string[];
  githubLink: string;
  deployLink: string;
  about: string;
  date: string;
};

const projects: ProjectData[] = [
  {
    company: {
      logo: "/images/denshow/logo.svg",
      job: "Full Stack Developer",
      text: [
        "Worked as a Full-Stack Developer on a production grade, on-chain Web3 streaming platform, owning the entire frontend and PWA architecture from scratch. Built a highly responsive and performant progressive web application optimized for desktop and mobile, delivering a seamless, immersive viewing experience across all devices.",
        "Led wallet integrations by connecting multiple Web3 wallets and implementing secure on-chain payment and tipping logic, enabling creators to receive real-time support directly from viewers. Designed and developed clipping functionality using Mux Player, allowing users to create and share stream highlights effortlessly.",
      ],
      client: "Den.Show",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Mux Player API", "Web3 Wallets", "Alchemy"],
    },
    PageComponent: Denpage,
    projectName: "Den.Show",
    image: [
      "/images/denshow/denshow.png",
      "/images/denshow/denshow2.png",
      "/images/denshow/denshow3.png",
      "/images/denshow/denshow4phone.png",
      "/images/denshow/denshow5phone.png",
    ],
    githubLink: "https://github.com/ishan-crd",
    deployLink: "#",
    about: "Worked on chain as a full stack developer, developed the entire frontend of product including the PWA from scratch. Built a cutting-edge Web3 streaming platform with seamless blockchain integration, delivering a responsive and performant progressive web application that provides users with an immersive viewing experience across all devices.",
    date: "October 2025 - December 2025",
  },
  {
    company: {
      logo: "/images/edwance/EdwanceLogo.svg",
      job: "Front End Developer - Intern",
      text: [
        "End-to-end design and development of Edwance.ai's landing page and dashboard, while driving the product's growth from concept to a fully scaled service.",
        "I spearheaded the creation of a modern, responsive interface that effectively communicates the platform's AI capabilities. The design focuses on clear user flows, intuitive navigation, and seamless user experience that helped establish a strong digital presence and improved user trust through thoughtful design and optimal performance.",
      ],
      client: "Edwance.ai",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    PageComponent: Edwancepage,
    projectName: "Edwance.ai",
    image: [
      "/images/edwance/edwance-landingnobg.png",
    ],
    githubLink: "https://github.com/ishan-crd",
    deployLink: "#",
    about: "End-to-end design and development of Edwance.ai's landing page and dashboard, while driving the product's growth from concept to a fully scaled service.",
    date: "July 2025 - October 2025",
  },
  {
    company: {
      logo: "/images/tangle/logotangle.png",
      job: "Full Stack App Developer",
      text: [
        "Led the end-to-end design and development of Tangle's MVP, transforming the idea from concept to a functional, user-ready product.",
        "I architected and developed a scalable cross-platform application for a funded startup, covering both frontend and backend architecture. The platform features modern design principles, robust functionality, and seamless performance across all devices, delivering a polished user experience from initial concept to production-ready product.",
      ],
      client: "Tangle",
      techStack: ["React Native", "TypeScript", "Nativewind"],
    },
    PageComponent: Tanglepage,
    projectName: "Tangle",
    image: [
      "/images/tangle/tangle-desnobg.png",
    ],
    githubLink: "https://github.com/ishan-crd",
    deployLink: "#",
    about: "Led the end-to-end design and development of Tangle's MVP, transforming the idea from concept to a functional, user-ready product.",
    date: "July 2025 - Ongoing",
  },
  {
    company: {
      logo: "/unmesa/unmesa-logo.svg",
      job: "Full Stack Developer & Designer",
      text: [
        "At Unmesa.ai, I designed and developed a comprehensive AI-powered platform that revolutionizes how businesses interact with artificial intelligence. I created an intuitive user interface that makes complex AI capabilities accessible to users of all technical backgrounds.",
        "The platform features a modern, responsive design built with cutting-edge technologies, focusing on seamless user experience and powerful functionality. I handled both the frontend development and backend integration, ensuring optimal performance and scalability.",
      ],
      client: "Unmesa.ai",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    PageComponent: Unmesapage,
    projectName: "Unmesa.ai",
    image: [
      "/images/unmesa/unmesa-laptop.png",
      "/images/unmesa/unmesa-post1.png",
      "/images/unmesa/unmesa-post2.png",
      "/images/unmesa/unmesa-post3.png",
    ],
    githubLink: "https://github.com/ishan-crd",
    deployLink: "#",
    about: "Designed and developed a comprehensive AI-powered platform that revolutionizes how businesses interact with artificial intelligence, featuring intuitive UI and powerful functionality.",
    date: "2024 - 2025",
  },
  {
    company: {
      logo: "/cradle-logo.png",
      job: "Full Stack Developer & Designer",
      text: [
        "For Cradle, I handled the entire digital presence of the brand, from designing the user experience in Figma to developing the full-stack e-commerce website. I crafted a bold, athletic aesthetic that matched the brand's identity, focusing on a smooth shopping experience and strong visual appeal.",
        "On the development side, I implemented product listings, cart and checkout functionality, and admin tools using modern web technologies. The result was a fully responsive, performance-optimized site that blended strong branding with seamless usability.",
      ],
      client: "Cradle",
      techStack: ["React.js", "CSS", "Javascript"],
    },
    PageComponent: Cradlepage,
    projectName: "Cradle Clothing",
    image: [
      "/images/cradle/cradle.png",
      "/images/cradle/cradle-laptop.png",
      "/images/cradle/cradle-phone.png",
    ],
    githubLink: "https://github.com/ishan-crd",
    deployLink: "#",
    about: "Completely responsive E-Commerce platform for modern gym apparel selling along with complete design and checkout functionality.",
    date: "2024 - 2025",
  },
  {
    company: {
      logo: "/insyd-logo.png",
      job: "Founder, Designer & App Developer",
      text: [
        "As the creator of Insyd, I led the product from concept to launch, handling end-to-end design, development, and strategy. I designed the UI/UX to deliver a sleek, nightlife-focused experience and built the app using React Native and Firebase for a smooth, cross-platform performance.",
        "I also handled branding, marketing strategy, and user feedback loops to guide iterations. Insyd was built to bridge the gap between partygoers and nightlife venues, creating a dynamic clubbing ecosystem.",
      ],
      client: "Insyd",
      techStack: ["React Native", "JavaScript"],
    },
    PageComponent: Insydpage,
    projectName: "Insyd",
    image: [
      "/images/insyd/insyd.png",
      "/images/insyd/insyd1.png",
      "/images/insyd/insyd2.png",
      "/images/insyd/insyd3.png",
    ],
    githubLink: "https://github.com/ishan-crd",
    deployLink: "#",
    about: "Revolutionary clubbing access app making nightlife more inclusive and accessible for everyone, with real-time venue information.",
    date: "March 2025 - June 2025",
  },
];

export default function ScrollStack() {
    const containRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containRef,
        offset: ["start start", "end end"]
    });

    return (
        <>
            <div
                className="w-full p-5 flex justify-between items-center flex-col border-y border-[#403b3b] gap-4 relative"
                id="projects" >
                <motion.div className="text-[#f05038] text-sm sm:text-lg font-inter-display w-full z-10 sticky left-2 top-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.3 }}>
                    <span className="w-full flex justify-start items-center gap-3 ">
                        //
                        <span className="font-inter-display-bold">
                            Projects
                        </span>
                    </span>
                </motion.div>
                <div className="w-full mt-50 mb-50" ref={containRef}>
                    {/* Mobile View - Project Cards */}
                    <div className="flex md:hidden flex-col gap-50 justify-center items-center w-full">
                        {projects.map((project, index) => {
                            const totalProjects = projects.length;
                            const rangeStart = index / totalProjects;
                            const rangeEnd = (index + 1) / totalProjects;
                            const range: [number, number] = [rangeStart, rangeEnd];
                            const target: Array<number> = [5];

                            return (
                                <ProjectCard
                                    key={index}
                                    image={project.image}
                                    projectName={project.projectName}
                                    githubLink={project.githubLink}
                                    deployLink={project.deployLink}
                                    about={project.about}
                                    date={project.date}
                                    containerProgressY={scrollYProgress}
                                    range={range}
                                    target={target}
                                />
                            );
                        })}
                    </div>

                    {/* Desktop View - Individual Project Pages */}
                    <div className="hidden md:flex flex-col gap-50 justify-center items-center w-full">
                        {projects.map((project, index) => {
                            const totalProjects = projects.length;
                            const rangeStart = index / totalProjects;
                            const rangeEnd = (index + 1) / totalProjects;
                            const range: [number, number] = [rangeStart, rangeEnd];
                            const PageComponent = project.PageComponent;

                            return (
                                <ProjectSection
                                    key={index}
                                    containerProgressY={scrollYProgress}
                                    range={range}
                                    index={index}
                                    totalProjects={totalProjects}
                                >
                                    <div className="w-full bg-[#121111]">
                                        <JobPage company={project.company} />
                                        <PageComponent />
                                    </div>
                                </ProjectSection>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
