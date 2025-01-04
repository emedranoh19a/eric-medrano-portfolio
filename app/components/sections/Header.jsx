"use client";

import { cn } from "@/app/utils/utils";
import Cat from "../Cat";
import BoxReveal from "../effects/BoxReveal";
import FadedText from "../ui/FadedText";
import MainTitle from "../ui/MainTitle";

export default function Header() {
  //State:
  {
    /* TODO: Hero section. with contact links? */
  }
  //Style:
  //For sizing purposes
  const catContainerStyles = cn(
    // "absolute w-full h-screen  bg-red-500 z-20",
    " overflow-y-visible",
    "absolute w-full h-screen bottom-0 translate-y-5/6",
    "scale-[0.7] lg:scale-[1] xl:scale-[1.6] 2xl:scale-[1.6] overflow-hidden",
    ""
  );
  // TODO: probably we need here the bsolute positioning.
  const catStyles = cn(
    "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  w-[94%] h-[94%]  overflow-y-visible",
    "-mt-28 md:-mt-20 lg:mt-14 xl:mt-28 2xl:mt-32" //20, 24, 28,
    //TODO: Use the measures above to add some padding to the about section.
    //TODO: Adjust the z-index for the section, then for the navigation
    // " h-96 aspect-square",
    // "bottom-0 translate-y-[0%]"
    // "md:translate-y-[40%]"

    //  " left-1/2 -translate-x-1/2   ",
  );
  //   const idle = useStateMachineInput(rive, "State Machine 1", "Idle");

  return (
    <section
      className="relative w-full min-h-screen h-[120vh] overflow-y-visible overflow-x-hidden z-0 py-40 xl:-mt-20"
      id="home"
    >
      <Content />
      <div className={catContainerStyles}>
        <Cat className={catStyles} />
      </div>
      {/* <div className={catContainer}> */}
      {/* <div className={catPosition}> */}
      {/* <Cat className={catStyles} /> */}
      {/* </div> */}
    </section>
  );
}

function Content() {
  return (
    <div className="relative mt-4 lg:mt-20">
      <MainTitle
        className="text-center text-4xl font-semibold -tracking-widest  text-black  md:text-8xl md:leading-[6rem] md:tracking-wide"
        text="Eric Medrano"
      />
      <FadedText as="h3" className="text-center text-xl md:text-4xl mb-5">
        I turn coffee into code
      </FadedText>
      {/* //Set a max-width for this */}
      <BoxReveal className="block mx-auto" delay={1} boxColor="#fff">
        <p className="text-center text-xl">
          Let&apos;s have a cup of coffee, and understand each other througout
          this page.
        </p>
      </BoxReveal>
    </div>
  );
}
