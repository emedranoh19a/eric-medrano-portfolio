import { cn } from "@/app/utils/utils";

export default function LevelChip({ level, className }) {
  //Style:
  const labelStyles = cn(
    //positioning classes (to get out.)
    "absolute bottom-2 right-2",
    "text-xs font-semibold",
    "w-fit h-fit px-2 py-1",
    "rounded-full  backdrop-blur-xs",
    level === 0 //newbie
      ? //everything is 60: opacity.
        "text-sky-100 bg-sky-500/50"
      : level === 1 //junior
      ? "text-lime-100 bg-lime-500/80"
      : level === 2 //intermediate "medium"
      ? "text-yellow-100 bg-yellow-500/80"
      : level === 3 //advanced "hard"
      ? "text-red-100 bg-red-500/70"
      : "text-violet-100 bg-violet-800/70", //guru
    className
  );

  //Dataflow:
  const levelText =
    level === 0
      ? "Newbie"
      : level === 1
      ? "Junior"
      : level === 2
      ? "Medium"
      : level === 3
      ? "Hard"
      : "Guru";

  return (
    <div className={labelStyles} style={{ textShadow: "1px 1px 10px #ffffff" }}>
      {levelText}
    </div>
  );
}
