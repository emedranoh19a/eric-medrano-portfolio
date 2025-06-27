import clsx from "clsx";
import Image from "next/image";
import Button from "../components/Button";
import Text from "../components/Text";

export default function Hero() {
  return (
    <header className="px-8 pt-16 pb-8">
      {/* The following snippet will full bleed the image, regadless of the container constraints */}
      {/* .full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
} */}
      <div className="relative z-0 flex flex-col lg:flex-row lg:w-full gap-12 sm:gap-18 items-center">
        <FullBleedImage />
        <Content />
      </div>
    </header>
  );
}

function FullBleedImage() {
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
          src="/projects/newbie/meet-landing-page/desktop/image-hero-left.png"
          alt="avatars"
          fill
          className="object-contain"
        />
      </div>
      <div className="scale-125 translate-y-12 translate-x-6 -mr-8 relative hidden lg:block order-last flex-1 h-60">
        <Image
          src="/projects/newbie/meet-landing-page/desktop/image-hero-right.png"
          alt="avatars"
          fill
          className="object-contain"
        />
      </div>
      <div className={fullwidthStyles}>
        <Image
          alt="avatars"
          src="/projects/newbie/meet-landing-page/tablet/image-hero.png"
          fill
          className="object-contain"
        />
      </div>
    </>
  );
}

function Content() {
  return (
    <div className="sm:max-w-[448px] text-center flex flex-col gap-6 lg:gap-8">
      <Text as="h1" preset={1} className="text-[var(--slate-900)]">
        Group Chat for Everyone
      </Text>
      <Text preset={4} className="text-[var(--slate-600)]">
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </Text>
      <div className="flex flex-col justify-center items-center sm:flex-row gap-4 sm:gap-[17px]">
        <Button />
        <Button variant="purple" text="What is it?" />
      </div>
    </div>
  );
}
