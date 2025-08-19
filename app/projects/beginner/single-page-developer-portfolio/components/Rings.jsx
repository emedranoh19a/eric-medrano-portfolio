import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { patternRings } from "../imageIndex";

export default function Rings({ className }) {
  const positionStyles = cn("absolute w-[530px] h-[129px]", className);
  return (
    <div className={positionStyles}>
      <div className="relative w-full h-full">
        <Image src={patternRings} fill className="object-contain" alt="" />
      </div>
    </div>
  );
}
