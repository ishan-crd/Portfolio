import { motion, useInView } from "motion/react"
import type { MotionProps } from "framer-motion";


import "../index.css"
import List from "../utility/List";

import { useRef, useState, useEffect } from "react";

interface Framework {
    sno: number;
    name: string;
    logo: string;
}

const backendFrameworks: Framework[] = [
  {
    sno: 1,
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    sno: 2,
    name: "Express.js",
    logo: "/svg/express-svgrepo-com.svg",
  },
  {
    sno: 3,
    name: "MongoDB",
    logo: "/svg/mongodb-svgrepo-com.svg",
  },
  {
    sno: 4,
    name: "JWT",
    logo: "https://jwt.io/img/pic_logo.svg",
  },
];

const frontendFrameworks: Framework[] = [
  {
    sno: 1,
    name: "HTML",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    sno: 2,
    name: "CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    sno: 3,
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    sno: 4,
    name: "TypeScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    sno: 5,
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    sno: 6,
    name: "Next.js",
    logo: "/svg/next-js-svgrepo-com.svg",
  },
  {
    sno: 7,
    name: "Tailwind CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
];

const tools: Framework[] = [
  {
    sno: 1,
    name: "Git",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
  },
  {
    sno: 2,
    name: "GitHub",
    logo: "/svg/github.svg",
  },
  {
    sno: 3,
    name: "VS Code",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
  },
  {
    sno: 4,
    name: "Postman",
    logo: "/svg/postman-icon-svgrepo-com.svg",
  },
  {
    sno: 5,
    name: "Figma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    sno: 6,
    name: "npm",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
  },
];

const otherTools: Framework[] = [
  {
    sno: 1,
    name: "Vercel",
    logo: "/svg/vercel-fill-svgrepo-com.svg",
  },
  {
    sno: 2,
    name: "Render",
    logo: "/svg/render-seeklogo.svg",
  },
  {
    sno: 3,
    name: "Redux",
    logo: "/svg/redux-svgrepo-com.svg",
  },
  {
    sno: 4,
    name: "ChatGPT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  },
  {
    sno: 5,
    name: "Gemini",
    logo: "/svg/gemini-color.svg",
  },
  {
    sno: 6,
    name: "Framer Motion",
    logo: "/svg/Motion_Logo_0.svg",
  },
];





const Techstack: React.FC = () => {
    const [number, setNumber] = useState<"01" | "02" | "03" | "04">("01");

    const frontendRef = useRef<HTMLDivElement>(null);
    const backendRef = useRef<HTMLDivElement>(null);
    const toolsRef = useRef<HTMLDivElement>(null);
    const otherToolsRef = useRef<HTMLDivElement>(null);

    const frontendInView = useInView(frontendRef, { amount: .5 })
    const backendInView = useInView(backendRef, { amount: .5 })
    const toolsInView = useInView(toolsRef, { amount: .5 })
    const otherToolsInView = useInView(otherToolsRef, { amount: .2 })


    const options: MotionProps = {
        initial: { opacity: 0, y: "15%" },
        whileInView: { opacity: 1, y: "0%" },
        transition: { duration: 1, delay: .2 },
        viewport: { once: true }
    }
    useEffect(() => {
        if (frontendInView) setNumber("01");
        if (backendInView) setNumber("02");
        if (toolsInView) setNumber("03");
        if (otherToolsInView) setNumber("04");
    }, [frontendInView, backendInView, toolsInView, otherToolsInView]);

    const [isWide, setIsWide] = useState<boolean>(false);

    useEffect(() => {
        if (window.innerWidth > 768) setIsWide(true);
    }, []);

    return (
        <>
            <div className=" w-full h-full p-5 min-h-screen border-b border-[#403b3b] relative flex flex-col justify-center items-center gap-4"
                id="tech-stack">
                <motion.div className="text-[#f05038] text-sm sm:text-lg font-inter-display w-full sticky left-2 top-2 z-10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.3 }}>
                    <span className="w-full flex justify-start items-center gap-3 ">
                        //
                        <span className="font-inter-display-bold">
                            Tech Stack
                        </span>
                    </span>
                </motion.div>
                <div className="flex flex-row justify-between items-start h-5/6 w-full p-5 ">
                    {isWide && <div className="text-xl text-outline w-1/4 sticky top-50 left-0">
                        <motion.h1
                            key={number}
                            initial={{ rotateY: 0 }}
                            animate={{ rotateY: 360 }}
                            transition={{ duration: 1 }}
                            className="font-dm-mono text-[9rem] lg:text-[17rem] hidden md:block  xl:text-[25rem] ">
                            {number}
                        </motion.h1>
                    </div>}
                    <div className="flex flex-col justify-center items-center gap-10 lg:gap-36 relative w-full lg:w-3/4">
                        <div className="flex justify-center gap-5 lg:gap-10 flex-col font-inter-display w-full lg:w-3/4">
                            <motion.span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-inter-display-bold"
                                {...options}>
                                Frontend Development
                            </motion.span>
                            <motion.p className="w-6/6 text-[#a7a0a0] text-sm md:text-base"
                                initial={{ opacity: 0, y: "15%" }}
                                whileInView={{ opacity: 1, y: "0%" }}
                                transition={{ duration: 1, delay: .3 }}
                                viewport={{ once: true }}>
                                I craft responsive and dynamic UIs using React, Tailwind, and Framer Motion — blending speed, design, and smooth interactions into every pixel.
                            </motion.p>
                            <div ref={frontendRef}>
                                {frontendFrameworks.map((f) => (
                                    <List key={f.sno} sno={f.sno} name={f.name} logo={f.logo} />
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-10 flex-col font-inter-display w-full lg:w-3/4">
                            <motion.span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-inter-display-bold"
                                {...options}>
                                Backend Development
                            </motion.span>
                            <motion.p className="w-6/6 text-[#a7a0a0] text-sm md:text-base"
                                initial={{ opacity: 0, y: "15%" }}
                                whileInView={{ opacity: 1, y: "0%" }}
                                transition={{ duration: 1, delay: .3 }}
                                viewport={{ once: true }}>
                                I build reliable and scalable APIs using Node.js, Express, and MongoDB — focusing on clean architecture, security, and performance that keeps things running effortlessly.
                            </motion.p>
                            <div ref={backendRef}>
                                {backendFrameworks.map((f) => (
                                    <List key={f.sno} sno={f.sno} name={f.name} logo={f.logo} />
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-10 flex-col font-inter-display w-full lg:w-3/4">
                            <motion.span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-inter-display-bold"
                                {...options}>
                                Tools
                            </motion.span>
                            <motion.p className="w-6/6 text-[#a7a0a0] text-sm md:text-base"
                                initial={{ opacity: 0, y: "15%" }}
                                whileInView={{ opacity: 1, y: "0%" }}
                                transition={{ duration: 1, delay: .3 }}
                                viewport={{ once: true }}>
                                I use tools like Git, Postman, and Figma to collaborate, test, and design efficiently.
                            </motion.p>
                            <motion.div
                                ref={toolsRef}>
                                {tools.map((f) => (
                                    <List key={f.sno} sno={f.sno} name={f.name} logo={f.logo} />
                                ))}
                            </motion.div>
                        </div>
                        <div className="flex gap-5 lg:gap-10 flex-col font-inter-display w-full lg:w-3/4">
                            <motion.span
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-inter-display-bold"
                                {...options}
                            >
                                Other Tools & Frameworks
                            </motion.span>

                            <motion.p
                                className="w-full lg:w-5/6 text-[#a7a0a0] text-sm md:text-base"
                                initial={{ opacity: 0, y: "15%" }}
                                whileInView={{ opacity: 1, y: "0%" }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                I use modern tools and platforms like Vercel, Redux, and Gemini to deploy, optimize,
                                and scale digital experiences seamlessly.
                            </motion.p>

                            <motion.div ref={otherToolsRef}>
                                {otherTools.map((f) => (
                                    <List key={f.sno} sno={f.sno} name={f.name} logo={f.logo} />
                                ))}
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Techstack;