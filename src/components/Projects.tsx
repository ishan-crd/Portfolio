import ProjectCard from "../utility/ProjectCard";
import { motion, useScroll } from "motion/react"
import { MotionValue } from "framer-motion"
import { useRef } from "react";


interface CardProps {
    sno: number,
    projectName: string,
    image: Array<string>,
    githubLink: string,
    deployLink: string,
    about: string,
    date: string,
    containerProgressY: MotionValue<number>,
    range: Array<number>,
    target: Array<number>
}

const Cards: Omit<CardProps, "containerProgressY" | "range" | "target">[] = [
  {
    sno: 1,
    projectName: "Vastora",
    image: [
      "/images/vastora1.png",
      "/images/vastora2.png",
      "/images/vastora3.png",
      "/images/vastora4.png",
      "/images/vastora5.png",
    ],
    githubLink: "https://github.com/himanshu1081/Vastora",
    date: "June 2025 - August 2025",
    deployLink: "https://vastora.vercel.app/",
    about:
      "Vastora is a YouTube-like web app where users can explore, watch, and share videos seamlessly...",
  },
  {
    sno: 2,
    projectName: "Portfolio",
    image: [
      "/images/portfolio.png",
      "/images/portfolio1.png",
      "/images/portfolio2.png",
      "/images/portfolio3.png",
      "/images/portfolio4.png",
    ],
    githubLink: "https://github.com/himanshu1081/portfolio",
    date: "November 2025",
    deployLink: "https://himanshu-portfolio.vercel.app",
    about:
      "My personal developer portfolio built using Typescript, React, TailwindCSS, and Framer Motion animations.",
  },
  {
    sno: 3,
    projectName: "Greenstone London",
    image: [
      "/images/greenstone.jpg",
      "/images/greenstone1.png",
      "/images/greenstone2.png",
    ],
    githubLink: "https://github.com/himanshu1081/GreenstoneLondon",
    date: "October 2025",
    deployLink: "https://greenstone-london-ju93.vercel.app",
    about:
      "Greenstone London — a clean, responsive landing page built using React and TailwindCSS...",
  },
];



export default function ScrollStack() {
    const containRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containRef,
        offset: ["start start", "end end"]
    })
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
                    <div className="flex flex-col gap-50 justify-center items-center w-full " ref={containRef}>
                        {Cards.map((c, index) => {
                            const target: Array<number> = [5];
                            return (
                                <ProjectCard
                                    key={index}
                                    image={c.image}
                                    projectName={c.projectName}
                                    githubLink={c.githubLink}
                                    deployLink={c.deployLink}
                                    about={c.about}
                                    date={c.date}
                                    containerProgressY={scrollYProgress}
                                    range={[.333 + (index * .333), .666 * (index + 1)]}
                                    target={target}
                                />
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
