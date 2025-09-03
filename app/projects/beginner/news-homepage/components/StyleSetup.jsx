import { cn } from "@/app/utils/utils";

export default function StyleSetup({ children, className = "" }) {
  const containerCn = cn(
    "w-full min-h-screen relative z-0 pt-[28px] pb-20 sm:pb-20 lg:pt-[89px] lg:pb-[126px] px-4 sm:px-20 lg:px-[163px]",
    className
  );
  return (
    <div
      className={containerCn}
      style={{
        "--red-500": "#F15D51",
        "--gold-400": "#E9AA52",
        "--navy-600": "#5E607A",
        "--navy-950": "#00001A",
        "--grey-200": "#D8D8D8",
        "--grey-300": "#C5C6CE",
      }}
    >
      {children}
    </div>
  );
}
