// "use client"
import { projects } from "@/app/data";
import { cn } from "@/app/utils/utils";
import { motion } from "framer-motion";
import FloatingDock from "../../layout/FloatingDock/FloatingDock";
export default function FadeInDiv({ className, tabs, hovering }) {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  //TODO: with an effect, extract the difficulty of the tab from the url.

  //TODO: an icon should open a new tab depending if the project is external.

  const containerStyles =
    " fixed h-fit bg-sky-500 w-full  z-10 bottom-0 left-0";
  const innerStyles = cn("relative", "", className);
  return (
    <div className={containerStyles}>
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            // opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            opacity: isActive(tab) ? 1 : 0.7,
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={innerStyles}
        >
          <FloatingDock items={projects} level={tabs[idx]} />
        </motion.div>
      ))}
    </div>
  );
}
