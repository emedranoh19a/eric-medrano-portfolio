import { FaCss3Alt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiReactquery,
  SiRedux,
  SiStyledcomponents,
  SiSupabase,
} from "react-icons/si";
import { TbApi, TbBrandFramerMotion } from "react-icons/tb";
import { cn } from "../utils/utils";

export default function TechIcons({ techs = [] }) {
  return (
    <div className="flex justify-end items-center gap-1">
      {techs.map((tech, i) => (
        <TechIcon key={i} tech={tech} />
      ))}
    </div>
  );
}

export function TechIcon({ tech }) {
  const commonStyles = "w-4 h-fit block";
  switch (tech) {
    case "html":
      return (
        <FaHtml5
          className={cn(commonStyles, "fill-[#e34f26]")}
          style={{ filter: "drop-shadow(0 0 0.75rem #e34f26)" }}
        />
      );
    case "css":
      return (
        <FaCss3Alt
          className={cn(commonStyles, "fill-[#3C99DC]")}
          style={{ filter: "drop-shadow(0 0 0.75rem #3C99DC)" }}
        />
      );

    case "sass":
      return (
        <FaSass
          className={cn(commonStyles, "fill-[#c69]")}
          style={{ filter: "drop-shadow(0 0 0.75rem #c69)" }}
        />
      );
    case "styled-components":
      return (
        <SiStyledcomponents
          className={cn(commonStyles, "fill-[#c69]")}
          style={{ filter: "drop-shadow(0 0 0.75rem #c69)" }}
        />
      );
    case "react":
      return (
        <FaReact
          className={cn(commonStyles, "fill-[#61DBFB]")}
          style={{ filter: "drop-shadow(0 0 0.75rem #61DBFB)" }}
        />
      );
    case "api":
      return (
        <TbApi
          className={cn(commonStyles, "stroke-lime-400")}
          style={{ filter: "drop-shadow(0 0 0.75rem #a3e635)" }}
        />
      );
    case "redux":
      return (
        <SiRedux
          className={cn(commonStyles, "fill-[#764abc]")}
          style={{ filter: "drop-shadow(0 0 0.75rem #764abc)" }}
        />
      );
    case "nextjs":
      return (
        <RiNextjsFill
          className="w-5"
          style={{ filter: "drop-shadow(0 0 0.75rem #000000)" }}
        />
      );
    case "tailwindcss":
      return (
        <RiTailwindCssFill
          className={cn(commonStyles, "fill-[#36b7f0]")}
          style={{ filter: "drop-shadow(0 0 0.75rem #36b7f0)" }}
        />
      );
    case "framer-motion":
      return (
        <TbBrandFramerMotion
          className={cn(commonStyles, "stroke-violet-800")}
          style={{ filter: "drop-shadow(0 0 0.75rem #5b21b6)" }}
        />
      );
    case "tanstack-query":
      return (
        <SiReactquery
          className={cn(commonStyles, "fill-[#f73f51]")}
          style={{ filter: "drop-shadow(0 0 0.75rem #f73f51 )" }}
        />
      );
    case "supabase":
      return (
        <SiSupabase
          className={cn(commonStyles, "fill-[#3dc88b]")}
          style={{ filter: "drop-shadow(0 0 0.75rem #3dc88b )" }}
        />
      );
    //#3dc88b

    default:
      return <div className=""></div>;
  }
}
