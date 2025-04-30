import { cn } from "@/app/utils/utils";
import { Homemade_Apple } from "next/font/google";
const homemadeApple = Homemade_Apple({
  subsets: ["latin"],
  weight: ["400"],
});

export default function AlmostReadySign({ level }) {
  const styles = cn(
    "absolute grid place-items-center w-full h-full text-2xl font-bold -rotate-12",
    "bg-gradient-to-r bg-clip-text text-transparent group-hover/bento:scale-150 transition ease-in-out",

    level === 0 && "from-sky-200 to-sky-500 ",
    level === 1 && "from-lime-300 to-lime-500",
    level === 2 && "from-yellow-300 to-yellow-500",
    level === 3 && "from-red-300 to-red-800",
    level === 4 && "from-violet-300 to-violet-900",

    homemadeApple.className
  );
  return (
    <div className={styles}>
      Almost
      <br />
      ready...
    </div>
  );
}
