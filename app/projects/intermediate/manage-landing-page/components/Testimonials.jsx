"use client";

import clsx from "clsx";
import { testimonials } from "../data";
import Carousel from "./ui/Carousel/Carousel";

export default function CarouselDemo() {
  const sectionStyles = clsx(
    "relative w-screen left-1/2 -translate-x-[50vw]", //Full bleed
    "overflow-hidden  h-full py-20"
  );
  return (
    <section id="testimonials" className={sectionStyles}>
      <Carousel slides={testimonials} />
    </section>
  );
}
