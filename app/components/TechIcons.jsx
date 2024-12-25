import { FaCss3Alt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export default function TechIcons({ techs = [] }) {
  return (
    <div className="flex justify-end items-center gap-1">
      {techs.map((tech, i) => (
        <TechIcon key={i} tech={tech} />
      ))}
    </div>
  );
}

function TechIcon({ tech }) {
  switch (tech) {
    case "html":
      return <FaHtml5 className="w-5 h-fit fill-[#e34f26] block" />;
    case "css":
      return <FaCss3Alt className="w-5 h-fit fill-[#3C99DC] block" />;

    case "sass":
      return <FaSass className="w-5 h-fit fill-[#c69] block" />;
    case "react":
      return <FaReact className="w-5 h-fit fill-[#61DBFB] block" />;
    case "redux":
      return <SiRedux className="w-5 h-fit fill-[#764abc] block" />;
    case "nextjs":
      return <RiNextjsFill className="w-5 block" />;
    case "tailwindcss":
      return <RiTailwindCssFill className="w-5 h-fit fill-[#36b7f0] block" />;
    case "framer-motion":
      return (
        <TbBrandFramerMotion className="w-5 h-fit stroke-violet-800 block" />
      );

    default:
      return <div className=""></div>;
  }
}
