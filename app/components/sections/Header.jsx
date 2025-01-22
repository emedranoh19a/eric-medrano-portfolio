"use client";

import { cn } from "@/app/utils/utils";
import Cat from "../Cat";
import BoxReveal from "../effects/BoxReveal";
import FadedText from "../ui/FadedText";
import MainTitle from "../ui/MainTitle";
import Text from "../ui/Text";

export default function Header() {
  //State:

  //Style:
  //For sizing purposes
  const catContainerStyles = cn(
    "relative grid place-items-center",
    "z-50 w-full h-[100vw] overflow-hidden",
    "-mt-[20vw] ",
    // "bg-red-500/50 sm:bg-sky-500/50 md:bg-lime-500/50 lg:bg-yellow-500/50 xl:bg-fuchsia-500/50 2xl:bg-orange-500/50",
    //This styles will block the cat interacction on touch screens.
    "no-hover:before:bg-transparent no-hover:before:absolute no-hover:before:w-full no-hover:before:h-full no-hover:before:z-20 "
  );
  const catStyles = cn("absolute top-0 w-full h-full");

  return (
    <section
      className="relative w-full min-h-screen h-fit  overflow-x-hidden z-0 py-40 xl:-mt-20"
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
      <BoxReveal
        className="block mx-auto text-center"
        delay={1}
        boxColor="#fff"
      >
        <Text className="text-center ">
          Let&apos;s have a cup of coffee, and understand each other throughout
          this page.
        </Text>
      </BoxReveal>
    </div>
  );
}
