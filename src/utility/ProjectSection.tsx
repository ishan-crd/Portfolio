import { motion, useTransform } from "motion/react";
import { useRef } from "react";
import type { ReactNode } from "react";
import type { MotionValue } from "framer-motion";

interface ProjectSectionProps {
  children: ReactNode;
  containerProgressY: MotionValue<number>;
  range: [number, number];
  index: number;
  totalProjects: number;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  children,
  containerProgressY,
  range,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Calculate y position based on scroll
  const y = useTransform(containerProgressY, range, [0, 100]);

  return (
    <motion.div
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col justify-center items-center"
      style={{
        y,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ProjectSection;

