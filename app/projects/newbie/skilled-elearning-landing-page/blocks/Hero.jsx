import clsx from "clsx";
import Image from "next/image";
import Button from "../components/Button";
import Text from "../components/Text";
import { imgHeroDesktop, imgHeroMobile } from "../imageIndex";

export default function Hero() {
  return (
    <div className="-z-0 relative -mb-20 md:mb-0 grid grid-cols-1 md:grid-cols-2 grid-rows-[1fr_1fr] md:grid-rows-[1fr] px-5 py-16 pb-0 md:pb-16 md:px-10  xl:px-20 ">
      <Content />
      <Illustration />
    </div>
  );
}
function Content() {
  return (
    <div className="flex flex-col gap-12 md:gap-6 xl:gap-8">
      <div className="flex flex-col gap-6">
        <Text as="h1" preset={1}>
          Maximize skill, minimize budget
        </Text>
        <Text preset={5}>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </Text>
      </div>
      <Button variant="orange" />
    </div>
  );
}

function Illustration() {
  // public/projects/newbie/skilled-elearning-landing-page/assets/image-hero-tablet@2x.webp
  const imageContainerStyles = clsx(
    "relative md:absolute",
    "inline-block mx-auto",
    "h-80 w-80",
    "md:h-full md:w-1/2",
    "mx-auto z-0 md:top-0 md:right-0 self-center"
  );
  return (
    <div className={imageContainerStyles}>
      {/* Desktop image */}
      <Image
        alt="Developer drinking coffee"
        fill
        className="object-contain hidden md:block scale-150 translate-x-28 -translate-y-10"
        src={imgHeroDesktop}
      />
      {/* Mobile image */}
      <Image
        alt="Developer drinking coffee"
        fill
        className="object-contain inline-block md:hidden"
        src={imgHeroMobile}
      />
    </div>
  );
}
