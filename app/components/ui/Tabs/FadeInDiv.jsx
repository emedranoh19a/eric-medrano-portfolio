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
  //TOODO: A tab contains many proojects.
  // const links = [
  //   {
  //     title: "Home",
  //     icon: "2",

  //     href: "#",
  //   },
  //   {
  //     title: "Home",
  //     icon: "2",

  //     href: "#",
  //   },
  //   {
  //     title: "Home",
  //     icon: "2",

  //     href: "#",
  //   },
  //   {
  //     title: "Home",
  //     icon: "2",

  //     href: "#",
  //   },
  //   {
  //     title: "Home",
  //     icon: "2",

  //     href: "#",
  //   },
  //   {
  //     title: "Home",
  //     icon: "2",

  //     href: "#",
  //   },
  //   {
  //     title: "Home",
  //     icon: "2",

  //     href: "#",
  //   },
  //   {
  //     title: "Home",
  //     icon: "2",

  //     href: "#",
  //   },
  // ];

  // {title:"",
  //   image:"",
  //   ref:""
  // }
  return (
    <div className="relative w-full h-fit">
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
          className={cn("w-full h-fit absolute top-0 left-0 flex", className)}
        >
          <FloatingDock items={projects} level={tabs[idx]} />
        </motion.div>
      ))}
    </div>
  );
}