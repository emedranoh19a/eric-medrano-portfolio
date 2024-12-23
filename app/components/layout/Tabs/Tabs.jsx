"use client";
import { cn } from "@/app/utils/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import FadeInDiv from "./FadeInDiv";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  //State:
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  //Style:
  const containerStyles = cn(
    "relative flex justify-start items-center",
    "bg-neutral-900/10 max-w-full w-fit px-4 rounded-full py-2",
    "[perspective:1000px]",
    "overflow-auto sm:overflow-visible no-visible-scrollbar ",

    containerClassName
  );

  return (
    <>
      <div className={containerStyles}>
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-neutral-800 rounded-full",
                  activeTabClassName
                )}
              />
            )}

            <span
              className={cn(
                "relative block text-black",
                active.value === tab.value && " text-white"
              )}
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-32", contentClassName)}
      />
    </>
  );
};
