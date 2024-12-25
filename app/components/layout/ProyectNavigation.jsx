"use client";
import { cn } from "@/app/utils/utils";
import { useState } from "react";
import FadeInDiv from "../ui/Tabs/FadeInDiv";
import Tabs from "../ui/Tabs/Tabs";
const propTabs = [
  { title: "Newbie", value: "newbie" },
  { title: "Beginner", value: "beginner" },
  { title: "Intermediate", value: "intermediate" },
  { title: "Advanced", value: "advanced" },
  { title: "Guru", value: "guru" },
];
export default function ProyectNavigation({ contentClassName }) {
  //State:
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);
  const [hovering, setHovering] = useState(false);
  //Handlers:
  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };
  return (
    <>
      <Tabs
        active={active}
        tabs={propTabs}
        setHovering={setHovering}
        onTabClick={moveSelectedTabToTop}
      />
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-32", contentClassName)}
      />
    </>
  );
}
