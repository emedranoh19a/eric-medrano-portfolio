import Image from "next/image";
import { bgMainDesktop, bgMainMobile, bgMainTablet } from "../assetIndex";

export default function StylesSetup({ children }) {
  return (
    <div
      className="relative z-0 w-full min-h-screen bg-[var(--white)] overflow-x-hidden"
      style={{
        "--cyan": "#66E2DC",
        "--orange": "#FA7453",
        "--yellow": "#FFB964",
        "--white": "#FCFAF9",
        "--slate": "#191826",
      }}
    >
      <div className="absolute w-full h-full z-10">
        <Image
          className="object-cover sm:hidden"
          fill
          alt=""
          src={bgMainMobile}
        />
        <Image
          className="object-cover hidden sm:block lg:hidden"
          fill
          alt=""
          src={bgMainTablet}
        />
        <Image
          className="object-cover hidden sm:hidden lg:block"
          fill
          alt=""
          src={bgMainDesktop}
        />
      </div>
      <div className="w-full h-auto relative flex flex-col">{children}</div>
    </div>
  );
}
