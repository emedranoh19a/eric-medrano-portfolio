import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function StyleSetup({ children }) {
  return (
    <div
      className={`w-full min-h-screen relative z-0 bg-[var(--blue-700)] grid place-items-center ${roboto.className}`}
      style={{
        "--grey": "#949494",
        "--red": "#FF6155",
        "--red-100": "#FFE7E6",
        "--blue-700": "#36384D",
        "--blue-800": "#242742",
        "--gradient-start": "#FF6A3A",
        "--gradient-end": "#FF527B",
      }}
    >
      {children}
    </div>
  );
}
