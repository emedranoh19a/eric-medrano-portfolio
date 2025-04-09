import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../../utils/utils";
import ProjectLink from "../../ProjectLink";
import ProjectBody from "./ProjectBody";
import ProjectImage from "./ProjectImage";
export function ProjectCard({
  className,
  index,
  hovering,
  hoveredSkill,
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
    "group/bento absolute flex flex-1 relative flex-col justify-start gap-2",
    "bg-white p-4",
    "border border-neutral-100 rounded-xl overflow-hidden",
    "hover:shadow-xl transition duration-200 shadow-input",
    isImportant ? "lg:col-span-2" : "col-span-1",
    className
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
        <ProjectImage
          image={image}
          title={title}
          isExternalProject={isExternalProject}
          techs={techs}
          level={level}
        />
        <ProjectBody title={title} description={description} />
        {!isComplete && <DevelopingLabel />}
        {/* </PixelCard> */}
      </ProjectLink>
    </motion.div>
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
