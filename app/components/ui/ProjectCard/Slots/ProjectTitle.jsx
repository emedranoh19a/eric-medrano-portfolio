import { cn } from "@/app/utils/utils";

export default function ProjectTitle({ level, title, className }) {
  //Style:
  const titleStyles = cn(
    "font-bold text-neutral-600  mb-2 mt-2 decoration-2 underline-offset-2",
    level === 0 &&
      "group-hover/bento:underline group-hover/bento:decoration-sky-400",
    level === 1 &&
      "group-hover/bento:underline group-hover/bento:decoration-lime-500",
    level === 2 &&
      "group-hover/bento:underline group-hover/bento:decoration-yellow-500",
    level === 3 &&
      "group-hover/bento:underline group-hover/bento:decoration-red-700",
    level === 4 &&
      "group-hover/bento:underline group-hover/bento:decoration-violet-800",
    className
  );
  return <h4 className={titleStyles}>{title}</h4>;
}
