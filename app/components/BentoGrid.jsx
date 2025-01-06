"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ImNewTab } from "react-icons/im";
import { cn } from "../utils/utils";
import ProjectLink from "./ProjectLink";
import TechIcons from "./TechIcons";
export function BentoGrid({ className, children }) {
  //Style:
  const containerStyles = cn(
    "max-w-80 xl:max-w-5xl 2xl:max-w-7xl mx-auto md:p-2 px-[20vw] sm:px-44",
    "grid gap-4 grid-cols-1 md:auto-rows-[18rem] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ",
    "grid-flow-row-dense" //This will positionate the items in the grid.
  );
  return <div className={cn(containerStyles, className)}>{children}</div>;
}

export function BentoGridItem({
  className,
  title,
  description,
  image,
  url,
  level,
  techs = [],
  isImportant = false,
  isComplete,
  isPublic = false,
  isExternalProject,
  index,
  hovering,
  hoveredSkill,
}) {
  //Style:
  // const containerStyles = cn(
  //   "group/bento flex flex-1 relative flex-col justify-start gap-2",
  //   "bg-white p-4",
  //   "border border-neutral-100 rounded-xl overflow-hidden",
  //   "hover:shadow-xl transition duration-200 shadow-input",
  //   isImportant ? "md:col-span-2" : "col-span-1",
  //   // !isComplete &&
  //   // "after:absolute after:content-['developing...'] after:text-yellow-300 after:w-40 after:h-fit after:bg-slate-950 after:top-0 after:left-0 after:text-center after:text-xs after:-rotate-45 after:translate-y-5 after:-translate-x-10 after:text-2xs",
  //   className
  // );
  const containerStyles = cn(
    "group/bento absolute flex flex-1 relative flex-col justify-start gap-2",
    "bg-white p-4",
    "border border-neutral-100 rounded-xl overflow-hidden",
    "hover:shadow-xl transition duration-200 shadow-input",
    isImportant ? "md:col-span-2" : "col-span-1",
    className
  );

  const imageStyles = cn(
    "relative flex w-full h-36 bg-gray-50 rounded-xl overflow-hidden",
    "object-cover object-top"
  );

  return (
    <motion.div
      layout
      key={index}
      className={containerStyles}
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
    >
      {/* <motion.div
    
        className="w-full h-full"
      > */}
      <ProjectLink
        href={url}
        externalProject={isExternalProject}
        className={cn(
          "transition duration-200 scale-100",
          hovering && "opacity-50 scale-95 ",
          techs.includes(hoveredSkill) && "opacity-100 scale-[1.05]"
        )}
        // className={containerStyles}
      >
        <div className={imageStyles}>
          <Image
            src={image}
            fill={true}
            objectFit="cover"
            objectPosition="top"
            alt={`Preview image for the ${title} project`}
            loading="eager"
            priority
          />
          {isExternalProject && (
            <ImNewTab className="absolute top-2 right-2 text-2xl w-6 h-6 fill-white/60 backdrop-shadow-sm group-hover/bento:fill-white group-hover/bento:scale-[1.2] transition-colors" />
          )}
          <div className="absolute w-fit h-auto bottom-2 left-2 bg-white/60 p-2 rounded-full">
            <TechIcons techs={techs} />
          </div>
          <LevelLabel level={level} />
        </div>
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="flex flex-row justify-between">
            <div className="font-sans font-bold text-neutral-600  mb-2 mt-2">
              {title}
            </div>
            {/* <TechIcons techs={techs} /> */}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
        {!isComplete && <DevelopingLabel />}
      </ProjectLink>
    </motion.div>
  );
}
function LevelLabel({ level }) {
  //Style:
  const labelStyles = cn(
    "absolute w-fit h-auto bottom-2 right-2 p-2 rounded-full text-[12px] font-semibold",
    level === 0
      ? "text-pink-500 bg-pink-300/50" //newbie
      : level === 1
      ? "text-yellow-500 bg-yellow-100/60" //beginner
      : level === 2 //intermediate
      ? "text-orange-500 bg-orange-200/60" //beginner
      : level === 3
      ? "text-red-700 bg-red-400/60" //advanced
      : "text-violet-300 bg-violet-800/60" //guru
  );
  //Dataflow:
  const levelText =
    level === 0
      ? "Newbie"
      : level === 1
      ? "Junior"
      : level === 2
      ? "Medium"
      : level === 3
      ? "Hard"
      : "Guru";

  return (
    <div className={labelStyles} style={{ textShadow: "1px 1px 10px #ffffff" }}>
      {levelText}
    </div>
  );
}
function DevelopingLabel() {
  return (
    <>
      {/* <div className={labelStyles}>developing...</div> */}
      {/* <div
        className="w-full h-full absolute top-0 left-0 bg-[repeating-linear-gradient(45deg,#606dbc,#606dbc 10px,#465298 10px,#465298 20px)]"
        styles={{
          background:
            "repeating-linear-gradient(45deg,#606dbc,#606dbc 10px,#465298 10px,#465298 20px)",
        }}
      // ></div> */}
      {/* <div className="absolute object-contain  inline-block w-auto h-2 top-0 bg-[url(/caution-stripes.png)]"></div> */}
      <Image
        src="/caution-stripes.png"
        width={300}
        height={300}
        // fill
        // objectFit="contain"
        alt=""
        className="absolute inline-block w-auto h-3 -top-2 -left-4 -rotate-[20deg] scale-[1.3]"
      />
      <Image
        src="/caution-stripes.png"
        width={300}
        height={300}
        // fill
        // objectFit="contain"
        alt=""
        className="absolute inline-block w-auto h-3 -bottom-14 -rotate-[20deg] -right-10"
      />
      <Image
        src="/construction-sign.png"
        width={300}
        height={300}
        // fill
        // objectFit="contain"
        alt=""
        className="absolute inline-block w-20 h-20 -bottom-14 -right-2"
      />
    </>
  );
}
