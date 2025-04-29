import { cn } from "@/app/utils/utils";
import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});
export default function Text({
  children,
  preset = 1,
  className = "",
  as: Tag = "p",
}) {
  const textStyles = cn(
    plusJakartaSans.className,
    "tracking-none antialiasing",
    preset === 1 && "text-5xl font-extrabold leading-[1.2]",
    preset === 2 && "text-4xl font-extrabold leading-[1.2]",
    preset === 3 && "text-3xl font-extrabold leading-[1.2]",
    preset === 4 && "text-2xl font-extrabold leading-[1.2]",
    preset === 5 && "text-lg font-medium leading-[1.5]",
    preset === 6 && "text-base font-bold leading-[1.5]",
    preset === 7 && "text-xlg font-bold leading-[1.5]",

    className
  );
  return <Tag className={textStyles}>{children}</Tag>;
}
