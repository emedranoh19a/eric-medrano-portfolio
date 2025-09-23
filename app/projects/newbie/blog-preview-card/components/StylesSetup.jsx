import { Figtree } from "next/font/google";
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function StylesSetup({ children }) {
  return (
    <div
      style={{
        "--yellow": "#f4d04e",
        "--gray-950": "#111111",
        "--gray-500": "#686868",
      }}
      className={`relative w-full h-full min-h-screen bg-(--yellow) grid place-items-center ${figtree.className}`}
    >
      {children}
    </div>
  );
}
