"use client";
import Heading from "../ui/Heading";
import { SkillsGlobe } from "../ui/SkillsGlobe";
import Text from "../ui/Text";

export default function Skills() {
  {
    /* TODO: Skills section with Globe. */
  }

  return (
    <section className="h-fit w-full" id="skills">
      <div className="container w-full h-full  gap-4 grid grid-cols-2">
        <div className="h-full flex flex-col gap-2 p-20 justify-around">
          <Heading text="My stack" />
          <Text>
            My skill set isn&apos;t just a list. It&apos;s a growing ecosystem.
            Picture a globe filled with logos of everything I know and love—a
            globe that&apos;s constantly spinning, expanding, and evolving.
          </Text>
          <Text>
            With every new challenge I take on, another skill finds its place,
            making this sphere of knowledge even richer. Explore it today, and
            let&apos;s watch it grow together.
          </Text>
        </div>
        <div className="h-full w-full grid place-items-center">
          <SkillsGlobe />
        </div>
      </div>
    </section>
  );
}
