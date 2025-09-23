import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { iconArrowLeft, iconArrowRight } from "../imageIndex";

export default function Arrow({ className, left = false, ...otherProps }) {
  const buttonStyles = cn(
    "grid place-items-center rounded-full transition-colors cursor-pointer",
    "w-16 aspect-square",
    "focus:outline-solid focus:outline-4 focus:outline-offset-4",
    "bg-(--neutral-900) focus:hover:bg-(--neutral-900) hover:bg-(--galactic-blue-500) focus:outline-(--galactic-blue-500)",
    className
  );
  return (
    <button className={buttonStyles} {...otherProps}>
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
