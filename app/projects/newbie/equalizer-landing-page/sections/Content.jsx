import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import Image from "next/image";
import Button from "../components/Button";
import Text from "../components/Text";

export default function Content() {
  const gridStyles = clsx(
    "relative z-20",
    "grid grid-cols-1 sm:grid-cols-2 sm:gap-4",
    "w-full sm:container mx-auto",
    "my-20 sm:mt-48",
    "",
    // "sm:px-10 lg:px-20",
    "bg-[var(--slate)] sm:rounded-3xl "
  );
  return (
    <div className={gridStyles}>
      <MobileIllustration />
      <ContentText />
    </div>
  );
}

function Ornamental({ className = "" }) {
  const ornamentalContainer = cn(
    "absolute w-full h-full overflow-hidden",
    "top-0 sm:left-0 sm:-translate-y-14",
    "lg:-translate-y-10 lg:right-0 lg:translate-x-1/3 lg:h-[80%]",
    className
  );
  // const ornamentalPosition = cn("relative w-full h-full", className);
  return (
    <div className={ornamentalContainer}>
      <Image
        src="/projects/newbie/equalizer-landing-page/bg-pattern-2.svg"
        alt=""
        fill
        className="object-contain scale-125 sm:scale-100 origin-top"
      />
    </div>
  );
}

function MobileIllustration() {
  const containerStyles = clsx("relative", "w-full min-h-72");
  const imageContainerStyles = clsx(
    "relative w-full h-full",
    "scale-125 sm:scale-100",
    "-translate-y-20",
    "sm:translate-x-10 sm:-translate-y-48",
    "lg:top-1/4 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
  );
  // const ornamentalContainerStyles = clsx("scale-125 top-0", "");
  return (
    <div className={containerStyles}>
      <Ornamental />
      <div className={imageContainerStyles}>
        <Image
          src="/projects/newbie/equalizer-landing-page/illustration-app.png"
          alt="app showcase"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

function ContentText() {
  return (
    <div className="bg-[var(--orange)] flex flex-col w-full sm:rounded-3xl px-5 py-12 sm:px-12 sm:py-12 lg:px-14 lg:py-14 sm:translate-y-14 sm:-translate-x-14">
      <Text preset={3} className="text-[var(--slate)] mb-6 whitespace-nowrap">
        Premium EQ
      </Text>
      <Text preset={4} className="text-[var(--slate)] mb-10">
        Get expert-level control with a robust equalizer, volume mixer, and
        spatial audio. Take your listening experience to a whole new level and
        access all our incredible features!
      </Text>
      <div className="flex gap-4 w-fit items-center mb-12">
        <Text as="span" preset={2}>
          $4
        </Text>
        <Text as="span" preset={4}>
          /month
        </Text>
      </div>
      <div className=" flex w-full flex-col gap-4">
        {/* Buttons */}
        <Button className="w-full text-center" />
        <Button variant="android" className="w-full" />
      </div>
    </div>
  );
}
