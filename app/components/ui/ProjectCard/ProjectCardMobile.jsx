import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { useMemo } from "react";
import ProjectLink from "../../ProjectLink";
import TechIcons from "../../TechIcons";
import AlmostReadySign from "./Slots/AlmostReadySign";
import LevelChip from "./Slots/LevelChip";
import ProjectDescription from "./Slots/ProjectDescription";
import ProjectTitle from "./Slots/ProjectTitle";
const randomDescriptions = [
  "This one is still finding itself.",
  "The code is still baking.",
  "One more coffee brew to release.☕️",
  "Still in the markup limbo.",
  "The paint is still wet. 🎨",
  "Letting this one grow. 🌱",
  "Still arguing with me over which font to use.",
  "Under construction by an overcaffeinated squirrel (me).",
  "Refuses to build unless I say 'please'. 🙃",
];

export default function ProjectCardMobile({ projectData }) {
  const {
    title, //in data
    description, //in data
    image, //in data
    url, //in data
    level, //in data
    techs = [], //in data
    isImportant, //in data
    isComplete, //in data
    isPublic = false, //in data
    isExternalProject,
  } = projectData; //in data
  //Style:
  const containerCn = cn(
    "flex sm:hidden items-start",
    "w-full p-2 border rounded-2xl border-neutral-500/50 bg-white border-lg ",
    "gap-2"
  );
  const imageContainerStyles = cn(
    "relative flex bg-gray-50 rounded-xl overflow-hidden",
    "relative aspect-square w-32"
    // !isComplete && "backdrop-blue-sm"
  );
  const imageStyles = cn(
    "object-cover object-top group-hover/bento:scale-110 transition",
    !isComplete && "blur-md"
  );
  const computedTitle = isComplete ? title : "?????";
  //Dataflow:
  const randomDescription = useMemo(() => {
    return randomDescriptions[
      Math.floor(Math.random() * randomDescriptions.length)
    ];
  }, []);
  return (
    <ProjectLink
      isExternalProject={isComplete}
      cancel={!isComplete} // true to return a simple div.
      href={url}
      className={containerCn}
    >
      <div className={imageContainerStyles}>
        <Image
          src={image}
          fill
          className={imageStyles}
          alt={`${computedTitle} thumbnail`}
        />
        {!isComplete && <AlmostReadySign level={level} className="text-lg" />}{" "}
      </div>
      <div className="flex flex-col justify-start w-full">
        <Content
          level={level}
          techs={techs}
          title={isComplete ? title : "?????"}
          isComplete={isComplete}
          description={isComplete ? description : randomDescription}
        />
      </div>

      {/* <div className="bg-orange-500/50 col-span-2">{title}</div> */}
      {/* <div className="bg-orange-500/50 col-span-2">{description}</div> */}
    </ProjectLink>
  );
}

function Content({ level, techs, title, isComplete, description }) {
  return (
    <>
      <div className="h-fit w-full flex justify-between">
        <LevelChip level={level} className="relative bottom-0 right-0" />
        <TechIcons techs={techs} />
      </div>
      <ProjectTitle
        level={level}
        title={title}
        isComplete={isComplete}
        className="text-sm mb-0 mt-0"
      />
      <ProjectDescription
        level={level}
        description={description}
        isComplete={isComplete}
      />
    </>
  );
}
