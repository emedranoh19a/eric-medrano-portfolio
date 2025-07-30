import { cn } from "@/app/utils/utils";
import Image from "next/image";
import BoxReveal from "../effects/BoxReveal";
import Heading from "../ui/Heading";
import Subheading from "../ui/Subheading";
import Text from "../ui/Text";
import Span from "./Span";

export default function About() {
  const containerStyles = cn(
    "relative w-full h-fit mx-auto z-0 -mt-[26vw] py-20 background-transparent lg:mb-40",
    ""
    //The following styles are correctors for issues with the cat transformation
    // "-mt-36 md:-mt-14 lg:mt-0 xl:mt-72 2xl:mt-96"
  );
  return (
    <section className={containerStyles} id="about">
      <div className="grid gap-10 container h-fit mx-auto place-items-center lg:grid-cols-2">
        <div className="self-center">
          <Content />
        </div>
        <div className="w-full h-full  px-2 sm:px-20 md:px-28 md:py-18 relative ">
          <div className="relative px-4 w-full h-72 sm:h-96 md:h-96 aspect-square rounded-xl overflow-hidden">
            <Image
              src="/about/eric-chiquito.png"
              fill
              alt="A photo of Eric Medrano holding a mexican doll that represents a little version of myself."
              className="object-cover rounded-xl overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function Content() {
  return (
    <div className="max-w-lg lg:order-2 flex flex-col items-stretch justify-center overflow-hidden pt-8">
      <Heading
        text="Hi! I'm Eric"
        className="text-center lg:text-left block mb-4"
      />
      <BoxReveal>
        <Subheading>
          Potentially, your next <Span>best decision</Span>.
        </Subheading>
      </BoxReveal>
      <BoxReveal className="mx-auto">
        <Text className="text-center lg:text-left">
          I&apos;m passionate about crafting meaningful designs and developing
          user-friendly <Span> web applications.</Span>
        </Text>
        <Text className="text-center lg:text-left mt-2">
          Simplicity, collaboration and creativity are some examples of what I
          value in everything I do. Let&apos;s connect and create something{" "}
          <Span>awesome</Span>!
        </Text>
      </BoxReveal>
    </div>
  );
}
