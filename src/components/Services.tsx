import { motion, useInView } from "motion/react"
import type { MotionProps } from "framer-motion";


import "../index.css"
import List from "./List";

import { useRef, useState, useEffect } from "react";


const backendFrameworks: Framework[] = [
    {
        sno: 1,
        name: "Node.js",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
        sno: 2,
        name: "Express.js",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    },
    {
        sno: 3,
        name: "MongoDB",
        logo: "src/assets/svg/mongodb-svgrepo-com.svg",
    },
    {
        sno: 4,
        name: "JWT",
        logo: "https://jwt.io/img/pic_logo.svg",
    },
];


interface Framework {
    sno: number;
    name: string;
    logo: string;
}

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
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
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
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    },
    {
        sno: 3,
        name: "VS Code",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    },
    {
        sno: 4,
        name: "Postman",
        logo: "src/assets/svg/postman-icon-svgrepo-com.svg",
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





const Services: React.FC = () => {
    const [number, setNumber] = useState<"01" | "02" | "03" | "04">("01");

    const frontendRef = useRef<HTMLDivElement>(null);
    const backendRef = useRef<HTMLDivElement>(null);
    const toolsRef = useRef<HTMLDivElement>(null);

    const frontendInView = useInView(frontendRef, { amount: .7 })
    const backendInView = useInView(backendRef, { amount: .9 })
    const toolsInView = useInView(toolsRef, { amount: .5 })

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
    }, [frontendInView, backendInView, toolsInView]);

    return (
        <>
            <div className=" w-full h-full p-5 min-h-screen border-b border-[#403b3b] relative flex flex-col justify-center items-center gap-4"
                id="tech-stack">
                <motion.div className="text-[#f05038] text-sm sm:text-lg font-inter-display w-full sticky left-2 top-2"
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
                    <div className="text-xl text-outline w-1/4 sticky top-0 left-0">
                        <motion.h1
                            key={number}
                            initial={{ rotateY: 0 }}
                            animate={{ rotateY: 360 }}
                            transition={{ duration: 1 }}
                            className="font-dm-mono text-[25rem] ">
                            {number}
                        </motion.h1>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-36 relative w-3/4">
                        <div className="flex gap-10 flex-col font-inter-display ">
                            <motion.span className="text-7xl font-inter-display-bold"
                                 {...options}>
                                Frontend Development
                            </motion.span>
                            <motion.p className="w-4/6 text-[#a7a0a0]"
                                initial={{ opacity: 0, y: "15%" }}
                                whileInView={{ opacity: 1, y: "0%" }}
                                transition={{ duration: 1, delay: .3 }}
                                viewport={{ once: true }}>
                                I craft stunning, high-performance frontends that turn imagination into immersive digital reality.
                            </motion.p>
                            <div ref={frontendRef}>
                                {frontendFrameworks.map((f) => (
                                    <List sno={f.sno} name={f.name} logo={f.logo} />
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-10 flex-col font-inter-display ">
                            <motion.span
                                {...options}
                                className="text-7xl font-inter-display-bold" >
                                Backend Development
                            </motion.span>
                            <motion.p className="w-4/6 text-[#a7a0a0]"
                                initial={{ opacity: 0, y: "15%" }}
                                whileInView={{ opacity: 1, y: "0%" }}
                                transition={{ duration: 1, delay: .3 }}
                                viewport={{ once: true }}>
                                I build powerful, secure backends that keep your apps fast, reliable, and always connected.
                            </motion.p>
                            <div ref={backendRef}>
                                {backendFrameworks.map((f) => (
                                    <List sno={f.sno} name={f.name} logo={f.logo} />
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-10 flex-col font-inter-display ">
                            <motion.span className="text-7xl font-inter-display-bold"
                               {...options}>
                                Tools
                            </motion.span>
                            <motion.p className="w-4/6 text-[#a7a0a0]"
                                initial={{ opacity: 0, y: "15%" }}
                                whileInView={{ opacity: 1, y: "0%" }}
                                transition={{ duration: 1, delay: .3 }}
                                viewport={{ once: true }}>
                                I build powerful, secure backends that keep your apps fast, reliable, and always connected.
                            </motion.p>
                            <motion.div
                                ref={toolsRef}>
                                {tools.map((f) => (
                                    <List sno={f.sno} name={f.name} logo={f.logo} />
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services;