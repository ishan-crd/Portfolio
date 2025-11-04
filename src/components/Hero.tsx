import { motion } from "motion/react"

//icons
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import Navbar from "./Navbar";

const Hero: React.FC = () => {

    const handleDownload = (): void => {
        const link = document.createElement('a');
        link.href = "src/assets/files/resume.pdf"; // path from public folder
        link.download = 'Himanshu_Resume.pdf'; // optional name
        link.click();
    };

    return (
        <>
            <div className="flex h-screen flex-col text-[#1f1f1f] min-h-screen items-center justify-between bg-[#e0e0e0] overflow-hidden relative">
                <Navbar />
                <div className="flex flex-col md:flex-row justify-center items-center relative h-full ">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1.1 }}
                        transition={{ duration: 1 }}>
                        <img src="src\assets\videos\me2.gif" alt="Cool Animation" className="flex justify-center items-center w-70 h-70 md:h-90 lg:h-100 object-cover" />
                        {/* <video src="src\assets\videos\my_character2.mp4" muted loop autoPlay className="flex justify-center items-center w-fit h-80 " ></video> */}
                    </motion.div>
                    <div className="flex justify-center items-start flex-col z-10">
                        <motion.div
                            initial={{ opacity: 0, x: "-50%" }}
                            animate={{ opacity: 1, x: "0%" }}
                            transition={{ duration: 1 }}
                            className="font-tasa text-5xl md:text-7xl lg:text-9xl" id="hero">
                            Himanshu
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: "50%" }}
                            animate={{ opacity: 1, x: "0%" }}
                            transition={{ duration: 1 }}
                            className="font-tasa text-xl md:text-5xl">
                            Chaudhary
                        </motion.div>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="flex justify-center items-start w-full p-4">
                        <motion.div
                            initial={{ opacity: 0, x: "-10%" }}
                            animate={{ opacity: 1, x: "1%" }}
                            transition={{ duration: 1 }}
                            className="font-tasa text-sm md:text-base flex flex-col gap-4 justify-center items-start w-full">
                            <div className="flex justify-center items-center gap-2">
                                <FaTwitter size={25} /> Twitter
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <FaGithub size={25} /> Github
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <FaLinkedin size={25} /> LinkedIn
                            </div>
                        </motion.div>
                    </div>
                    <div className="font-inter-display-bold">
                        <motion.p
                            className="text-xl whitespace-nowrap p-5 md:text-4xl lg:text-6xl"
                            initial={{ opacity: 0, y: "10%" }}
                            animate={{ opacity: 1, y: "0%" }}
                            transition={{ duration: 1, delay: .5 }}>
                            //Web Developer
                        </motion.p>
                        <motion.div className="flex justify-end items-end w-full "
                            initial={{ opacity: 0, y: "10%" }}
                            animate={{ opacity: 1, y: "0%" }}
                            transition={{ duration: 1, delay: 1 }}>
                            <span className="px-2 py-1 md:px-5 md:py-2 rounded-md border-2 w-fit h-fit flex justify-center items-center gap-1 hover:bg-black transition-all ease-in duration-75 hover:text-white cursor-pointer  text-sm lg:text-base m-5" onClick={handleDownload}>
                                <GoDownload /> Resume
                            </span>
                        </motion.div>
                    </div>
                </div>

            </div>

        </>
    )
}

export { Hero }