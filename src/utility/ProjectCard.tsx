import { motion, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { MotionValue } from "framer-motion"


//icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";



interface CardProps {
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

const ProjectCard: React.FC<CardProps> = ({ projectName, image, githubLink, deployLink, about, date, containerProgressY, range }) => {
    const [currentImage, setCurrentImage] = useState<number>(0)

    const cardRef = useRef(null);



    function forwardImage() {
        if (currentImage === image.length - 1) {
            setCurrentImage(0)

        } else {
            setCurrentImage(currentImage + 1)
        }
    }

    function previousImage() {
        if (currentImage === 0) {
            setCurrentImage(image.length - 1)
        } else {
            setCurrentImage(currentImage - 1)
        }
    }


    return (
        <>
            <motion.div
                ref={cardRef}
                className="flex flex-col md:flex-row items-center rounded-md h-[90svh] lg:h-[85svh] md:p-2 w-23/24 z-0 sticky top-10 lg:top-20 md:gap-2 font-inter-display-bold bg-[#121111] border border-[#2c2929] rounded-2xl overflow-hidden">
                {/* Mobile: Portrait Card Layout */}
                <div className="flex flex-col md:hidden w-full h-full">
                    {/* Image Section */}
                    <div className="relative w-full flex-shrink-0">
                        <div className="absolute flex justify-between items-center w-full h-full p-2 z-10 select-none">
                            <span className="p-2 rounded-full bg-[#403b3b]/80 hover:bg-black/80 hover:scale-150 transition-all duration-75 ease-in cursor-pointer">
                                <FaArrowLeft onClick={previousImage} />
                            </span>
                            <span className="p-2 rounded-full bg-[#403b3b]/80 hover:bg-black/80 hover:scale-150 transition-all duration-75 ease-in cursor-pointer" onClick={forwardImage}>
                                <FaArrowRight />
                            </span>
                        </div>
                        <img 
                            src={image[currentImage]} 
                            alt={projectName} 
                            className="w-full aspect-video object-cover" 
                        />
                    </div>
                    
                    {/* Content Section - No gap below image */}
                    <div className="flex flex-col justify-between items-start flex-1 w-full p-6 bg-[#121111]">
                        <div className="flex flex-col justify-between items-start gap-3 w-full">
                            <span className="font-dm-mono font-bold text-xs text-[#a29b9b]">
                                ({date})
                            </span>
                            <span className="text-2xl sm:text-3xl font-inter-display-bold text-white">
                                {projectName}
                            </span>
                            <span className="font-inter-display text-[#a29b9b] text-sm leading-relaxed">
                                {about}
                            </span>
                        </div>
                        <div className="flex flex-col w-full font-inter text-[#a29b9b] font-semibold text-xs mt-4">
                            <a href={githubLink}
                                target="_blank"
                                className="flex justify-start gap-2 items-center border-t border-[#2c2929] py-3 hover:text-white transition-colors" >
                                <span>
                                    Github
                                </span>
                                <span>
                                    <FaExternalLinkAlt />
                                </span>
                            </a>
                            <a href={deployLink}
                                target="_blank"
                                className="flex justify-start gap-2 items-center border-t border-[#2c2929] py-3 hover:text-white transition-colors" >
                                <span>
                                    Deployed Link
                                </span>
                                <span>
                                    <FaExternalLinkAlt />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Desktop: Original Layout */}
                <div className="hidden md:flex justify-between md:justify-center flex-row items-center w-full h-full">
                    <div className="w-full h-full md:w-4/6 md:h-4/4">
                        <span className="relative">
                            <div className="absolute flex justify-between items-center w-full h-full p-2 lg:p-5 select-none z-10">
                                <span className="p-2 rounded-full bg-[#403b3b] hover:bg-black hover:scale-150 transition-all duration-75 ease-in cursor-pointer">
                                    <FaArrowLeft onClick={previousImage} />
                                </span>
                                <span className="p-2 rounded-full bg-[#403b3b] hover:bg-black hover:scale-150 transition-all duration-75 ease-in cursor-pointer" onClick={forwardImage}>
                                    <FaArrowRight />
                                </span>
                            </div>
                            <img src={image[currentImage]} alt={projectName} className="border border-[#2c2929] h-55 sm:h-70 w-full md:h-4/4 md:w-6/6 rounded-2xl object-cover flex" />
                        </span>
                    </div>
                    <div className="flex justify-between items-start gap-2 flex-col h-3/4 w-full md:w-2/6 md:h-full border border-[#2c2929] p-6 rounded-2xl">
                        <div className="flex flex-col justify-between items-start gap-2 md:gap-4">
                            <span className="font-dm-mono font-bold text-xs md:text-sm lg:text-base xl:text-xl">
                                ({date})
                            </span>
                            <span className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
                                {projectName}
                            </span>
                            <span className="font-inter-display text-[#a29b9b] text-xs md:text-sm lg:text-base xl:text-lg">
                                {about}
                            </span>
                        </div>
                        <div className="flex flex-col w-full font-inter text-[#a29b9b] font-semibold text-xs lg:text-base ">
                            <a href={githubLink}
                                target="_blank"
                                className="flex justify-start gap-2 items-center border-y p-2 " >
                                <span className="hover:text-white">
                                    Github
                                </span>
                                <span>
                                    <FaExternalLinkAlt />
                                </span></a>
                            <a href={deployLink}
                                target="_blank"
                                className="flex justify-start gap-2 items-center border-y p-2 " >
                                <span className="hover:text-white">
                                    Deployed Link
                                </span>
                                <span>
                                    <FaExternalLinkAlt />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div >
        </>
    );
};

export default ProjectCard;