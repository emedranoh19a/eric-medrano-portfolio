import { cn } from "@/app/utils/utils";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Text({
  as: Tag = "p",
  preset,
  children,
  className,
  ...otherProps
}) {
  //Style:
  const textStyles = cn(
    "antialiased",
    ibmPlexSans.className,
    preset === 1 &&
      "text-[40px] sm:text-6xl lg:text-[88px] font-bold leading-[100%] tracking-tight",
    preset === 2 && "text-6xl leading-[110%] font-bold",
    preset === 3 && "text-[40px] leading-[110%] font-bold",
    preset === 4 && "text-base sm:text-lg lg:text-xl leading-[150%]", //Note: need font weight override: bold or normal
    preset === 5 && "text-base leading-[150%]",
    preset === 6 && "text-lg leading-[180%]",
    className
  );

  return (
    <Tag className={textStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
