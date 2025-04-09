import { cn } from "@/app/utils/utils";

export default function ProjectBody({ title, description, level }) {
  //Style:
  const titleStyles = cn(
    "font-sans font-bold text-neutral-600  mb-2 mt-2",
    level === 0 &&
      "group-hover/bento:text-sky-400 group-hover/bento:underline group-hover/bento:decoration-sky-400",
    level === 1 &&
      "group-hover/bento:text-lime-500 group-hover/bento:underline group-hover/bento:decoration-lime-500",
    level === 2 &&
      "group-hover/bento:text-yellow-500 group-hover/bento:underline group-hover/bento:decoration-yellow-500",
    level === 3 &&
      "group-hover/bento:text-red-700 group-hover/bento:underline group-hover/bento:decoration-red-700",
    level === 4 &&
      "group-hover/bento:text-violet-800 group-hover/bento:underline group-hover/bento:decoration-violet-800"
  );
  const descriptionStyles = cn(
    "font-sans font-normal text-neutral-400 transition-colors text-xs",
    level === 0 && "group-hover/bento:text-sky-950",
    level === 1 && "group-hover/bento:text-lime-950",
    level === 2 && "group-hover/bento:text-yellow-950",
    level === 3 && "group-hover/bento:text-red-950",
    level === 4 && "group-hover/bento:text-violet-950"
  );
  return (
    <div className="group-hover/bento:translate-x-2 transition duration-200">
      <div className="flex flex-row justify-between">
        <div className={titleStyles}>{title}</div>
        {/* <TechIcons techs={techs} /> */}
      </div>
      <div className={descriptionStyles}>{description}</div>
    </div>
  );
}
