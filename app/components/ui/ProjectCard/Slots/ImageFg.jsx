import TechIcons from "@/app/components/TechIcons";
import { ImNewTab } from "react-icons/im";
import LevelChip from "./LevelChip";

export default function ImageFg({ isExternalProject, techs, level }) {
  return (
    <>
      {isExternalProject && (
        <ImNewTab className="absolute top-2 right-2 text-2xl w-6 h-6 fill-white/60 backdrop-shadow-sm group-hover/bento:fill-white group-hover/bento:scale-[1.2] transition-colors" />
      )}
      <div className="absolute w-fit h-auto bottom-2 left-2 bg-white/60 p-2 rounded-full">
        <TechIcons techs={techs} />
      </div>
      <LevelChip level={level} />
    </>
  );
}
