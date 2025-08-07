import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { bgPatternDesktop } from "../imageIndex";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});
export default function StyleSetup({ children }) {
  return (
    <div
      className={`w-full min-h-screen lg:flex lg:justify-between lg:gap-20 justify-start lg:pl-[165px]  relative z-0 pt-8 pb-[92px] sm:pb-[62px] lg:pt-0 lg:pb-0 bg-gradient-to-br from-[var(--gradient-2-start)] to-[var(--gradient-2-end)] ${josefinSans.className}`}
      style={{
        "--gray-900": "#423a3a",
        "--red-400": "#f96464",
        "--pink-400": "#ce9898",
        "--gradient-1-start": "#f8bfbf",
        "--gradient-1-end": "#ee8b8b",
        "--gradient-2-start": "#ffffff",
        "--gradient-2-end": "#fff4f4",
        "--gradient-3-start": "#fff1f1",
        "--gradient-3-end": "#ffffff",
      }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full relative">
          <Image src={bgPatternDesktop} alt="" fill className="object-cover" />
        </div>
      </div>
      {children}
    </div>
  );
}
