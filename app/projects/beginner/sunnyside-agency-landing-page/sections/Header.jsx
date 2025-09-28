import Image from "next/image";
import Navbar from "../components/Navbar";
import { iconArrowDown, imgHeader } from "../imageIndex";

export default function Header() {
  return (
    <header className="px-6 sm:px-10 pt-8 sm:pt-12 lg:pt-8 pb-[140px] sm:pb-[326px] lg:pb-[342px] relative z-0">
      <div className="-z-10 w-full h-full absolute top-0 left-1/2 -translate-x-[50vw] w-screen">
        <div className="relative w-full h-full fill-white text-white">
          <Image
            src={imgHeader.mobile}
            alt="orange"
            fill
            className="object-cover sm:hidden"
          />
          <Image
            src={imgHeader.desktop}
            alt="orange"
            fill
            className="object-cover hidden sm:block"
          />
        </div>
      </div>
      <div className="flex flex-col gap-20 sm:gap-18 lg:gap-24">
        <Navbar />
        <HeaderContent />
      </div>
    </header>
  );
}
//80 72 96
function HeaderContent() {
  return (
    <div className="flex flex-col gap-12 sm:gap-18 lg:gap-24">
      <h1 className="preset-2 sm:preset-1 text-white sm:max-w-[414px] lg:max-w-none mx-auto text-center">
        We are creatives
      </h1>
      <div className="relative w-[30px] h-[107px] mx-auto">
        <Image
          src={iconArrowDown}
          alt="down arrow"
          className="object-contain"
          fill
        />
      </div>
    </div>
  );
}
