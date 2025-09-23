"use client";
// import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import { useId, useState } from "react";
import CarouselControl from "./CarouselControl";
import Slide from "./Slide";

export function Carousel({ slides }) {
  //State:
  const [current, setCurrent] = useState(0);
  const id = useId();
  const bp = useBreakpoint();

  //Derived:
  const slideWidth = bp === "base" || bp === "sm" ? 270 : 540;
  const gap = bp === "base" || bp === "sm" ? 20 : 32;
  //Handlers:
  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  return (
    <div
      className="relative w-screen h-[180px] sm:h-[360px] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex transition-transform duration-1000 ease-in-out gap-5 sm:gap-8 left-1/2" //ad gap20
        style={{
          //   transform: `translateX(-${current * (100 / slides.length)}%)`,

          transform: `translateX(-${
            ((2 * (current + 1) - 1) / 2) * slideWidth + current * gap
          }px)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)] gap-4">
        <CarouselControl
          left
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
