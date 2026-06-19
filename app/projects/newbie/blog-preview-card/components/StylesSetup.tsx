import { Figtree } from "next/font/google";
import { CSSProperties, ReactNode } from "react";

type StylesSetupProps = {
  children: ReactNode;
}
type CSSVariables = CSSProperties & {
  "--yellow": string,
  "--gray-950": string,
  "--gray-500": string,
}

const colors: CSSVariables = {
  "--yellow": "#f4d04e",
  "--gray-950": "#111111",
  "--gray-500": "#686868",
}

const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600"] });

export function StylesSetup({ children }: StylesSetupProps) {
  return (
    <div
      style={colors}
      className={`relative w-screen min-h-screen px-6 grid place-items-center bg-(--yellow)   ${figtree.className}`}
    >
      {children}
    </div>
  );
}
