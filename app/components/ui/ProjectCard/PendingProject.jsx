import { cn } from "@/app/utils/utils";
import { useMemo } from "react";
import { FaHammer } from "react-icons/fa6";
import { RiPaintBrushFill } from "react-icons/ri";
import ProjectBody from "./ProjectBody";
import ProjectImage from "./ProjectImage";

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
export default function PendingProject({
  isExternalProject,
  hovering,
  techs,
  image,
  level,
  hoveredSkill,
}) {
  const randomDescription = useMemo(() => {
    return randomDescriptions[
      Math.floor(Math.random() * randomDescriptions.length)
    ];
  }, []);
  //Style:
  const iconFillStyles = cn(
    "w-full h-full",
    level === 0 && "fill-sky-400/20",
    level === 1 && "fill-lime-500/20",
    level === 2 && "fill-yellow-500/20",
    level === 3 && "fill-red-700/20",
    level === 4 && "fill-violet-800/20"
  );

  /*



“Still catching pixels with a butterfly net.”
"Letting this one grow." */
  //Dataflow:
  //TODO: calculate a random number and select a description.
  return (
    <div
      //   href={url}
      //   externalProject={isExternalProject}
      className={cn(
        "relative transition duration-200 scale-100 p-4 w-full h-full",
        hovering && "opacity-50 scale-95 ",
        techs.includes(hoveredSkill) && "opacity-100 scale-[1.05]"
      )}
      // className={containerStyles}
    >
      <div className="aspect-square absolute w-28 transition group-hover/bento:rotate-12 group-hover/bento:scale-150 right-0 bottom-0">
        <RiPaintBrushFill className={iconFillStyles} />
      </div>
      {/* <div
        className="aspect-square transform-[scale(-1,1)] absolute w-20 right-20 bottom-0 -translate-x-10 group-hover/bento:-rotate-12 group-hover/bento:scale-125 transition"
        style={{ transform: "scale(-1,1)" }}
      >
        <FaHammer className={iconFillStyles} />
      </div> */}
      <div
        className={cn(
          "absolute aspect-square w-20 transform",
          "right-24 bottom-0 -translate-x-14 rotate-90",
          "  [transform:scale(-1,1)]  group-hover/bento:[transform:scale(-1,1)_rotate(12deg)]  transition-transform"
        )}
        // style={{ transform: "scale(-1, 1)" }}
      >
        <FaHammer className={iconFillStyles} />
      </div>
      <ProjectImage
        image={image}
        title="developing (future) "
        isComplete={false}
        isExternalProject={isExternalProject}
        techs={techs}
        level={level}
      />
      <ProjectBody
        title="?????"
        description={randomDescription}
        level={level}
      />
      {/* {!isComplete && <DevelopingLabel />} */}
    </div>
  );
}
