import { Space_Grotesk } from "next/font/google";
import "../styles/typography.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500"] });
export default function StylesSetup({ children }) {
  // - Red (input errors): hsl(0, 100%, 66%)
  return (
    <div
      className={`antialiased overflow-auto min-h-screen bg-white w-full pt-8 relative z-0 grid lg:place-items-center mx-auto  ${spaceGrotesk.className}`}
      style={{
        "--gray-950": "#2f2f2f",
        "--gray-400": "#adb5be",
        "--gray-200": "#dfdee0",
        "--purple-950": "#21092f",
        "--purple-500": "#d53aff",
        "--orange-400": "#ff834a",
        "--blue-400": "#47a2ff",
        "--red-400": "#ff5050",
        "--gradient-white-start": "#ffffff",
        "--gradient-white-end": "#d2d3d9",
        "--gradient-purple-start": "#6348fe",
        "--gradient-purple-end": "#610595",
      }}
    >
      {children}
    </div>
  );
}
