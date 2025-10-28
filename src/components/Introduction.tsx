import { motion } from "motion/react"


const Introduction: React.FC = () => {
    return (
        <>
            <div className="bg-[#181818] w-full h-full p-5 min-h-screen flex justify-between items-center flex-col" id="introduction">
                <motion.div className="text-red-500 border-t border-red-600 m-5 p-2 text-sm sm:text-base font-bold font-geist w-full"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.3 }}>
                    <span className="w-full">
                        // Intro
                    </span>
                </motion.div>
                <div className="flex items-center justify-center flex-col gap-2">
                    <motion.div className="font-tasa w-full text-2xl md:text-4xl lg:text-5xl xl:text-6xl flex justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: .5 }}
                        viewport={{ once: true, amount: 0.3 }}>
                        <p className="w-11/12 md:w-3/4">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm a versatile <span className="text-red-500">full stack developer who loves turning ideas into real projects.
                            </span> I focus on clean code, sharp logic, and fast, practical execution.
                        </p>
                    </motion.div>
                </div>
                <div className="text-gray-300 w-full flex justify-center items-end flex-col">
                    <motion.span className="w-3/4 md:w-5/12 text-xs sm:text-sm lg:text-base font-lexend "
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        viewport={{ once: true, amount: 0.3 }}>
                        I turn ideas into polished, functional websites with clean, efficient code. My focus is on smooth, scalable solutions that make a real impact.
                    </motion.span>
                    <motion.div className="flex justify-end items-end w-full font-lexend text-sm "
                        initial={{ opacity: 0, y: "10%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        transition={{ duration: 1, delay: 1.5 }}>
                        <span className="px-5 py-2 rounded-md border-2 w-fit h-fit flex justify-center items-center gap-1 whitespace-nowrap hover:bg-red-700 transition-all ease-in duration-75 hover:text-white cursor-pointer  m-5">
                            See my work
                        </span>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Introduction;