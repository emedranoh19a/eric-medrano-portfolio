import Nav from "../shared/Nav";
import Content from "./Content";
import Services from "./Services";

export default function Hero() {
  return (
    <section id="Hero" className="flex flex-col gap-10 sm:gap-16 lg:gap-20">
      <Nav />
      <Content />
      <Services />
    </section>
  );
}
