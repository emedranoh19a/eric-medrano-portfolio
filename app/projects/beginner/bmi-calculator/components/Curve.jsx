import { cn } from "@/app/utils/utils";
import Image from "next/image";
import leftPattern from "../images/pattern-curved-line-left.svg";
import rightPattern from "../images/pattern-curved-line-right.svg";
export default function Curve({ left = false, className }) {
  const positionStyles = cn(
    "absolute",
    left ? "w-[94px] h-[122px]" : "w-[85px] h-[200px]",
    className
  );
  //left 94x122
  //right: 85x200
  return (
    <div className={positionStyles}>
      <div className="relative w-full h-full">
        <Image
          src={left ? leftPattern : rightPattern}
          fill
          className="object-contain"
          alt=""
        />
      </div>
    </div>
  );
}
