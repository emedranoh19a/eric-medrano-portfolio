import { cn } from "@/app/utils/utils";
import { Chivo } from "next/font/google";
const chivo = Chivo({ subsets: ["latin"], weight: ["100", "600"] });

export default function StylesSetup({ children, className }) {
  const styles = cn(
    chivo.className,
    "w-full h-full min-h-screen bg-(--blue-950)",
    className
  );
  return (
    <div
      style={{
        "--green": "#54E6AF",
        "--blue-950": "#121725",
        "--blue-900": "#2C344B",
        "--blue-600": "#5A668A",
        "--blue-300": "#C2CBE5",
        "--red": "#FB3E3E",
      }}
      className={styles}
    >
      {children}
    </div>
  );
}
