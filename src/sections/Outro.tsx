import { motion } from "framer-motion";
//icons
import { FaArrowUp, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import me1 from "../assets/videos/me1.gif";


const Outro: React.FC = () => {
    return (
        <>
            <div className="min-h-screen bg-[#e0e0e0] relative flex flex-col justify-center items-center text-[#1f1f1f] font-inter-display">
                <motion.a
                    initial={{ opacity: 0, x: "20%", }}
                    whileInView={{ opacity: 1, x: "0%", rotate: [180, 0] }}
                    transition={{ duration: .5 }}
                    className='w-fit h-fit p-1 md:p-2 lg:p-3 absolute bg-black text-white top-5 right-5 rounded-full z-50 text-base md:text-lg lg:text-xl hover:scale-105 transition-all duration-75 ease-in' href='#navbar'>
                    <FaArrowUp />
                </motion.a>
                <div className="w-full h-full overflow-hidden flex justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1.1 }}
                        transition={{ duration: 1 }}>
                        <img src={me1} alt="Cool Animation" className="flex justify-center items-center w-60 h-60 md:h-90 lg:h-100 object-cover" />
                    </motion.div>
                </div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <motion.span
                        initial={{ opacity: 0, y: "20%" }}
                        whileInView={{ opacity: 1, y: "0%" }}
                        transition={{ duration: 0.5, delay: .2 }}
                        className="text-[#1f1f1f] whitespace-nowrap font-inter-display-bold text-3xl lg:text-5xl">
                        Let's Work Together
                    </motion.span>
                    <div className="flex gap-2 flex-col items-center justify-center w-full">
                        <motion.a
                            initial={{ opacity: 0, y: "20%" }}
                            whileInView={{ opacity: 1, y: "0%" }}
                            transition={{ duration: .5, delay: .4 }}
                            href="mailto:ishangupta3121@gmail.com"
                            className="whitespace-nowrap font-semibold text-sm lg:text-xl">
                            Email : ishangupta3121@gmail.com
                        </motion.a>
                        <div className="flex items-center justify-around text-4xl w-full">
                            <motion.a
                                href="https://github.com/ishan-crd"
                                target="_blank"
                                initial={{ opacity: 0, y: "20%" }}
                                whileInView={{ opacity: 1, y: "0%" }}
                                transition={{ duration: .5, delay: .6 }}
                                className="whitespace-nowrap hover:text-black hover:scale-105 transition-all ease-in duration-75 cursor-pointer">
                                <FaSquareGithub />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/ishan2131/"
                                target="_blank"
                                initial={{ opacity: 0, y: "20%" }}
                                whileInView={{ opacity: 1, y: "0%" }}
                                transition={{ duration: .5, delay: 1 }}
                                className="whitespace-nowrap hover:text-black hover:scale-105 transition-all ease-in duration-75 cursor-pointer">
                                <FaLinkedin />
                            </motion.a>
                            <motion.a
                                href="https://x.com/ishancrd"
                                target="_blank"
                                initial={{ opacity: 0, y: "20%" }}
                                whileInView={{ opacity: 1, y: "0%" }}
                                transition={{ duration: .5, delay: 1.2 }}
                                className="whitespace-nowrap hover:text-black hover:scale-105 transition-all ease-in duration-75 cursor-pointer">
                                <FaSquareXTwitter />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Outro;