import { cn } from "@/app/utils/utils";
import Image from "next/image";

export default function Glow({ className }) {
  const containerStyles = cn("w-[684px] aspect-square absolute ", className);
  return (
    <div className={containerStyles}>
      <div className="w-full h-full relative">
        <Image
          src="/projects/beginner/tech-book-club-landing-page/pattern-glow.svg"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
