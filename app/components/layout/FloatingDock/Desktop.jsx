import { cn } from "@/app/utils/utils";
import { motion, useMotionValue } from "framer-motion";
import IconContainer from "./IconContainer";

export default function FloatingDockDesktop({ items: projects, className }) {
  //Note: At this point we already have the filtered projects.
  //Each item is a single project.
  //State:
  let mouseX = useMotionValue(Infinity);

  //Style:
  const containerStyles = cn(
    "hidden md:flex",
    "gap-4 justify-center items-end",
    "h-16 mx-auto px-4 pb-3",
    "rounded-2xl bg-gray-100/60 backdrop-blur-sm",
    className
  );
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={containerStyles}
    >
      {projects.map((project) => (
        <IconContainer mouseX={mouseX} key={project.title} {...project} />
      ))}
    </motion.div>
  );
}
