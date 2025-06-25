import clsx from "clsx";
import Image from "next/image";
import Logo from "../components/Logo";
import Text from "../components/Text";

export default function Hero() {
  const sectionStyles = clsx(
    "relative z-0 container mx-auto flex flex-col gap-16 sm:gap-32 ",
    "py-16 px-5 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
  );
  return (
    <>
      <div className="absolute hidden sm:block top-0 right-0 sm:w-64 sm:h-96 lg:w-80 lg:h-[468px] -translate-y-10 translate-x-10 lg:translate-x-0">
        <Image
          src="/projects/newbie/equalizer-landing-page/bg-pattern-1.svg"
          fill
          alt=""
          className="object-contain"
        />
      </div>
      <section className={sectionStyles}>
        <Logo />
        <div className=" flex flex-col gap-10 ">
          <Text
            as="h1"
            preset={1}
            className="sm:max-w-[416px] lg:max-w-[928px]"
          >
            We make your music sound extraordinary.
          </Text>
          <Text preset={4} className="sm:max-w-[504px] lg:max-w-[736px]">
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ & volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </Text>
        </div>
      </section>
    </>
  );
}
