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
  tabsLabel = "Level",
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
      <div className="bg-black/50 mr-4 text-white font-bold px-4 rounded-full h-full inline-block grid place-items-center">
        {`${tabsLabel}: `}
      </div>
      {tabs.map((tab, idx) => (
        <button
          key={idx + tab.title}
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
              "relative text-black hidden md:block",
              active.value === tab.value && " text-white"
            )}
          >
            {tab.title}
          </span>
          <span
            className={cn(
              "relative block text-black md:hidden",
              active.value === tab.value && " text-white"
            )}
          >
            {idx + 1}
          </span>
        </button>
      ))}
    </div>
  );
}
