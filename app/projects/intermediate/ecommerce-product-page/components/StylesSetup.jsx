import { cn } from "@/app/utils/utils";
import { Kumbh_Sans } from "next/font/google";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function StylesSetup({ className, children }) {
  return (
    <div
      className={cn(
        "max-w-screen min-h-screen flex flex-col",
        kumbhSans.className,
        className
      )}
      style={{
        "--orange": "hsl(26, 100%, 55%)",
        "--pale-orange": "hsl(25, 100%, 94%)",
        "--very-dark-blue": "hsl(220, 13%, 13%)",
        "--dark-grayish-blue": "hsl(219, 9%, 45%)",
        "--grayish-blue": "hsl(220, 14%, 75%)",
        "--light-grayish-blue": "hsl(223, 64%, 98%)",
        "--white": "hsl(0, 0%, 100%)",
        //Note: The following black has 75% opacity for lightbox background.
        "--black": "hsl(0, 0%, 0%)",
      }}
    >
      {children}
    </div>
  );
}
