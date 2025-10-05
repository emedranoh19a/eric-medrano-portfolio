import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import Image from "next/image";
import { bgPatternCircles, illustrationPhones } from "../imageIndex";

export default function Banner() {
  return (
    <section className=" pb-[104px] sm:pb-[55px] lg:pb-0 relative z-0 ">
      {/* background */}
      <Background />
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12 sm:gap-14 lg:gap-[60px] max-w-[1100px] mx-auto">
        <DevicesIllustration />
        <Content />
      </div>
    </section>
  );
}
function Background() {
  const backgroundStyles = clsx(
    "absolute h-[75%] w-screen overflow-hidden",
    "bottom-0 left-1/2 -translate-x-[50vw] -z-10 lg:bottom-1/2 lg:translate-y-1/2",
    "bg-linear-to-br from-(--gradient-purple-start) to-(--gradient-purple-end)",
    "rounded-tr-[100px] rounded-bl-[100px]"
  );
  return (
    <div className={backgroundStyles}>
      <div className="relative w-full h-full">
        <Circles className="top-20 sm:top-0 left-1/2 lg:left-0 lg:-translate-x-1/5 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}
function DevicesIllustration() {
  return (
    <div className="w-[327px] h-[346px] lg:w-[472px] lg:h-[500px] mx-auto relative">
      <Image
        src={illustrationPhones}
        fill
        className="object-contain"
        alt="phones"
        priority={true}
      />
    </div>
  );
}
function Circles({ className = "" }) {
  const containerStyles = cn(
    "absolute w-[602px] lg:w-[1014px] aspect-square",
    className
  );
  return (
    <div className={containerStyles}>
      <div className="relative w-full h-full">
        <Image
          src={bgPatternCircles}
          fill
          className="object-contain"
          alt="circles"
        />
      </div>
    </div>
  );
}
function Content() {
  return (
    <div className="text-white text-center lg:text-left lg:place-self-center">
      <h2 className="preset-2 mb-8 sm:mb-4">State of the Art Infrastructure</h2>
      <p className="preset-5 max-w-[540px] mx-auto">
        With reliability and speed in mind, worldwide data centers provide the
        backbone for ultra-fast connectivity. This ensures your site will load
        instantly, no matter where your readers are, keeping your site
        competitive.
      </p>
    </div>
  );
}
