import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { patternGlow } from "../imageIndex";

export default function Glow({ className }) {
  const containerStyles = cn("w-[684px] aspect-square absolute ", className);
  return (
    <div className={containerStyles}>
      <div className="w-full h-full relative">
        <Image src={patternGlow} fill className="object-contain" />
      </div>
    </div>
  );
}
