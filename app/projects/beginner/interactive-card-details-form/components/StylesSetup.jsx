import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500"] });
export default function StylesSetup({ children }) {
  // - Red (input errors): hsl(0, 100%, 66%)
  return (
    <div
      className={`min-h-screen w-full bg-violet-100 flex ${spaceGrotesk.className}`}
      style={{
        "--white": "hsl(0, 0%, 100%)",
        "--violet-50": "hsl(270, 3%, 87%)",
        "--violet-100": "hsl(279, 6%, 55%)",
        "--violet-900": "hsl(278, 68%, 11%)",
        "--gradient-start": "hsl(249, 99%, 64%)", //active input border
        "--gradient-end": "hsl(278, 94%, 30%)", //active input border
        "--error": "hsl(0, 100%, 66%)", //input errors
      }}
    >
      {children}
    </div>
  );
}
