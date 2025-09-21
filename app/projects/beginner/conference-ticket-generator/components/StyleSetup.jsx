import Image from "next/image";
import {
  bgDesktop,
  bgMobile,
  bgTablet,
  patternCircle,
  patternLines,
  patternSqLineBottomDesktop,
  patternSqLineBottomMobile,
  patternSqLineTop,
} from "../imageIndex";
import "../styles/typography.css";

import { Inconsolata } from "next/font/google";
//800 700 500 400

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});
export default function StyleSetup({ children }) {
  return (
    <div
      className={`antialiased w-full min-h-screen z-0 relative pt-10 ${inconsolata.className} overflow-y-hidden h-fit`}
      style={{
        "--neutral-900": "#0d082d",
        "--neutral-700": "#4b4869",
        "--neutral-500": "#8784a5",
        "--neutral-300": "#d1d0d5",
        "--neutral-0": "#fff",
        "--orange-700": "#e1604f",
        "--orange-500": "#f57463",
        "--gradient-start": "#f37362",
        "--gradient-end": "#fff",
      }}
    >
      <Background />
      <div className="w-[112px] h-[52px] sm:w-[232px] sm:h-[108px] lg:w-[446px] lg:h-[208px] absolute top-6 sm:top-24 right-0">
        <Image src={patternSqLineTop} alt="" fill className="object-contain" />
      </div>
      <div className="w-[300px] h-[210px] sm:w-[396px] sm:h-[276px] lg:w-[1246px] lg:h-[476px] lg:-translate-x-[10%] lg:translate-y-20 absolute -z-40 bottom-0 left-0">
        <div className="relative w-full h-full">
          <Image
            src={patternSqLineBottomDesktop}
            alt=""
            fill
            className="object-contain hidden lg:block"
          />
          <Image
            src={patternSqLineBottomMobile}
            alt=""
            fill
            className="object-contain block lg:hidden"
          />
        </div>
      </div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
}

function Background() {
  return (
    <>
      <div className="absolute inset-0 -z-50">
        <div className="w-full h-full relative">
          <Image
            src={bgDesktop}
            alt=""
            className="object-cover hidden lg:block"
            fill
          />
          <Image
            src={bgTablet}
            alt=""
            className="object-cover hidden sm:block lg:hidden"
            fill
          />
          <Image
            src={bgMobile}
            alt=""
            className="object-cover block sm:hidden"
            fill
          />
        </div>
      </div>
      <div className="absolute -z-50 w-[1266px] sm:w-[1404px] h-[778px] lg:w-[1864px] lg:h-[1100px] top-0 left-1/2 -translate-x-1/2">
        <div className="relative w-full h-full">
          <Image src={patternLines} alt="" fill className="object-contain" />
        </div>
      </div>
      <div className="absolute aspect-square w-[107px] sm:w-[217px] top-[548px] sm:top-[534px] right-2 lg:right-[285px] -z-40">
        <div className="w-full h-full relative">
          <Image src={patternCircle} alt="" fill className="object-contain" />
        </div>
      </div>
    </>
  );
}
