"use client";
import { skillImages, slugs } from "@/app/data";
import BoxReveal from "../effects/BoxReveal";
import Heading from "../ui/Heading";
import SkillsGlobe from "../ui/SkillsGlobe";
import Subheading from "../ui/Subheading";
import Text from "../ui/Text";
import Span from "./Span";

export default function Skills() {
  {
    /* TODO: Skills section with Globe. */
  }

  return (
    <section
      className="h-fit w-full py-10 px-20 h-full container mx-auto"
      id="skills"
    >
      <div className="container w-full h-full   gap-6 grid grid-cols-1 lg:grid-cols-2 place-items-center mx-auto">
        <SkillsContent />
        <SkillsGlobe iconSlugs={slugs} imageArray={skillImages} />
      </div>
    </section>
  );
}

function SkillsContent() {
  //   Skills Section
  // Title:
  // "Expanding Horizons, One Skill at a Time."

  // Text:
  // "My skill set isn’t just a list; it’s a growing ecosystem. Picture a globe filled with logos of everything I know and love—a globe that’s constantly spinning, expanding, and evolving. With every new challenge I take on, another skill finds its place, making this sphere of knowledge even richer. Explore it today, and let’s watch it grow together."

  return (
    <div className="max-w-lg flex flex-col items-stretch justify-center overflow-hidden pt-8">
      <BoxReveal className="w-full">
        <Heading text="The Code I Speak" />
      </BoxReveal>
      <BoxReveal>
        <Subheading>
          A plethora of <Span>Skills</Span> in Motion.
        </Subheading>
      </BoxReveal>

      <BoxReveal>
        <Text>
          My tech palette is a growing ecosystem. A{" "}
          <Span> world of knowledge</Span> that is constantly spinning,
          expanding and evolving.
        </Text>
        <Text>
          With every <Span> challenge</Span> I take on, a{" "}
          <Span>new technology</Span>
          finds its place into my arsenal.
        </Text>
        <Text></Text>
      </BoxReveal>

      <BoxReveal>
        {/* <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button> */}
      </BoxReveal>
    </div>
  );
}
