import AboutContent from "./AboutContent";
import Amy from "./Amy";

export default function About() {
  return (
    <section
      id="about"
      className="flex gap-6 flex-col lg:flex-row mx-auto w-fit lg:w-full lg:justify-between "
    >
      <Amy />
      <AboutContent />
    </section>
  );
}
