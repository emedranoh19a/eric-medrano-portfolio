import { Overpass, Ubuntu } from "next/font/google";
import "../theme.css";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["300", "600"],
  variable: "--next-overpass",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--next-ubuntu",
});

export default function StyleSetup({ children }) {
  return (
    <div
      className={` text-pretty overflow-x-hidden w-full h-full min-h-screen bg-white antialiased px-[14px] sm:px-10 lg-[164px] ${overpass.variable} ${ubuntu.variable}`}
      style={{
        "--gradient-purple-start": "#2d2e40",
        "--gradient-purple-end": "#3f4164",
        "--gradient-pink-start": "#ff8f71",
        "--gradient-pink-end": "#ff3e55",
      }}
    >
      {children}
    </div>
  );
}
