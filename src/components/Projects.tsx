import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Section = ({ color, text }: { color: string; text: string }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"], // triggers when section enters/exits
    });

    // Translate Y so next section slides up over the previous one
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    return (
        <motion.section
            ref={ref}
            style={{ y, backgroundColor: color }}
            className="h-screen flex justify-center items-center text-white text-6xl font-bold sticky top-0"
        >
            {text}
        </motion.section>
    );
};

export default function ScrollStack() {
    return (
        <div className="h-[400vh] overflow-x-hidden">
            <Section color="#111" text="01 - Welcome" />
            <Section color="#2D2D2D" text="02 - About" />
            <Section color="#4B4B4B" text="03 - Projects" />
            <Section color="#6B6B6B" text="04 - Contact" />
        </div>
    );
}
