import { cn } from "@/app/utils/utils";
import Image from "next/image";
import Text from "./Text";

export default function Button({
  variant = "primary",
  className = "",
  text,
  icon = "",
  ...otherProps
}) {
  const buttonStyles = cn(
    "group relative z-0 uppercase",
    "py-5 px-6",
    "rounded-xl border-2 overflow-hidden",
    "flex gap-4",
    "focus:ring-2 focus:ring-offset-2 ",
    variant === "primary" &&
      "text-[var(--neutral-900)] border-[var(--neutral-900)] ring-[var(--neutral-700)] bg-[var(--light-salmon-50)]",
    variant === "alternate" &&
      "text-[var(--neutral-0)] border-[var(--neutral-0)] ring-[var(--neutral-0)] bg-[var(--neutral-900)]",

    className
  );
  const layerStyles = cn(
    "absolute inset-0 -z-10 transition-all ",
    "opacity-0 group-hover:opacity-100",
    variant === "primary" &&
      "bg-gradient-to-r from-[var(--light-salmon-100)] to-[var(--light-salmon-50)]",
    variant === "alternate" &&
      "bg-gradient-to-r from-[var(--neutral-700)] to-[var(--neutral-900)]"
  );

  return (
    <button className={buttonStyles} {...otherProps}>
      <div className={layerStyles} />
      <Text as="span" preset={6} className="w-full">
        {text}
      </Text>
      {icon === "up" && (
        <span className="relative aspect-square w-5">
          <Image
            className="object-contain"
            fill
            alt="up icon"
            src="/projects/beginner/tech-book-club-landing-page/icon-arrow-up.svg"
          />
        </span>
      )}
      {icon === "down" && (
        <span className="relative aspect-square w-5">
          <Image
            className="object-contain"
            fill
            alt="down icon"
            src="/projects/beginner/tech-book-club-landing-page/icon-arrow-down.svg"
          />
        </span>
      )}
    </button>
  );
}
