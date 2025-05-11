import { cn } from "@/app/utils/utils";
import { Barlow } from "next/font/google";
const barlow = Barlow({ subsets: ["latin"], weight: ["500", "700", "900"] });
export default function StylesSetup({ children }) {
  return (
    <div
      className={cn(
        "w-full min-h-screen antialiased bg-white",
        barlow.className
      )}
      style={{
        "--primary": "#F16718",
        "--primary-light": "#FF9B62",
        "--light-gray": "#E8EFF2",
        "--gray": "#7B8BAD",
        "--dark-gray": "#162542",
      }}
    >
      {children}
    </div>
  );
}
