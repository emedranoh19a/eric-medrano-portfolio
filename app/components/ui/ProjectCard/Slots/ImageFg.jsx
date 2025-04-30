import TechIcons from "@/app/components/TechIcons";
import { ImNewTab } from "react-icons/im";
import { ZCardItem } from "../ZCard";
import LevelChip from "./LevelChip";

export default function ImageFg({ isExternalProject, techs, level }) {
  return (
    <>
      {isExternalProject && (
        <ImNewTab className="absolute top-2 right-2 text-2xl w-6 h-6 fill-white/60 backdrop-shadow-sm group-hover/bento:fill-white group-hover/bento:scale-[1.2] transition-colors" />
      )}
      <ZCardItem
        translateZ={"90"}
        className="absolute w-fit h-auto bottom-2 left-2 bg-white/60 px-2 py-1 rounded-full"
      >
        <TechIcons techs={techs} />
      </ZCardItem>
      <LevelChip level={level} />
    </>
  );
}
