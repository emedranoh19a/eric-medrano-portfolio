import { cn } from "@/app/utils/utils";
import { motion } from "framer-motion";
export default function Tabs({
  tabs,
  active,
  containerClassName = "",
  activeTabClassName,
  tabClassName,
  setHovering, //required
  onTabClick, //onTaClick must receive the index of the tab
}) {
  //Style:
  const containerStyles = cn(
    "relative flex justify-start items-center",
    "bg-white/50 max-w-full w-fit px-4 rounded-full py-2",
    "[perspective:1000px]",
    "overflow-auto sm:overflow-visible no-visible-scrollbar ",
    containerClassName
  );

  return (
    <div className={containerStyles}>
      {tabs.map((tab, idx) => (
        <button
          key={tab.title}
          onClick={() => onTabClick(idx)}
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
  );
}