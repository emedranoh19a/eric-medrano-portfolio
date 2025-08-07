import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});
export default function StyleSetup({ children }) {
  return (
    <div
      className={`w-full min-h-screen relative z-0 ${josefinSans.className}`}
      style={{
        "--gray-900": "#423a3a",
        "--red-400": "#f96464",
        "--pink-400": "#ce9898",
        "--gradient-1-start": "#f8bfbf",
        "--gradient-1-end": "#ee8b8b",
        "--gradient-2-start": "#ffffff",
        "--gradient-2-end": "#fff4f",
        "--gradient-3-start": "#fff1f1",
        "--gradient-3-end": "#ffffff",
      }}
    >
      {children}
    </div>
  );
}
