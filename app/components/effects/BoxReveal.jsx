"use client";

import { cn } from "@/app/utils/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function BoxReveal({
  children,
  width = "fit-content",
  boxColor = "#5046e6",
  duration = 0.5,
  className = "",
  delay = 0,
}) {
  //State:
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  //Style:
  const boxStyles = cn("relative overflow-hidden", className);
  return (
    <div ref={ref} style={{ width }} className={boxStyles}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration ? duration : 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: duration ? duration : 0.5,
          ease: "easeIn",
          delay,
        }}
        className="bg-linear-to-br from-indigo-400 via-indigo-500 to-indigo-700"
        // className="absolute top-[4] bottom-[4] left-0 right-0 z-20"
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          // background: boxColor ? boxColor : "#5046e6",
        }}
      />
    </div>
  );
}
