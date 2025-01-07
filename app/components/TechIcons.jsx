import { FaCss3Alt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiRedux, SiStyledcomponents } from "react-icons/si";
import { TbApi, TbBrandFramerMotion } from "react-icons/tb";

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
  switch (tech) {
    case "html":
      return (
        <FaHtml5
          className="w-5 h-fit fill-[#e34f26] block"
          style={{ filter: "drop-shadow(0 0 0.75rem #e34f26)" }}
        />
      );
    case "css":
      return (
        <FaCss3Alt
          className="w-5 h-fit fill-[#3C99DC] block"
          style={{ filter: "drop-shadow(0 0 0.75rem #3C99DC)" }}
        />
      );

    case "sass":
      return (
        <FaSass
          className="w-5 h-fit fill-[#c69] block"
          style={{ filter: "drop-shadow(0 0 0.75rem #c69)" }}
        />
      );
    case "styled-components":
      return (
        <SiStyledcomponents
          className="w-5 h-fit fill-[#c69] block"
          style={{ filter: "drop-shadow(0 0 0.75rem #c69)" }}
        />
      );
    case "react":
      return (
        <FaReact
          className="w-5 h-fit fill-[#61DBFB] block"
          style={{ filter: "drop-shadow(0 0 0.75rem #61DBFB)" }}
        />
      );
    case "api":
      return (
        <TbApi
          className="w-5 h-fit stroke-lime-400 block"
          style={{ filter: "drop-shadow(0 0 0.75rem #a3e635)" }}
        />
      );
    case "redux":
      return (
        <SiRedux
          className="w-5 h-fit fill-[#764abc] block"
          style={{ filter: "drop-shadow(0 0 0.75rem #764abc)" }}
        />
      );
    case "nextjs":
      return (
        <RiNextjsFill
          className="w-5 block"
          style={{ filter: "drop-shadow(0 0 0.75rem #000000)" }}
        />
      );
    case "tailwindcss":
      return (
        <RiTailwindCssFill
          className="w-5 h-fit fill-[#36b7f0] block"
          style={{ filter: "drop-shadow(0 0 0.75rem #36b7f0)" }}
        />
      );
    case "framer-motion":
      return (
        <TbBrandFramerMotion
          className="w-5 h-fit stroke-violet-800 block"
          style={{ filter: "drop-shadow(0 0 0.75rem #5b21b6)" }}
        />
      );

    default:
      return <div className=""></div>;
  }
}
