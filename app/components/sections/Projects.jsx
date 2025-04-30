"use client";

import { useState } from "react";
import {
  FaFeatherAlt,
  FaSortAlphaDown,
  FaSortAlphaDownAlt,
} from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { projects, skillTabs } from "../../data";
import { BentoGrid } from "../BentoGrid";
import BoxReveal from "../effects/BoxReveal";
import GoToProjects from "../ui/GoToProjects";
import Heading from "../ui/Heading";
import ProjectCard from "../ui/ProjectCard/ProjectCard";
import Subheading from "../ui/Subheading";
import Tabs from "../ui/Tabs/Tabs";
import Text from "../ui/Text";
import Select from "./Select";
import Span from "./Span";

const sortOptions = [
  { label: "Harder first", value: 0, icon: <GiWeightLiftingUp /> },
  { label: "Easier first", value: 1, icon: <FaFeatherAlt /> },
  { label: "A~Z", value: 2, icon: <FaSortAlphaDown /> },
  { label: "Z-A", value: 3, icon: <FaSortAlphaDownAlt /> },
];
//Project component.
export default function Projects() {
  //State:
  const [activeTab, setActiveTab] = useState(skillTabs[0]);

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

  const sortedProjects = filteredProjects.sort((a, b) => {
    // If projects have the same level, suborder them by reverse order
    if (a.level === b.level) {
      // Here you reverse the order to bring the last project first
      return filteredProjects.indexOf(b) - filteredProjects.indexOf(a);
    }

    if (activeOption.value === 0) return a.level <= b.level ? 1 : -1;
    if (activeOption.value === 1) return a.level >= b.level ? 1 : -1;
    if (activeOption.value === 2) return a.title > b.title ? 1 : -1;
    if (activeOption.value === 3) return a.title < b.title ? 1 : -1;

    return true;
  });

  //Handlers:
  // const moveSelectedTabToTop = (idx) => {
  //   const newTabs = [...propTabs];
  //   const selectedTab = newTabs.splice(idx, 1);
  //   newTabs.unshift(selectedTab[0]);
  //   setTabs(newTabs);
  //   setActiveTab(newTabs[0]);
  // };
  //Controll the state from here.
  function hoverHandler(tab) {
    setHovering(true);
    setHoveredSkill(tab.tech);
  }
  function onTabClick(idx) {
    setActiveTab(skillTabs[idx]);
  }
  return (
    <section
      id="projects"
      className="pb-8  mb-20 lg:-mt-20"
      // className="h-fit w-full py-10 px-20 h-full container mx-auto grid"
    >
      <ProjectsContent />
      <div className="flex mb-6 justify-around gap-2">
        <Tabs
          active={activeTab}
          tabs={skillTabs}
          setHovering={setHovering}
          onTabClick={onTabClick}
          tabsLabel={"Filter"}
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
      <BentoGrid className="max-w-4xl mx-auto mb-20 min-h-96">
        {sortedProjects.map((project, i) => (
          <ProjectCard
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
        <Heading text="Projects" className="mb-4" />
      </BoxReveal>
      <BoxReveal>
        <Subheading>
          Have a look at some of my <Span>work</Span>!
        </Subheading>
      </BoxReveal>

      <BoxReveal>
        <Text className="text-center mb-6">
          I constantly build projects with<Span> effort and purpose</Span>. What
          I dreamed of as a child still waits in the distance — but I
          haven&apos;t stopped reaching for it.
        </Text>
      </BoxReveal>

      <BoxReveal>
        <GoToProjects
          className="mt-[1.6rem] mb-10"
          text="Go to project navigation"
        />
      </BoxReveal>
    </div>
  );
}
