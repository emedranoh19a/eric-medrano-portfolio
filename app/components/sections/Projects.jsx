"use client";

import { useState } from "react";
import { projects } from "../../data";
import { BentoGrid, BentoGridItem } from "../BentoGrid";
import BoxReveal from "../effects/BoxReveal";
import { TechIcon } from "../TechIcons";
import Heading from "../ui/Heading";
import Subheading from "../ui/Subheading";
import Tabs from "../ui/Tabs/Tabs";
import Text from "../ui/Text";
import Span from "./Span";

const levelTabs = [
  { title: "All", value: 0, tech: "all" },
  { title: <TechIcon tech="html" />, value: 1, tech: "html" },
  { title: <TechIcon tech="css" />, value: 2, tech: "css" },
  { title: <TechIcon tech="sass" />, value: 3, tech: "sass" },
  { title: <TechIcon tech="tailwindcss" />, value: 4, tech: "tailwindcss" },
  { title: <TechIcon tech="react" />, value: 5, tech: "react" },
  { title: <TechIcon tech="nextjs" />, value: 6, tech: "nextjs" },
  { title: <TechIcon tech="framer-motion" />, value: 7, tech: "framer-motion" },
];
//Project component.
export default function Projects() {
  //TODO: Filter projects by technology.
  //TODO: give motion to the filtered items.

  //State:
  const [activeTab, setActiveTab] = useState(levelTabs[0]);
  const [tabs, setTabs] = useState(levelTabs);

  //Dataflow:
  const filteredProjects = projects.filter((project) => {
    if (activeTab.tech === "all") return true;
    return project.techs.includes(activeTab.tech);
  });
  // const [hovering, setHovering] = useState(false);
  // //Handlers:
  // const moveSelectedTabToTop = (idx) => {
  //   const newTabs = [...propTabs];
  //   const selectedTab = newTabs.splice(idx, 1);
  //   newTabs.unshift(selectedTab[0]);
  //   setTabs(newTabs);
  //   setActiveTab(newTabs[0]);
  // };
  //Controll the state from here.
  function setHover() {
    console.log("hovering");
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
      <Tabs
        active={activeTab}
        tabs={levelTabs}
        setHovering={setHover}
        onTabClick={onTabClick}
        tabsLabel={"Skill"}
      />
      <BentoGrid className="max-w-4xl mx-auto mb-20">
        {filteredProjects.map((project, i) => (
          <BentoGridItem key={i} index={i} {...project} />
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
        <Text>
          Here&apos;s where ideas meet execution. Each project is a reflection
          of my curiosity, effort, and my constant drive to improve my skills.
        </Text>
        <Text>
          Dive in and discover the stories behind the code, the pixels, and the
          melodies.
        </Text>
      </BoxReveal>

      <BoxReveal>
        {/* <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button> */}
      </BoxReveal>
    </div>
  );
}
