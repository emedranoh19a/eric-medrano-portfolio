// "use client"
import { cn } from "@/app/utils/utils";
import { motion } from "framer-motion";
import { ProjectSeries } from "../../layout/FloatingDock/FloatingDock";
export default function FadeInDiv({ className, tabs, hovering, children }) {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  //TODO: with an effect, extract the difficulty of the tab from the url.
  //TOODO: A tab contains many proojects.
  const links = [
    {
      title: "Home",
      icon: "2",

      href: "#",
    },
    {
      title: "Home",
      icon: "2",

      href: "#",
    },
    {
      title: "Home",
      icon: "2",

      href: "#",
    },
    {
      title: "Home",
      icon: "2",

      href: "#",
    },
    {
      title: "Home",
      icon: "2",

      href: "#",
    },
    {
      title: "Home",
      icon: "2",

      href: "#",
    },
    {
      title: "Home",
      icon: "2",

      href: "#",
    },
    {
      title: "Home",
      icon: "2",

      href: "#",
    },
  ];

  return (
    <div className="relative w-fit h-fit bg-red-500">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-fit h-fit absolute top-0 left-0 flex", className)}
        >
          {/* TODO: Insert the projects here. */}
          <ProjectSeries items={links} />
        </motion.div>
      ))}
    </div>
  );
}
