import { motion } from "motion/react"


const Services: React.FC = () => {
    return (
        <>
            <div className="bg-[#181818] w-full h-full p-5 min-h-screen" id="tech-stack">
                <motion.div className="text-red-500 border-t border-red-600 m-5 text-sm sm:text-base font-bold font-geist"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    // Services
                </motion.div>
                <div className="flex items-center justify-center flex-col">
                    <motion.div className="font-tasa w-full md:text-6xl flex justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.3 }}>
                        <p className="p-5">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm a versatile <span className="text-red-500">full stack developer who
                                partners with teams to turn ideas into
                                real products.
                            </span> I focus on clean code,
                            sharp solutions, and fast execution.
                        </p>
                    </motion.div>
                    <div className="text-gray-300">
                        I turn ideas into polished, functional websites with clean, efficient code. My focus is on smooth, scalable solutions that make a real impact.
                    </div>
                </div>
            </div>
            <div className="bg-[#181818] w-full h-full p-5 min-h-screen" id="tech-stack">
                <motion.div className="text-red-500 border-t border-red-600 m-5 text-sm sm:text-base font-bold font-geist"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    // Services
                </motion.div>
                <div className="flex items-center justify-center flex-col">
                    <motion.div className="font-tasa w-full md:text-6xl flex justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.3 }}>
                        <p className="p-5">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm a versatile <span className="text-red-500">full stack developer who
                                partners with teams to turn ideas into
                                real products.
                            </span> I focus on clean code,
                            sharp solutions, and fast execution.
                        </p>
                    </motion.div>
                    <div className="text-gray-300">
                        I turn ideas into polished, functional websites with clean, efficient code. My focus is on smooth, scalable solutions that make a real impact.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;