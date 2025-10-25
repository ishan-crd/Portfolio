import { motion } from "motion/react"


const Navbar: React.FC = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white w-screen h-fit">
                <div className="flex items-center justify-between whitespace-nowrap w-screen font-tasa p-2 px-4 text-xs md:text-base">
                    <div>
                        Himanshu
                    </div>
                    <div>
                        <a href="#">Tech Stack</a>
                    </div>
                    <div>
                        <a href="#">Projects</a>
                    </div>
                    <div>
                        <a href="#">About Me</a>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Navbar;