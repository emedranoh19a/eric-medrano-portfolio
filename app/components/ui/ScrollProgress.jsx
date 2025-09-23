"use client";

import { cn } from "@/app/utils/utils";
import { motion, useScroll, useSpring } from "framer-motion";
import { forwardRef } from "react";

// export default function ScrollProgress({className, ...props}) {
//   return <>Scroll Progress</>;
// }

const ScrollProgress = forwardRef(function ScrollProgress(
  { className, ...props },
  ref
) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-1000 h-1 origin-left bg-linear-to-r from-indigo-400 via-indigo-500 to-indigo-600",
        className
      )}
      style={{
        scaleX,
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";

export default ScrollProgress;
