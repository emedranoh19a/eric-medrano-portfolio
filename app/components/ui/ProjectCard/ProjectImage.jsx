import { cn } from "@/app/utils/utils";
import { Homemade_Apple } from "next/font/google";
import Image from "next/image";
import { ImNewTab } from "react-icons/im";
import TechIcons from "../../TechIcons";
const homemadeApple = Homemade_Apple({
  subsets: ["latin"],
  weight: ["400"],
});
export default function ProjectImage({
  image,
  title,
  isExternalProject,
  techs,
  level,
  isComplete = true,
}) {
  //TODO: Nothing you ucould do font.
  //Style:
  const imageContainerStyles = cn(
    "relative flex w-full h-36 bg-gray-50 rounded-xl overflow-hidden",
    "object-cover object-top"
    // !isComplete && "backdrop-blue-sm"
  );
  const imageStyles = cn(
    "object-cover object-top group-hover/bento:scale-110 transition",
    !isComplete && "blur-md"
  );
  return (
    <div className={imageContainerStyles}>
      <Image
        src={image}
        fill
        className={imageStyles}
        // objectFit="cover"
        // objectPosition="top"
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
      {!isComplete && <AlmostReady level={level} />}
    </div>
  );
}
function AlmostReady({ level }) {
  const styles = cn(
    "absolute grid place-items-center w-full h-full text-2xl font-bold -rotate-12",
    "bg-gradient-to-r bg-clip-text text-transparent group-hover/bento:scale-150 transition ease-in-out",

    level === 0 && "from-sky-200 to-sky-500 ",
    level === 1 && "from-lime-300 to-lime-500",
    level === 2 && "from-yellow-300 to-yellow-500",
    level === 3 && "from-red-300 to-red-800",
    level === 4 && "from-violet-300 to-violet-900",

    homemadeApple.className
  );
  return (
    <div className={styles}>
      Almost
      <br />
      ready...
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
