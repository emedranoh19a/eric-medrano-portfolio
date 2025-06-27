import Image from "next/image";
import Button from "../components/Button";
import Step from "../components/Step";
import Text from "../components/Text";

export default function Footer() {
  return (
    <footer className="relative z-0 flex flex-col gap-[-28px] ">
      <div className="flex justify-center -mb-7 z-10">
        <Step number="02" />
      </div>
      <Content />
    </footer>
  );
}

function Content() {
  return (
    <div className="relative z-0 px-8 py-16 lg:px-20 lg:py-28 flex flex-col lg:flex-row items-start gap-6 lg:gap-16">
      {" "}
      <div className="absolute -z-10 w-full h-full top-0 left-0">
        <div className="relative w-full h-full">
          <Image
            className="object-cover"
            fill
            alt="woman talking"
            src="/projects/newbie/meet-landing-page/desktop/image-footer.jpg"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-[var(--cyan-600)] opacity-90" />
        </div>
      </div>
      <Text preset={2} as="h2" className=" text-[var(--white)]">
        Experience more together
      </Text>
      <Text preset={4} className="max-w-sm text-[var(--white)]">
        Stay connected with reliable HD meetings and unlimited one-on-one and
        group video sessions.
      </Text>
      <Button variant="purple" />
    </div>
  );
}
