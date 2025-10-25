import { motion } from "motion/react"

//icons
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero: React.FC = () => {
    return (
        <>
            <div className="flex flex-1 items-center justify-center bg-red-600 overflow-hidden">
                <div>
                    <motion.div
                        initial={{ opacity: 1, x: -250, y: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="font-tasa text-4xl md:text-9xl">
                        Himanshu
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 1, x: 250, y: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="font-tasa text-2xl">
                        Chaudhary
                    </motion.div>
                </div>
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -1000 }}
                        animate={{ opacity: 1, x: -780 }}
                        transition={{ duration: 1 }}
                        className="font-tasa text-2xl flex flex-col gap-4">
                        <div>
                            <FaTwitter />
                        </div>
                        <div>
                            <FaGithub />
                        </div>
                        <div>
                            <FaLinkedin />
                        </div>
                    </motion.div>
                </div>
            </div>

        </>
    )
}

export { Hero }