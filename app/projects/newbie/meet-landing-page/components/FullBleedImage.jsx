import clsx from "clsx";
import Image from "next/image";
import desktopLeftImg from "../images/desktop/image-hero-left.png";
import desktopRightImg from "../images/desktop/image-hero-right.png";
import tabletImg from "../images/tablet/image-hero.png";
export default function FullBleedImage() {
  const fullwidthStyles = clsx(
    "lg:hidden scale-[110%] sm:scale-[101%]",
    "h-40 sm:h-[303px]",
    "w-screen relative"
    //in case it is not centered with flex, use "left-1/2 ml-[-50vw]"
  );

  return (
    <>
      <div className="scale-125 -translate-y-12 -translate-x-6 -ml-8 relative hidden lg:block order-first flex-1 h-60">
        <Image
          src={desktopLeftImg}
          alt="avatars"
          fill
          className="object-contain"
        />
      </div>
      <div className="scale-125 translate-y-12 translate-x-6 -mr-8 relative hidden lg:block order-last flex-1 h-60">
        <Image
          src={desktopRightImg}
          alt="avatars"
          fill
          className="object-contain"
        />
      </div>
      <div className={fullwidthStyles}>
        <Image alt="avatars" src={tabletImg} fill className="object-contain" />
      </div>
    </>
  );
}
