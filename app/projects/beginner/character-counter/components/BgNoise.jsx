import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function BgNoise() {
  //State:
  const { isDark } = useTheme();
  const imgSrc = `/projects/beginner/character-counter/bg-${
    !isDark ? "light" : "dark"
  }-theme.png`;
  return (
    <div className="absolute -z-10 w-full h-full top-0 left-0 ">
      <div className="w-full h-full relative">
        <Image src={imgSrc} fill className="bg-gray-400 object-cover" />
      </div>
    </div>
  );
}
