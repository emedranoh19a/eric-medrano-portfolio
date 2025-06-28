import clsx from "clsx";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "700"] });

export default function StyleSetup({ children }) {
  const containerStyles = clsx(
    poppins.className,
    "grid place-items-center bg-[var(--red)] w-full min-h-screen",
    "pt-[88px] pb-16 px-6",
    "relative z-0"
  );
  return (
    <div
      className={containerStyles}
      style={{
        "--red": "hsl(0, 100%, 74%)",
        "--green": "#38cc8c",
        "--blue": "hsl(248, 32%, 49%)",
        "--dark-blue": "hsl(249, 10%, 26%) ",
        "--grayish-blue": "hsl(246, 25%, 77%)",
      }}
    >
      <div className="absolute -z-10 w-full h-full left-0 top-0">
        <div className="relative h-full w-full">
          <Image
            fill
            className="object-cover lg:hidden"
            src="/projects/newbie/intro-with-sign-up/bg-intro-mobile.png"
          />
          <Image
            fill
            className="object-cover hidden lg:block"
            src="/projects/newbie/intro-with-sign-up/bg-intro-desktop.png"
          />
        </div>
      </div>
      {children}
    </div>
  );
}
