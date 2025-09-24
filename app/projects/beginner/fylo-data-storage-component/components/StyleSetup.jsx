import { Raleway } from "next/font/google";
import Image from "next/image";
import { bgDesktop, bgMobile } from "../imageIndex";
import "../theme.css";

const raleway = Raleway({ subsets: ["latin"], weight: ["500", "700", "800"] });
//TODO: install the raleway font
export default function StyleSetup({ children }) {
  return (
    <div
      className={`bg-blue-950 min-h-screen w-full relative px-6 z-0 grid place-items-center ${raleway.className}`}
    >
      <div className="w-full h-full absolute -z-10 sm:h-[347px] sm:bottom-0 lg:h-[420px]">
        <div className="w-full h-full relative z-0 ">
          <div className="bg-transparent absolute inset-0 z-10" />
          <Image
            src={bgMobile}
            fill
            className="object-cover sm:hidden"
            alt=""
          />
          <Image
            src={bgDesktop}
            fill
            className="object-fill hidden sm:block"
            alt=""
          />
        </div>
      </div>
      {children}
    </div>
  );
}
