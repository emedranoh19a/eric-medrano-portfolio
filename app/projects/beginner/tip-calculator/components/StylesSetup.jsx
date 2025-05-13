import { Space_Mono } from "next/font/google";
//bold,
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["700"] });

export default function StylesSetup({ children }) {
  return (
    <div
      className={`w-full min-h-screen ${spaceMono.className}`}
      style={{
        //Grey
        "--grey-900": "#00474B",
        "--grey-800": "#085C61",
        "--grey-750": "#0D686D",
        "--grey-600": "#3D6666",
        "--grey-550": "#537878",
        "--grey-500": "#5E7A7D",
        "--grey-400": "#7F9D9F",
        "--grey-300": "#9EBBBD",
        "--grey-200": "#C5E4E7",
        "--grey-50": "#F3F9FA",
        //Green
        "--green-900": "#00474B",
        "--green-800": "#085C61",
        "--green-750": "#0D686D",
        "--green-400": "#26C2AE",
        "--green-200": "#9FE8DF",
        //Orange
        "--orange-400": "#E17052",
      }}
    >
      {children}
    </div>
  );
}
