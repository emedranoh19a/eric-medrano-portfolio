"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import clsx from "clsx";
import { Carousel } from "../components/Carousel/Carousel";
import {
  imgSlide1,
  imgSlide2,
  imgSlide3,
  imgSlide4,
  imgSlide5,
} from "../imageIndex";

export default function Works() {
  const bp = useBreakpoint();
  const titleStyles = clsx(
    "antialiased text-(--neutral-900) text-center",
    bp === "base" || bp === "sm" ? "preset-1-mobile" : "preset-2"
  );
  return (
    <section id="works" className="">
      <h2 className={titleStyles}>My Work</h2>
      <WorksArea />
    </section>
  );
}

function WorksArea() {
  const slideData = [
    {
      title: "Work 1",
      imgSrc: imgSlide1,
    },
    {
      title: "Work 2",
      imgSrc: imgSlide2,
    },
    {
      title: "Work 3",
      imgSrc: imgSlide3,
    },
    {
      title: "Work 4",
      imgSrc: imgSlide4,
    },
    {
      title: "Work 5",
      imgSrc: imgSlide5,
    },
  ];
  return (
    <div className="relative w-screen left-1/2 -translate-x-[50vw] h-full my-16 sm:my-20 lg:my-32">
      <Carousel slides={slideData} />
    </div>
  );
}
