import { cn } from "@/app/utils/utils";

export default function Subtitle({ text, className = "" }) {
  const subtitleStyles = cn(
    "preset-2 text-dark-navy mb-16 lg:mb-[105px]",
    className
  );
  return <h2 className={subtitleStyles}>{text}</h2>;
}
