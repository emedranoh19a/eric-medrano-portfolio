import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { iconArrowLeft, iconArrowRight } from "../imageIndex";

export default function Arrow({ className, left = false }) {
  const buttonStyles = cn(
    "grid place-items-center rounded-full transition-colors ",
    "w-16 aspect-square",
    "focus:outline focus:outline-4 focus:outline-offset-4",
    "bg-[var(--neutral-900)] focus:hover:bg-[var(--neutral-900)] hover:bg-[var(--galactic-blue-500)] focus:outline-[var(--galactic-blue-500)]",
    className
  );
  return (
    <button className={buttonStyles}>
      <div className="w-[14.81px] h-4 relative">
        <Image
          src={left ? iconArrowLeft : iconArrowRight}
          alt={`arrow ${left ? "left" : "right"}`}
          fill
          className="object-contain"
        />
      </div>
    </button>
  );
}
