import { Barlow, Fraunces } from "next/font/google";
import "../theme.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--next-font-fraunces",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--next-font-barlow",
});

export default function StyleSetup({ children }) {
  return (
    <div
      className={`min-h-screen bg-white w-full relative z-0  ${fraunces.variable} ${barlow.variable}`}
    >
      {children}
    </div>
  );
}
