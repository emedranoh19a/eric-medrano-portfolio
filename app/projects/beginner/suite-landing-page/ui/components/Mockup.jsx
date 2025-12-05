import Image from "next/image";
import { imageHeroLandscape, imageHeroPortrait } from "../../assetIndex";

export default function Mockup() {
  return (
    <div className="relative -z-10 sm:absolute sm:right-0 rounded-xl overflow-hidden  shrink-0 w-full h-[240px] sm:w-[280px] sm:h-[480px] lg:w-[350px] lg:h-[600px]">
      <Image
        src={imageHeroLandscape}
        alt="Mockup"
        className="object-cover sm:hidden"
        fill
      />
      <Image
        src={imageHeroPortrait}
        alt="Mockup"
        className="object-cover object-bottom hidden sm:block"
        fill
      />
    </div>
  );
}
