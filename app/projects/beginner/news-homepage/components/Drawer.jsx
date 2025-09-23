"use client";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import { cn } from "@/app/utils/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { iconMenu, iconMenuClose } from "../imageIndex";
export default function Drawer({ className, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pageContainer, setPageContainer] = useState(null);

  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));
  useEffect(() => {
    setPageContainer(document.getElementById("page-container"));
  }, []);

  const containerCn = cn("relative w-10 h-[17px]", className);
  if (!pageContainer) return null;
  return (
    <>
      <button className={containerCn} onClick={() => setIsOpen(true)}>
        <Image src={iconMenu} fill alt="Menu" className="object-contain" />
      </button>
      {createPortal(
        <AnimatePresence mode="wait">
          {isOpen && (
            <>
              <Background key="background" />
              <Paper
                ref={ref}
                isOpen={isOpen}
                key="paper"
                setIsOpen={setIsOpen}
              >
                {children}
              </Paper>
            </>
          )}
        </AnimatePresence>,
        pageContainer
      )}
    </>
  );
}

function Background() {
  //TODO: Animate the background on open state with framer motion
  // //(How to animate on open an on exit with conditional rendering AND AnimatePresence?)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      className="lg:hidden absolute opacity-50 top-0 left-0 bg-(--navy-950) h-full w-screen z-10"
    >
      Portal
    </motion.div>
  );
}

function Paper({ children, isOpen, setIsOpen, ref }) {
  return (
    <motion.div
      ref={ref}
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "0%" : "100%" }}
      exit={{ x: "100%" }}
      transition={{ ease: "easeOut" }}
      className="fixed lg:hidden bg-white h-screen w-full max-w-[256px] sm:max-w-[312px]  top-0 right-0 z-10 px-[21px] py-[27px] sm:py-[27px] sm:px-[36px]"
    >
      <div className="h-full w-full flex flex-col gap-[88px]">
        <button
          className="relative w-[30px] aspect-square self-end cursor-pointer bg-lime-500"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={iconMenuClose}
            fill
            alt="Close Menu"
            className="object-contain"
          />
          {/* X */}
        </button>
        {/* <div className="h-px w-full bg-(--grey-200)"></div> */}
        <div>{children}</div>
      </div>
    </motion.div>
  );
}
