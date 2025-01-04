import { cn } from "@/app/utils/utils";
import Heading from "../ui/Heading";

export default function About() {
  //TODO: about me section
  const containerStyles = cn(
    "relative w-full h-screen -z-10 py-20 background-transparent",
    "",
    //The following styles are correctors for issues with the cat transformation
    "-mt-36 md:-mt-14 lg:mt-0 xl:mt-72 2xl:mt-96"
  );
  return (
    <section className={containerStyles} id="about">
      <Heading text="About" className="text-center block" />
    </section>
  );
}
