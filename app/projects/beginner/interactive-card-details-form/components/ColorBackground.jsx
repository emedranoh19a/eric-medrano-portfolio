import Image from "next/image";
import { bgMainDesktop, bgMainMobile } from "../imageIndex";

export default function ColorBackground() {
  return (
    <div className="w-screen h-[375px] sm:h-[340px] lg:w-[483px] lg:h-screen absolute top-0 left-0 -z-10">
      <div className="w-full h-full relative">
        <Image
          src={bgMainMobile}
          fill
          className="object-cover sm:hidden"
          alt="Background Image"
          priority={true}
        />
        <Image
          src={bgMainDesktop}
          fill
          className="object-cover hidden sm:block"
          alt="Background Image"
          priority={true}
        />
      </div>
    </div>
  );
}
