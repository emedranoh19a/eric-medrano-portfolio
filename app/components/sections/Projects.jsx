"use client";

import { useState } from "react";
import {
  FaFeatherAlt,
  FaSortAlphaDown,
  FaSortAlphaDownAlt,
} from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { levelTabs, projects } from "../../data";
import { BentoGrid, BentoGridItem } from "../BentoGrid";
import BoxReveal from "../effects/BoxReveal";
import Heading from "../ui/Heading";
import Subheading from "../ui/Subheading";
import Tabs from "../ui/Tabs/Tabs";
import Text from "../ui/Text";
import Select from "./Select";
import Span from "./Span";

const sortOptions = [
  { label: "Easier first", value: 0, icon: <FaFeatherAlt /> },
  { label: "Harder first", value: 1, icon: <GiWeightLiftingUp /> },
  { label: "A~Z", value: 2, icon: <FaSortAlphaDown /> },
  { label: "Z-A", value: 3, icon: <FaSortAlphaDownAlt /> },
];
//Project component.
export default function Projects() {
  //State:
  const [activeTab, setActiveTab] = useState(levelTabs[0]);

  //Select related:
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(sortOptions[0]);

  const [hovering, setHovering] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState("");
  //Dataflow:
  const filteredProjects = projects.filter((project) => {
    if (activeTab.tech === "all") return true;
    return project.techs.includes(activeTab.tech);
  });

  // //Handlers:
  const sortedProjects = filteredProjects.sort((a, b) => {
    if (activeOption.value === 0) return a.level > b.level ? 1 : -1;
    if (activeOption.value === 1) return a.level < b.level ? 1 : -1;
    if (activeOption.value === 2) return a.title > b.title ? 1 : -1;
    if (activeOption.value === 3) return a.title < b.title ? 1 : -1;
    return true;
  });

  // const moveSelectedTabToTop = (idx) => {
  //   const newTabs = [...propTabs];
  //   const selectedTab = newTabs.splice(idx, 1);
  //   newTabs.unshift(selectedTab[0]);
  //   setTabs(newTabs);
  //   setActiveTab(newTabs[0]);
  // };
  //Controll the state from here.
  function hoverHandler(tab) {
    console.log("hovering");
    console.log(tab);
    setHovering(true);
    setHoveredSkill(tab.tech);
  }
  function onTabClick(idx) {
    setActiveTab(levelTabs[idx]);
  }
  return (
    <section
      id="projects"
      // className="h-fit w-full py-10 px-20 h-full container mx-auto grid"
    >
      <ProjectsContent />
      <div className="flex justify-around gap-2">
        <Tabs
          active={activeTab}
          tabs={levelTabs}
          setHovering={setHovering}
          onTabClick={onTabClick}
          tabsLabel={"Skill"}
          allowNumbers={false}
          hoverHandler={hoverHandler}
        />
        <Select
          options={sortOptions}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeOption={activeOption}
          setActiveOption={setActiveOption}
        />
      </div>
      <BentoGrid className="max-w-4xl mx-auto mb-20">
        {sortedProjects.map((project, i) => (
          <BentoGridItem
            key={i}
            index={i}
            {...project}
            hovering={hovering}
            hoveredSkill={hoveredSkill}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

function ProjectsContent() {
  // Projects Section
  // Title:
  // "Turning Concepts into Creations."
  // Text:
  // "Here’s where imagination meets execution. Each project reflects a part of me—my curiosity, my dedication, and my constant drive to innovate. Dive in and discover the stories behind the code, the pixels, and the melodies."

  return (
    <div className="max-w-lg flex flex-col items-center overflow-hidden pt-8 mx-auto my-10">
      <BoxReveal className="w-full">
        <Heading text="Projects" />
      </BoxReveal>
      <BoxReveal>
        <Subheading>
          Have a look at some of my <Span>work</Span>!
        </Subheading>
      </BoxReveal>

      <BoxReveal>
        <Text className="text-center">
          Here&apos;s where ideas meet execution. Each project is a reflection
          of my curiosity, effort, and my constant drive to improve my skills.
        </Text>
        <Text className="text-center">Dive in and discover the stories</Text>
      </BoxReveal>

      <BoxReveal>
        {/* <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button> */}
      </BoxReveal>
    </div>
  );
}
