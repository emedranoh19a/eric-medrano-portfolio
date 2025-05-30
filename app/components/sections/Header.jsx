"use client";

import { cn } from "@/app/utils/utils";
import localFont from "next/font/local";
import Cat from "../Cat";
import BlurText from "../effects/BlurText";
import TextSwapper from "../effects/TextSwapper";

const hamiltone = localFont({
  src: "../../fonts/Hamiltone.otf",
  style: "normal",
  weight: "400",
  variable: "normal",
});

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
      className="relative w-full min-h-screen h-fit overflow-x-hidden z-0 py-40 xl:-mt-28"
      id="home"
    >
      <Content />
      <div className={catContainerStyles}>
        <Cat className={catStyles} />
      </div>
    </section>
  );
}

function Content({ language = "en" }) {
  const words = {
    en: [
      "developer",
      "translator",
      "mentor",
      "supporter",
      "coder",
      "leader",
      "traveler",
      "creator",
      "dreamer",
      "challenger",
      "student",
      "fighter",
      "rival",
      "pianist",
      "dancer",
    ],
    jp: [],
    es: [],
  };
  return (
    <div className="relative mt-4 lg:mt-20">
      {/* <MainTitle
        className={`${hamiltone.className} text-center text-5xl md:text-8xl lg:text-9xl font-semibold -tracking-widest font-bold text-black   md:leading-[6rem] md:tracking-wide`}
        text="Eric Medrano"
      /> */}
      {/* <TextAnimate
        className={`${hamiltone.className} text-center text-5xl md:text-8xl lg:text-9xl font-semibold -tracking-widest font-bold text-black   md:leading-[6rem] md:tracking-wide`}
        text="Eric Medrano"
      >
        {" "}
        Eric Medrano{" "}
      </TextAnimate> */}
      <BlurText
        text="Eric Medrano"
        delay={150}
        animateBy="letters"
        direction="bottom"
        // onAnimationComplete={handleAnimationComplete}
        className={`${hamiltone.className} mx-auto justify-center text-center text-6xl md:text-8xl lg:text-9xl font-semibold -tracking-widest font-bold text-black   md:leading-[6rem] md:tracking-wide`}
      />
      <div className="h-40 flex justify-center items-center px-4">
        <div className="relative text-xl md:text-2xl lg:text-4xl mx-auto text-neutral-800 -translate-x-8 md:-translate-x-14">
          Sometimes, a {"    "}
          <div className="absolute w-fit h-fit right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <TextSwapper
              words={words[language]}
              className="text-5xl md:text-7xl lg:text-9xl"
            />{" "}
          </div>
          <br />
        </div>
      </div>
      {/* </div> */}
      {/* //Set a max-width for this */}
      {/* <TextGenerate
        className="block mx-auto text-center text-pretty max-w-md"
        // words="Let's have a cup of coffee, and unuderstand each other throughout this page."
        words="Take a paws! Let's understand each other troughout this page."
        filter={false}
      /> */}
      {/* <BoxReveal
        className="block mx-auto text-center"
        delay={1}
        boxColor="#fff"
      >
        <Text className="text-center ">
          Let&apos;s have a cup of coffee, and understand each other throughout
          this page.
        </Text>
      </BoxReveal> */}
    </div>
  );
}
