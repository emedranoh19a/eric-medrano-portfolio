import Image from "next/image";
import { imageHeroDesktop, imageHeroMobile } from "../imageIndex";

export default function Illustration() {
  return (
    <div className="relative z-0 lg:order-1 lg:justify-self-end lg:self-end left-1/2 -translate-x-[50vw] lg:left-0 lg:-translate-x-0 w-screen lg:w-full lg:bottom-0 lg:place-self-end lg:h-[640px] lg:max-w-[480px]">
      <div className="absolute inset-0 z-10" />
      <Image
        src={imageHeroDesktop}
        alt="A man with a computer"
        width={1000}
        height={1000}
        style={{ height: "auto", width: "100%" }}
        className="object-contain hidden lg:block object-bottom"
      />
      <Image
        src={imageHeroMobile}
        alt="A man with a computer"
        style={{ height: "auto", width: "100%" }}
        className="object-fill lg:hidden"
      />
    </div>
  );
}
