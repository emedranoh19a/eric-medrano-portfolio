import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { ImNewTab } from "react-icons/im";
import TechIcons from "../../TechIcons";

export default function ProjectImage({
  image,
  title,
  isExternalProject,
  techs,
  level,
}) {
  //Style:
  const imageStyles = cn(
    "relative flex w-full h-36 bg-gray-50 rounded-xl overflow-hidden",
    "object-cover object-top"
  );
  return (
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
  );
}

function LevelLabel({ level }) {
  //Style:
  const labelStyles = cn(
    "absolute w-fit h-auto bottom-2 right-2 p-2 rounded-full text-[12px] font-semibold backdrop-blur-xs",
    level === 0 //newbie
      ? //everything is 60: opacity.
        "text-sky-100 bg-sky-500/50"
      : level === 1 //junior
      ? "text-lime-100 bg-lime-500/80"
      : level === 2 //intermediate "medium"
      ? "text-yellow-100 bg-yellow-500/80"
      : level === 3 //advanced "hard"
      ? "text-red-100 bg-red-500/70"
      : "text-violet-100 bg-violet-800/70", //guru
    ""
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
