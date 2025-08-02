import clsx from "clsx";
import Image from "next/image";
import Container from "../components/Container";
import ResponsiveImageSet from "../components/ResponsiveImageSet";
import Text from "../components/Text";
import { check, imgReadTogether } from "../imageIndex";

export default function Features() {
  return (
    <Container as="section" id="features">
      <IllustratedBlock
        imageSet={imgReadTogether}
        className="mb-16 sm:mb-20 lg:mb-32"
        alt="People reading together"
        reverse
      >
        <FirstBlockContent />
      </IllustratedBlock>
      <IllustratedBlock srcPrefix="/projects/beginner/tech-book-club-landing-page/image-not-average">
        <SecondBlockContent />
      </IllustratedBlock>
    </Container>
  );
}

function FirstBlockContent() {
  const listItems = [
    "Monthly curated tech reads selected by industry experts",
    "Virtual and in-person meetups for deep-dive discussions",
    "Early access to new tech book releases",
    "Author Q&A sessions with tech thought leaders",
  ];
  return (
    <div className="flex flex-col gap-6 sm:gap-[34px]">
      <Text preset={2}>Read together, grow together</Text>
      <ul className="flex flex-col gap-4 sm:gap-6">
        {listItems.map((item, i) => (
          <li className="flex flex-row items-center gap-[14px]" key={i}>
            <div className="relative w-8 aspect-square">
              <Image
                className="object-contain"
                alt="check icon"
                fill
                src={check}
              />
            </div>
            <Text key={i} as="p" preset={5} className="w-full">
              {item}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
}
function SecondBlockContent() {
  return (
    <div className="flex flex-col gap-6 sm:gap-[34px] text-[var(--neutral-900)]">
      <Text preset={2}>Not your average book club</Text>
      <Text preset={5}>
        Connect with a community that speaks your language - from{" "}
        <span className="font-bold">Python</span> to{" "}
        <span className="font-bold">TypeScript</span> and everything in between.
        Our discussions blend technical depth with practical applications.
      </Text>
    </div>
  );
}
function IllustratedBlock({ className, imageSet, alt, children, reverse }) {
  const containerStyles = clsx(
    "relative w-full text-[var(--neutral-900)]",
    "flex flex-col xl:flex-row gap-10 xl:gap-20 justify-between items-center",
    reverse && "xl:flex-row-reverse",
    className
  );
  //This block will contain one image, and the order of the Z pattern is adjuustable
  return (
    <div className={containerStyles}>
      <div className="w-full">{children}</div>
      <div className="rounded-2xl overflow-hidden relative w-full h-[318px] sm:h-[650px] lg:h-[520px]">
        <ResponsiveImageSet
          imageSet={imageSet}
          alt={alt}
          className="object-left"
        />
      </div>
    </div>
  );
}
