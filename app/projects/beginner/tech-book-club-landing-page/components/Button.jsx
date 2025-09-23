import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { arrowDown, arrowUp } from "../imageIndex";
import Text from "./Text";

export default function Button({
  variant = "primary",
  className = "",
  text,
  icon = "",
  ...otherProps
}) {
  //Style:
  const buttonStyles = cn(
    "group relative z-0 uppercase",
    "py-5 px-6",
    "rounded-xl border-2 overflow-hidden",
    "flex gap-4",
    "focus:ring-2 focus:ring-offset-2 ",
    variant === "primary" &&
      "text-(--neutral-900) border-(--neutral-900) ring-(--neutral-700) bg-(--light-salmon-50)",
    variant === "alternate" &&
      "text-(--neutral-0) border-(--neutral-0) ring-(--neutral-0) bg-(--neutral-900)",

    className
  );
  const layerStyles = cn(
    "absolute inset-0 -z-10 transition-all ",
    "opacity-0 group-hover:opacity-100",
    variant === "primary" &&
      "bg-linear-to-r from-(--light-salmon-100) to-(--light-salmon-50)",
    variant === "alternate" &&
      "bg-linear-to-r from-(--neutral-700) to-(--neutral-900)"
  );
  //Dataflow:
  const alt = icon === "up" ? "up icon" : "down icon";
  const src = icon === "up" ? arrowUp : arrowDown;

  return (
    <button className={buttonStyles} {...otherProps}>
      <div className={layerStyles} />
      <Text as="span" preset={6} className="w-full">
        {text}
      </Text>
      <span className="relative aspect-square w-5">
        {icon === "up" && (
          <Image className="object-contain" fill alt={alt} src={src} />
        )}
      </span>
    </button>
  );
}
