//TODO:

//Separate in smaler components.

import Image from "next/image";
import Link from "next/link";
import { FaCss3Alt, FaHtml5, FaSass } from "react-icons/fa6";
import { cn } from "../utils/utils";

//Get the Demo code.

//Refactor. Think of the data structure of the data structure of our projects.

export function BentoGrid({ className, children }) {
  //Style:
  const containerStyles = cn(
    "nax-w-7xl mx-auto",
    "grid gap-4 grid-cols-1 md:auto-rows-[18rem] md:grid-cols-3 lg:grid-cols-4 ",
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
  externalProject,
  level,
  techs = [],
  important = false,
}) {
  //Style:
  const containerStyles = cn(
    "group/bento flex flex-1 flex-col justify-start gap-2",
    "bg-white p-4",
    "border border-neutral-100 rounded-xl",
    //TODO: Give relevance to the project. If it is really relevant, it should expand maximum 2
    "hover:shadow-xl transition duration-200 shadow-input",
    important ? "col-span-2" : "col-span-1",
    className
  );

  const imageStyles = cn(
    "relative flex w-full h-36 bg-gray-50 rounded-xl overflow-hidden",
    "object-cover object-top"
  );

  return (
    <ProjectLink
      href={url}
      externalProject={externalProject}
      className={containerStyles}
    >
      {/* TODO: This should be an image, from NextJS */}
      <div className={imageStyles}>
        <Image
          src={image}
          // width={600}
          // height={600}
          fill={true}
          objectFit="cover"
          objectPosition="top"
          alt={`Preview image for the ${title} project`}
        />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <TechChips techs={techs} />
        <div className="font-sans font-bold text-neutral-600  mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </ProjectLink>
  );
}

function ProjectLink({ externalProject, href, children, className = "" }) {
  return (
    <Link
      href={href}
      passHref={externalProject}
      className={className}
      // target={externalProject ? "_blank" : ""}
    >
      {children}
    </Link>
  );
}

function TechChips({ techs = [] }) {
  return (
    <div className="flex justify-end">
      {techs.map((tech, i) => (
        <TechChip key={i} tech={tech} />
      ))}
    </div>
  );
}

function TechChip({ tech }) {
  switch (tech) {
    case "html":
      return <FaHtml5 className="w-5 fill-[#e34f26] block" />;
    case "css":
      return <FaCss3Alt className="w-5 fill-[#264DE4] block" />;

    case "sass":
      return <FaSass className="w-5 fill-[#c69] block" />;

    default:
      return <div className=""></div>;
  }
}

//TODO: :Data structure of a single project:

//Name of the project/
//Type (Filterable?): Study, Training, Fighting.
//Tech(filterable): array of "relevant" technologies used in the project.
//Difficulty (filterable?, and sortable):

//Image:
//Image alternative.
//Little logos indicator, and brand colors for the technogies used.
//external. (Indicates if the project should open in another page.)
// Logos will depend on the tech array.
