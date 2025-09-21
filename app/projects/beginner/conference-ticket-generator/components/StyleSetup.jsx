import Image from "next/image";
import { bgDesktop, bgMobile, bgTablet } from "../imageIndex";
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
      className={`antialiased w-full min-h-screen z-0 relative pt-10 ${inconsolata.className}`}
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
      <div className="w-full h-full">{children}</div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute inset-0 -z-10">
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
  );
}
