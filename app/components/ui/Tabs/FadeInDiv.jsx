// "use client"
import { projects } from "@/app/data";
import { cn } from "@/app/utils/utils";
import { motion } from "framer-motion";
import { FloatingDock } from "../../layout/FloatingDock/FloatingDock";
export default function FadeInDiv({ className, tabs, hovering, children }) {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  //TODO: with an effect, extract the difficulty of the tab from the url.

  return (
    <div className="relative w-full h-full bg-red-500">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: isActive(tab) ? 2 : -idx,
            // opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            opacity: isActive(tab) ? 1 : 0.7,
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute  flex", className)}
        >
          <FloatingDock items={projects} level={tabs[idx]} />
        </motion.div>
      ))}
      <div className="w-full h-16 block absolute bg-transparent "></div>
    </div>
  );
}
