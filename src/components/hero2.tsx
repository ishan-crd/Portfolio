import { motion } from "framer-motion"

export default function Hero2() {
  return (
    <div className="relative w-full h-screen">
      <img src="src\assets\videos\me2.gif" className="absolute inset-0 w-full h-full object-cover z-0" />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold z-10 drop-shadow-xl"
      >
        Floating Text 😎
      </motion.h1>
    </div>
  )
}
