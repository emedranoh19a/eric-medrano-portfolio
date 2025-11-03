"use client";
// import { IconArrowNarrowRight } from "@tabler/icons-react";
import clsx from "clsx";
import { useId, useState } from "react";
import CarouselControl from "./CarouselControl";
import Slide from "./Slide";
export default function Carousel({ slides }) {
  //State:
  const [current, setCurrent] = useState(0);
  const id = useId();
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
  //Style:
  const carouselContainer = clsx(
    "relative w-[70vmin] h-80 mx-auto bg-lime-500 "
  );
  const slidesContainer = clsx(
    "absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
  );

  return (
    <div
      className={carouselContainer}
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className={slidesContainer}
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
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
      <CarouselControls
        handlePreviousClick={handlePreviousClick}
        handleNextClick={handleNextClick}
      />
    </div>
  );
}
function CarouselControls({ handlePreviousClick, handleNextClick }) {
  const controlsContainer = clsx(
    "absolute flex justify-center w-full h-fit top-[calc(100%+1rem)]"
  );
  return (
    <div className={controlsContainer}>
      <CarouselControl
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
  );
}
