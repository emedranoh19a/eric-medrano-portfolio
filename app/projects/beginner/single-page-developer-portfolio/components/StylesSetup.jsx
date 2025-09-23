import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});
export default function StylesSetup({ children }) {
  return (
    <div
      className={`w-full min-h-screen relative z-0 bg-(--black) text-white ${spaceGrotesk.className}`}
      style={{
        "--black": "#151515",
        "--dark-grey": "#242424",
        "--grey": "#D9D9D9",
        "--white": "#FFFFFF",
        "--green": "#4EE1A0",
        "--error": "#FF6F5B",
      }}
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-40">{children}</div>
    </div>
  );
}
