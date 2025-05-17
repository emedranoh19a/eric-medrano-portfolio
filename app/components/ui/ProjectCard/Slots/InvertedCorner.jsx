import { cn } from "@/app/utils/utils";

export default function InvertedCorner({
  className,
  boxShadow = "0 -100% 0 0 #ffffff",
}) {
  const cornerStyles = cn(
    "absolute w-10 aspect-square  bg-transparent rounded-tl-2xl",
    className
  );

  return <div className={cornerStyles} style={{ boxShadow }}></div>;
}
