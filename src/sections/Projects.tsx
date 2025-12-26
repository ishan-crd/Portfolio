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
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Web3", "PWA"],
    },
    PageComponent: Denpage,
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
                <div className="w-full mt-50 mb-50" >
                    <div className="flex flex-col gap-50 justify-center items-center w-full" ref={containRef}>
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
