import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { iconCalculator } from "../imageIndex";
import Text from "./Text";

export default function Button({ text = "button", className, ...otherProps }) {
  const buttonStyles = cn(
    "relative group z-0 overflow-hidden w-fit",
    "flex gap-3 items-center",
    "bg-(--lime) py-4 px-10 rounded-full",
    className
  );
  return (
    <button type="submit" className={buttonStyles} {...otherProps}>
      <div className="absolute -z-10 inset-0 bg-white/0 group-hover:bg-white/50 transition-colors" />
      <Image
        height={24}
        width={24}
        alt="calculator icon"
        src={iconCalculator}
      />
      <Text as="span" preset={3} className="text-(--slate-900)">
        {text}
      </Text>
    </button>
  );
}
