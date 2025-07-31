/* eslint-disable @next/next/no-img-element */

import { projects } from "@/app/data";
import { cn, shuffleArray } from "@/app/utils/utils";
import Image from "next/image";
import { Marquee } from "./Marquee";

// Shuffle the projects
const shuffledProjects = shuffleArray(projects);
const size = Math.ceil(shuffledProjects.length / 3);

const firstRow = shuffledProjects.slice(0, size);
const secondRow = shuffledProjects.slice(size, size * 2);
const thirdRow = shuffledProjects.slice(size * 2);

function DesignPreview({ image }) {
  return (
    <div className="relative z-0 w-fit rounded-2xl overflow-hidden border-neutral-900">
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-neutral/10 " />
      {/* It works on all screen sizes. */}
      <Image
        src={image}
        width={1000} //
        height={0} // dummy, required, but ignored if `style` is used
        style={{ height: "auto" }}
        className="object-cover  block"
        alt="Design preview"
        blurDataURL={image}
      />
    </div>
  );
}

export function MarqueeDemoVertical() {
  const durationStyles = "[--duration:80s]";
  const containerStyles = cn(
    "absolute -z-10 flex flex-row gap-4 items-center justify-between",
    "h-full w-full",
    "opacity-60 top-0 overflow-hidden"
  );
  return (
    <div className={containerStyles}>
      <Marquee vertical className={durationStyles}>
        {firstRow.map((review) => (
          <DesignPreview key={review.title} {...review} />
        ))}
      </Marquee>
      <Marquee reverse vertical className={durationStyles}>
        {secondRow.map((review) => (
          <DesignPreview key={review.title} {...review} />
        ))}
      </Marquee>
      <Marquee vertical className={durationStyles}>
        {thirdRow.map((review) => (
          <DesignPreview key={review.title} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
