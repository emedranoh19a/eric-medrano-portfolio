import { useEffect, useRef } from "react";

export default function Slide({ slide, index, current, handleSlideClick }) {
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

  // const handleMouseMove = (event) => {
  //   const el = slideRef.current;
  //   if (!el) return;

  //   const r = el.getBoundingClientRect();
  //   xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
  //   yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  // };

  // const handleMouseLeave = () => {
  //   xRef.current = 0;
  //   yRef.current = 0;
  // };

  const imageLoaded = (event) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 "
        onClick={() => handleSlideClick(index)}
        // onMouseMove={handleMouseMove}
        // onMouseLeave={handleMouseLeave}
        style={
          {
            // transform:
            //   current !== index
            //     ? "scale(0.98) rotateX(8deg)"
            //     : "scale(1) rotateX(0deg)",
            // transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            // transformOrigin: "bottom",
          }
        }
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
        >
          {/* <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )} */}
        </div>

        <TestimonialCard />
      </li>
    </div>
  );
}

function TestimonialCard() {
  return (
    <article
      className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out`}
    >
      <div className="w-18 aspect-square relative rounded-full overflow-hidden bg-lime-500">
        I
      </div>
      <h3 className="preset-4-bold text-blue-950">Ali Bravo</h3>
      <p className="preset-5-regular text-blue-950/50">
        “We have been able to cancel so many other subscriptions since using
        Manage. There is no more cross-channel confusion and everyone is much
        more focused.”
      </p>
    </article>
  );
}
