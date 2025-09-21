import { Plus_Jakarta_Sans } from "next/font/google";
import "../styles/typography.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function StyleSetup({ children }) {
  return (
    <div
      className={`min-h-screen w-full relative z-0 py-6 px-4 sm:pb-10 sm:px-8 lg:px-[165px] bg-[var(--neutral-200)] flex flex-col gap-16 sm:gap-20 lg:gap-32 ${plusJakartaSans.className}`}
      style={{
        "--neutral-0": "#ffffff",
        "--neutral-200": "#fff7f0",
        "--neutral-400": "#6a6662",
        "--neutral-900": "#030303",
        "--light-red-500": "#e16b5b",
        "--galactic-blue-500": "#755cde",
        "--summer-yellow-500": "#f6a560",
        "--pink-500": "#f39e9e",
        "--cyan-500": "#61c4b7",
        "--dark-purple-500": "#552049",
      }}
    >
      {children}
    </div>
  );
}
