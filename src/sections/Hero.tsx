import { motion } from "motion/react"
import TextType from "../utility/TextType";
import Navbar from "../utility/Navbar";

//icons
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import me2 from "../assets/videos/me2.gif";


const Hero: React.FC = () => {

    const handleDownload = (): void => {
        const link = document.createElement('a');
        link.href = "/files/IshanGupta-Resume.pdf";
        link.download = 'IshanGupta-Resume.pdf';
        link.click();
    };

    return (
        <>
            <div className="flex h-screen flex-col text-[#1f1f1f] min-h-screen items-center justify-between bg-[#e0e0e0] overflow-hidden relative">
                <Navbar />
                
                {/* Mobile Layout - Exact copy from portfolio-himanshu */}
                <div className="flex md:hidden flex-col justify-center items-center relative h-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1.1 }}
                        transition={{ duration: 1 }}>
                        <img src={me2} alt="Cool Animation" className="flex justify-center items-center w-70 h-70 object-cover" />
                    </motion.div>
                    <div className="flex justify-center items-start flex-col z-10">
                        <motion.div
                            initial={{ opacity: 0, x: "-50%" }}
                            animate={{ opacity: 1, x: "0%" }}
                            transition={{ duration: 1 }}
                            className="font-inter-display-bold text-5xl" id="hero">
                            Ishan
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: "50%" }}
                            animate={{ opacity: 1, x: "0%" }}
                            transition={{ duration: 1 }}
                            className="font-inter-display-bold text-xl">
                            Gupta
                        </motion.div>
                    </div>
                </div>
                <div className="flex md:hidden justify-between items-center w-full">
                    <div className="flex justify-center items-start w-full p-4">
                        <motion.div
                            initial={{ opacity: 0, x: "-10%" }}
                            animate={{ opacity: 1, x: "1%" }}
                            transition={{ duration: 1 }}
                            className="font-tasa text-sm flex flex-col gap-4 justify-center items-start w-full">
                            <a href="https://x.com/ishancrd" target="_blank" className="flex justify-center items-center gap-2 hover:text-black">
                                <FaTwitter size={25} /> Twitter
                            </a>
                            <a href="https://github.com/ishan-crd" target="_blank" className="flex justify-center items-center gap-2 hover:text-black">
                                <FaGithub size={25} /> Github
                            </a>
                            <a href="https://www.linkedin.com/in/ishan2131/" target="_blank" className="flex justify-center items-center gap-2 hover:text-black">
                                <FaLinkedin size={25} /> LinkedIn
                            </a>
                        </motion.div>
                    </div>
                    <div className="font-inter-display-bold w-4/4">
                        <motion.p
                            className="text-xl whitespace-nowrap p-5 justify-end flex items-center"
                            initial={{ opacity: 0, y: "10%" }}
                            animate={{ opacity: 1, y: "0%" }}
                            transition={{ duration: 1, delay: .5 }}>
                            <TextType
                                text={["//Full Stack Developer","//UI/UX Designer"]}
                                typingSpeed={75}
                                pauseDuration={3000}
                                showCursor={true}
                                cursorCharacter="/"
                            />
                        </motion.p>

                        <motion.div className="flex justify-end items-end w-full "
                            initial={{ opacity: 0, y: "10%" }}
                            animate={{ opacity: 1, y: "0%" }}
                            transition={{ duration: 1, delay: 1 }}>
                            <span className="px-2 py-1 rounded-md border-2 w-fit h-fit flex justify-center items-center gap-1 hover:bg-black transition-all ease-in duration-75 hover:text-white cursor-pointer text-sm m-5" onClick={handleDownload}>
                                <GoDownload /> Resume
                            </span>
                        </motion.div>
                    </div>
                </div>

                {/* Desktop Layout - Current Design */}
                <div className="hidden md:flex md:flex-row justify-between items-center w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative h-full py-20">
                    
                    {/* Left Side - Name and Title */}
                    <div className="flex flex-col justify-center items-start z-10 flex-1 md:pr-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-4">
                            <h1 className="font-inter-display-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight" id="hero">
                                Ishan
                            </h1>
                            <h2 className="font-inter-display-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#1f1f1f]/80">
                                Gupta
                            </h2>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-6 md:mt-8">
                            <TextType
                                text={["//Full Stack Developer","//UI/UX Designer"]}
                                typingSpeed={75}
                                pauseDuration={3000}
                                showCursor={true}
                                cursorCharacter="/"
                            />
                        </motion.div>

                        {/* Social Links - Horizontal */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex gap-6 mt-8 md:mt-10">
                            <a href="https://x.com/ishancrd" target="_blank" className="flex justify-center items-center gap-2 hover:text-black transition-colors">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://github.com/ishan-crd" target="_blank" className="flex justify-center items-center gap-2 hover:text-black transition-colors">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/ishan2131/" target="_blank" className="flex justify-center items-center gap-2 hover:text-black transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                        </motion.div>

                        {/* Resume Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mt-6 md:mt-8">
                            <button 
                                onClick={handleDownload}
                                className="px-6 py-3 md:px-8 md:py-4 rounded-lg border-2 border-[#1f1f1f] w-fit flex justify-center items-center gap-2 hover:bg-[#1f1f1f] transition-all ease-in duration-75 hover:text-[#e0e0e0] cursor-pointer text-base md:text-lg font-inter-display-bold">
                                <GoDownload size={20} /> Resume
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Side - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="flex-shrink-0 w-full md:w-auto md:max-w-md lg:max-w-lg xl:max-w-xl">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1f1f1f]/10 to-transparent rounded-full blur-3xl transform scale-150"></div>
                            <img 
                                src={me2} 
                                alt="Ishan Gupta" 
                                className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover" 
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export { Hero }