//Note: Until line 102, everything works good
import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { useMemo } from "react";
import ProjectLink from "../../ProjectLink";
import PixelCard from "./PixelCard";
import AlmostReadySign from "./Slots/AlmostReadySign";
import ImageFg from "./Slots/ImageFg";
import NewChip from "./Slots/NewChip";
import Ornamentals from "./Slots/Ornamentals";
import ProjectDescription from "./Slots/ProjectDescription";
import ProjectTitle from "./Slots/ProjectTitle";
import { ZCardBody, ZCardContainer, ZCardItem } from "./ZCard";

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

export default function ProjectCardDesktop({
  className,
  index,
  hovering,
  hoveredSkill,
  isNew = true,
  ...projectData
}) {
  //Dataflow:
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
  const containerStyles = cn(
    "hidden sm:flex",
    "group/bento relative",
    "flex-col justify-start w-full h-full gap-2 pb-auto",
    "bg-transparent",
    // "overflow-hidden",
    // "border border-neutral-100 rounded-xl ",
    // "transition duration-200 shadow-input",
    "transition duration-200",
    // level === 0 && "hover:shadow-sky-500/5",
    // level === 1 && "hover:shadow-lime-500/5",
    // level === 2 && "hover:shadow-yellow-500/5",
    // level === 3 && "hover:shadow-red-500/5",
    // level === 4 && "hover:shadow-violet-500/5",
    isImportant ? "lg:col-span-2" : "col-span-1",
    className
  );

  const imageStyles = cn(
    // "object-cover object-top rounded-xl group-hover/card:shadow-xl"
    "object-cover object-top group-hover/bento:scale-110 group-hover/card:shadow-xl transition rounded-xl",
    !isComplete && "blur-md"
  );
  //Dataflow:
  const randomDescription = useMemo(() => {
    return randomDescriptions[
      Math.floor(Math.random() * randomDescriptions.length)
    ];
  }, []);
  const projectAlt = `Preview image for the ${
    isComplete ? title : "future"
  } project`;
  const imageContainerStyles = cn(
    "relative flex w-full h-36 rounded-xl"

    // !isComplete && "backdrop-blue-sm"
  );
  const zCardBodyStyles = cn(
    " relative group/card border-black/[0.1] rounded-xl p-4 border ",
    level === 0 && "hover:shadow-sky-500/5",
    level === 1 && "hover:shadow-lime-500/5",
    level === 2 && "hover:shadow-yellow-500/5",
    level === 3 && "hover:shadow-red-500/5",
    level === 4 && "hover:shadow-violet-500/5"
  );
  const variant =
    level === 0
      ? "default"
      : level === 1
      ? "beginner"
      : level === 2
      ? "intermediate"
      : level === 3
      ? "advanced"
      : "guru";

  const newSparkleColors = {
    guru: { first: "#a78bfa", second: "#c4b5fd" },
    advanced: { first: "#be123c", second: "#ef4444" },
    intermediate: { first: "#fbbf24", second: "#fcd34d" },
    beginner: { first: "#a3e635", second: "#bef264" },
    default: { first: "#38bdf8", second: "#bae6fd" },
  };

  return (
    <ProjectLink
      className={containerStyles}
      cancel={!isComplete}
      href={!isComplete ? "" : url}
      isExternalProject={isExternalProject}
    >
      <ZCardContainer
        containerClassName="relative h-full w-full"
        className="h-full w-full"
      >
        <ZCardBody className={zCardBodyStyles}>
          <PixelCard
            className="absolute top-0 left-0 rounded-xl"
            variant={variant}
          />
          <ZCardItem
            translateZ="100"
            className="relative flex w-full h-36 rounded-xl overflow-hidden"
          >
            <Image
              src={image}
              fill
              className={imageStyles}
              alt={projectAlt}
              loading="eager"
              priority
            />
            {!isComplete && (
              <ZCardItem
                translateZ="500"
                className="w-full h-full absolute top-0 left-0"
              >
                <AlmostReadySign level={level} />
              </ZCardItem>
            )}
            <ImageFg
              isExternalProject={isExternalProject}
              techs={techs}
              level={level}
            />
            {isNew && (
              <NewChip colors={newSparkleColors[variant]} sparklesCount={5}>
                New!
              </NewChip>
            )}
          </ZCardItem>
          <ZCardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 "
          >
            <ProjectTitle title={isComplete ? title : "?????"} level={level} />
          </ZCardItem>
          <ZCardItem
            as="div"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 "
          >
            <ProjectDescription
              description={isComplete ? description : randomDescription}
              level={level}
            />
          </ZCardItem>
          {!isComplete && <Ornamentals level={level} />}
        </ZCardBody>
      </ZCardContainer>
    </ProjectLink>
  );
}
