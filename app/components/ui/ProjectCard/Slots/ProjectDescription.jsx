import { cn } from "@/app/utils/utils";

export default function ProjectDescription({
  level,
  description,
  isComplete,
  className = "",
}) {
  const descriptionStyles = cn(
    "font-normal text-neutral-400 transition-colors text-xs",
    level === 0 && "group-hover/bento:text-sky-950",
    level === 1 && "group-hover/bento:text-lime-950",
    level === 2 && "group-hover/bento:text-yellow-950",
    level === 3 && "group-hover/bento:text-red-950",
    level === 4 && "group-hover/bento:text-violet-950",
    className
  );
  return <p className={descriptionStyles}>{description}</p>;
}
