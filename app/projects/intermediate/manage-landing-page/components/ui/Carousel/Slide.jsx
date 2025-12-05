import Image from "next/image";
import { useEffect, useRef } from "react";

function useCarousel() {
  const slideRef = useRef(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);
  return { slideRef, xRef, yRef, frameRef };
}
export default function Slide({ slide, index, current, handleSlideClick }) {
  const { slideRef } = useCarousel();
  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-fit mx-[4vmin] z-10 "
        onClick={() => handleSlideClick(index)}
      >
        {/* background */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-red-500 rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        ></div>

        <TestimonialCard {...slide} />
      </li>
    </div>
  );
}

function TestimonialCard({ name, quote, avatar }) {
  return (
    <article
      className={`relative transition-opacity duration-1000 ease-in-out px-[50px] py-[43px]`}
    >
      <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-fit h-fit">
        <div className="w-18 aspect-square relative rounded-full overflow-hidden">
          <Image src={avatar} alt={name} fill className="object-cover" />
        </div>
      </div>
      <h3 className="mt-6 mb-4 preset-4-bold text-blue-950">{name}</h3>
      <p className="preset-5-regular text-blue-950/50 max-w-[460px]">{quote}</p>
    </article>
  );
}
