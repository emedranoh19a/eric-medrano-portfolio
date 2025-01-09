import { cn } from "@/app/utils/utils";
import BoxReveal from "../effects/BoxReveal";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import Span from "./Span";

export default function About() {
  //TODO: about me section
  const containerStyles = cn(
    "relative w-full h-fit -z-10 -mt-[20vw] py-20 background-transparent",
    ""
    //The following styles are correctors for issues with the cat transformation
    // "-mt-36 md:-mt-14 lg:mt-0 xl:mt-72 2xl:mt-96"
  );
  return (
    <section className={containerStyles} id="about">
      <Heading text="Hi! I'm Eric" className="text-center block" />
      <BoxReveal className="mx-auto">
        <Text className="text-center max-w-xl">
          I&apos;m passionate about crafting meaningful designs and developing
          user-friendly <Span> web applications.</Span>
        </Text>
        <Text className="text-center max-w-xl mt-2">
          Simplicity, collaboration and creativity are some examples of what I
          value in everything I do. Let&apos;s connect and create something{" "}
          <Span>awesome</Span>!
        </Text>
      </BoxReveal>
    </section>
  );
}
