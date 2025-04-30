import { cn } from "@/app/utils/utils";
import { FaHammer } from "react-icons/fa";
import { RiPaintBrushFill } from "react-icons/ri";

export default function Ornamentals({ level }) {
  //Style:
  const iconFillStyles = cn(
    "w-full h-full",
    level === 0 && "fill-sky-400/20",
    level === 1 && "fill-lime-500/20",
    level === 2 && "fill-yellow-500/20",
    level === 3 && "fill-red-700/20",
    level === 4 && "fill-violet-800/20"
  );
  return (
    <>
      <div className="aspect-square absolute w-28 transition group-hover/bento:rotate-12 group-hover/bento:scale-150 right-0 bottom-0">
        <RiPaintBrushFill className={iconFillStyles} />
      </div>

      <div
        className={cn(
          "absolute aspect-square w-20 transform",
          "right-24 bottom-0 -translate-x-14 rotate-90",
          "  [transform:scale(-1,1)]  group-hover/bento:[transform:scale(-1,1)_rotate(12deg)]  transition-transform"
        )}
      >
        <FaHammer className={iconFillStyles} />
      </div>
    </>
  );
}
