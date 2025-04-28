import Image from "next/image";
import Button from "./components/Button";
import Logo from "./components/Logo";
import Ornamental from "./components/Ornamental";
import Text from "./components/Text";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-[var(--purple-900)] pb-10 ">
      <div className="px-5">
        <Nav />
        <Content />
      </div>
      <Ornamental
        bottomColor="var(--purple-100)"
        className="bg-[var(--purple-900)]"
      />
      <div className="absolute w-80 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 aspect-video ">
        <Image
          fill
          className="object-contain"
          alt="smartphone illustration"
          src="/projects/newbie/workit-landing-page/images/image-hero.webp"
        />
      </div>
      {/* <Ornamental /> */}
    </section>
  );
}

function Nav() {
  return (
    <div className="px-5 pt-8 w-full ">
      <div className="flex justify-between items-center max-w-6xl">
        <Logo />
        <Button text="Apply for access" variant="secondary" />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="h-full gap-10 px-5 py-16 pb-36 flex items-center flex-col justify-center">
      <Text
        as="h1"
        preset={1}
        className="text-[var(--white)] inline-block text-center"
      >
        Data <span>tailored</span> to your needs.
      </Text>
      <Button text="Learn more" />
    </div>
  );
}
