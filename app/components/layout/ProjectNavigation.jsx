"use client";
import { cn } from "@/app/utils/utils";
import { useState } from "react";
import FadeInDiv from "../ui/Tabs/FadeInDiv";
import Tabs from "../ui/Tabs/Tabs";
const propTabs = [
  { title: "Newbie", value: 0 },
  { title: "Beginner", value: 1 },
  { title: "Intermediate", value: 2 },
  { title: "Advanced", value: 3 },
  // { title: "Guru", value: 4 },
];
export default function ProjectNavigation({ contentClassName }) {
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
    <div className="hidden lg:block fixed w-full z-50 h-fit bottom-28 flex flex-col items-center">
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mb-0 w-full", contentClassName)}
      />

      <div className="h-fit w-fit mx-auto justify-center   translate-y-[130%]">
        <Tabs
          active={active}
          tabs={propTabs}
          setHovering={setHovering}
          onTabClick={moveSelectedTabToTop}
        />
      </div>
      {/* <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mb-0", contentClassName)}
      />
      <Tabs
        active={active}
        tabs={propTabs}
        setHovering={setHovering}
        onTabClick={moveSelectedTabToTop}
      /> */}
    </div>
  );
}
