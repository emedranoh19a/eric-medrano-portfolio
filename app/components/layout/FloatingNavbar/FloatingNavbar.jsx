"use client";

import { cn } from "@/app/utils/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";

export const FloatingNav = ({ children, className }) => {
  //State:
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      const direction = current - (previous ?? 0);

      // 1. Always hide if near top
      // if (current > 0 && current < 0.05) {
      //   setVisible(false);
      //   return;
      // }
      // if (!current) {
      //   setVisible(true);
      //   return;
      // }

      // 2. Show on scroll up, hide on scroll down at the very top.
      if (direction < 0) {
        setVisible(true);
      } else if (direction > 0 && current < 0.05) {
        setVisible(false);
      }
    }
  });
  //Style:
  const floatingContainerStyles = cn(
    "flex max-w-fit fixed top-10 inset-x-0 mx-auto z-50",
    className
  );
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={floatingContainerStyles}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
