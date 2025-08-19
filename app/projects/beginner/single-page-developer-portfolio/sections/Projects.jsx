import Image from "next/image";
import Button from "../components/Button";
import Subtitle from "../components/Subtitle";
import Text from "../components/Text";
import {
  thumbnailProject1Large,
  thumbnailProject2Large,
  thumbnailProject3Large,
  thumbnailProject4Large,
  thumbnailProject5Large,
  thumbnailProject6Large,
} from "../imageIndex";

const projects = [
  {
    img: thumbnailProject1Large,
    title: "Design portfolio",
    stack: ["HTML", "CSS"],
  },
  {
    img: thumbnailProject2Large,
    title: "E-learning landing page",
    stack: ["HTML", "CSS"],
  },
  {
    img: thumbnailProject3Large,
    title: "Todo web app",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    img: thumbnailProject4Large,
    title: "Entertainment web app",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    img: thumbnailProject5Large,
    title: "Memory Game",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    img: thumbnailProject6Large,
    title: "Art gallery showcase",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];
export default function Projects() {
  return (
    <section id="projects" className="pb-20 sm:pb-24 lg:pb-36">
      <div className="flex justify-between mb-10 sm:mb-16 lg:mb-20">
        <Subtitle text="Projects" />
        <Button />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-y-[60px] sm:gap-x-6 lg:gap-x-[30px] lg:gap-y-[69px]">
        {projects.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </section>
  );
}

function Project({ title, stack, img }) {
  return (
    <div className="uppercase">
      <div className="relative group z-0 w-[full] h-[343px] lg:h-[400px] mb-5">
        <ProjectOverlay />
        <Image
          src={img}
          fill
          className="object-cover"
          alt={`${title} thumbnail`}
        />
      </div>
      <Text preset={3} as="h3" className="text-white mb-[7px]">
        {title}
      </Text>
      <div className="flex flex-row gap-5">
        {stack.map((s, i) => (
          <Text key={i} preset={4} as="span" className="text-[var(--grey)]">
            {s}
          </Text>
        ))}
      </div>
    </div>
  );
}
function ProjectOverlay() {
  return (
    <div className="transition hover:bg-black/75 transition-colors inset-0 absolute z-10">
      <div className="group-hover:opacity-100 opacity-0 transition w-full h-full flex flex-col justify-center items-center gap-12">
        <Button text="View project" />
        <Button text="View code" />
      </div>
    </div>
  );
}
