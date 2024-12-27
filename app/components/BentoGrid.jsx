import Image from "next/image";
import { ImNewTab } from "react-icons/im";
import { cn } from "../utils/utils";
import ProjectLink from "./ProjectLink";
import TechIcons from "./TechIcons";

export function BentoGrid({ className, children }) {
  //Style:
  const containerStyles = cn(
    "max-w-80 xl:max-w-5xl mx-auto md:p-2 px-[20vw] sm:px-44",
    "grid gap-4 grid-cols-1 md:auto-rows-[18rem] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ",
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
}) {
  //Style:
  const containerStyles = cn(
    "group/bento flex flex-1 relative flex-col justify-start gap-2",
    "bg-white p-4",
    "border border-neutral-100 rounded-xl overflow-hidden",
    "hover:shadow-xl transition duration-200 shadow-input",
    isImportant ? "col-span-2" : "col-span-1",
    !isComplete &&
      "after:absolute after:content-['crafting...'] after:text-white after:w-40 after:h-fit after:bg-red-500 after:top-0 after:left-0 after:text-center after:-rotate-45 after:translate-y-5 after:-translate-x-10 after:text-2xs",
    className
  );

  const imageStyles = cn(
    "relative flex w-full h-36 bg-gray-50 rounded-xl overflow-hidden",
    "object-cover object-top"
  );

  return (
    <ProjectLink
      href={url}
      externalProject={isExternalProject}
      className={containerStyles}
    >
      <div className={imageStyles}>
        <Image
          src={image}
          fill={true}
          objectFit="cover"
          objectPosition="top"
          alt={`Preview image for the ${title} project`}
        />
        {isExternalProject && (
          <ImNewTab className="absolute top-2 right-2 text-2xl w-6 h-6 fill-white/60 backdrop-shadow-sm group-hover/bento:fill-white group-hover/bento:scale-[1.2] transition-colors" />
        )}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="flex flex-row justify-between">
          <div className="font-sans font-bold text-neutral-600  mb-2 mt-2">
            {title}
          </div>
          <TechIcons techs={techs} />
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </ProjectLink>
  );
}
