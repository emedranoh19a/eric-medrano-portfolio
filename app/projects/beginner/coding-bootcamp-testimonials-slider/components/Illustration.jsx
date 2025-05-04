"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useTestimonial } from "./TestimonialProvider";
export default function Illustration() {
  const { testimonial } = useTestimonial();
  const { name, image } = testimonial;
  return (
    <div className="relative w-60 md:w-96 aspect-square scale-150 md:-translate-x-10 bg-[url('/projects/beginner/coding-bootcamp-testimonials-slider/images/pattern-bg.svg')] bg-contain bg-no-repeat">
      <div className="w-[75%] aspect-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-full h-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              className={`w-full h-full absolute shadow-lg`}
              initial={{
                opacity: 0,
                x: 20,
                y: 80,
                rotate: 25,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
              }}
              transition={{ duration: 0.7, type: "spring" }}
              exit={{ opacity: 0, x: -20 }}
              key={image}
            >
              <Image
                src={image}
                fill
                className="object-cover"
                alt={`Picture of ${name}`}
              />
            </motion.div>
          </AnimatePresence>
          <Buttons />
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  const { handleNext, handlePrev } = useTestimonial();
  return (
    <div className="shadow-xl bg-white absolute flex rounded-full  w-fit h-fit lg:w-fit lg:h-fit bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
      <div
        className=" cursor-pointer relative w-8 lg:w-10 aspect-square grid place-items-center"
        onClick={handlePrev}
      >
        <Image
          width={10}
          height={10}
          alt="prev icon"
          className=""
          src="/projects/beginner/coding-bootcamp-testimonials-slider/images/icon-prev.svg"
        />
      </div>
      <div
        className="cursor pointer relative w-8 lg:w-10 aspect-square grid place-items-center"
        onClick={handleNext}
      >
        <Image
          width={10}
          height={10}
          alt="prev icon"
          src="/projects/beginner/coding-bootcamp-testimonials-slider/images/icon-next.svg"
        />
      </div>
    </div>
  );
}
