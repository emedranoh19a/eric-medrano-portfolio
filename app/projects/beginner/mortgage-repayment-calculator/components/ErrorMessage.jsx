"use client";
import { cn } from "@/app/utils/utils";
import { AnimatePresence, motion } from "framer-motion";
import Text from "./Text";

export default function ErrorMessage({ message, className }) {
  const textStyles = cn("text-[var(--red)]", className);
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          key="error"
          layout
          className={textStyles}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Text preset={5} as="span" className={textStyles}>
            {message}
          </Text>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
