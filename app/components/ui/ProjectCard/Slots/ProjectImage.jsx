import { cn } from "@/app/utils/utils";
import { Homemade_Apple } from "next/font/google";
import Image from "next/image";
import { ImNewTab } from "react-icons/im";
import TechIcons from "../../../TechIcons";
import LevelChip from "./LevelChip";
const homemadeApple = Homemade_Apple({
  subsets: ["latin"],
  weight: ["400"],
});
export default function ProjectImage({
  image,
  isExternalProject,
  techs,
  title,
  level,
  isComplete = true,
}) {
  //Style:
  const imageContainerStyles = cn(
    "relative flex w-full h-36 bg-gray-50 rounded-xl overflow-hidden",
    "object-cover object-top"
    // !isComplete && "backdrop-blue-sm"
  );
  const imageStyles = cn(
    "object-cover object-top scale-120 group-hover/bento:scale-75 transition",
    !isComplete && "blur-md"
  );
  const projectAlt = `Preview image for the ${
    isComplete ? title : "future"
  } project`;
  return (
    <div className={imageContainerStyles}>
      <Image
        src={image}
        fill
        className={imageStyles}
        alt={projectAlt}
        loading="eager"
        priority
      />
      {isExternalProject && (
        <ImNewTab className="absolute top-2 right-2 text-2xl w-6 h-6 fill-white/60 backdrop-shadow-sm group-hover/bento:fill-white group-hover/bento:scale-[1.2] transition-colors" />
      )}
      <div className="absolute w-fit h-auto bottom-2 left-2 bg-white/60 p-2 rounded-full">
        <TechIcons techs={techs} />
      </div>
      <LevelChip level={level} />
      {!isComplete && <AlmostReady level={level} />}
    </div>
  );
}
function AlmostReady({ level }) {
  const styles = cn(
    "absolute grid place-items-center w-full h-full text-2xl font-bold -rotate-12",
    "bg-linear-to-r bg-clip-text text-transparent group-hover/bento:scale-150 transition ease-in-out",

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
