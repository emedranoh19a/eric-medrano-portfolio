import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useTestimonial } from "./TestimonialProvider";
import Text from "./Text";
export default function Quote() {
  const {
    testimonial: { name, job, quote },
  } = useTestimonial();
  return (
    <div className="relative flex flex-col max-w-sm  lg:max-w-lg  lg:-translate-x-10 z-30">
      <div className="absolute z-20 w-20 aspect-square -top-14 left-1/2 -translate-x-1/2 md:-left-0 md:translate-x-full">
        <Image
          src="/projects/beginner/coding-bootcamp-testimonials-slider/images/pattern-quotes.svg"
          fill
          className="object-contain"
        />
      </div>
      {
        <AnimatePresence mode="wait">
          <motion.div
            className="w-full h-full mb-[1lh]"
            key={quote}
            initial={{ opacity: 0, x: 20, delay: 3 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20, delay: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Text preset={1} className="z-30 ">
              {quote}
            </Text>
          </motion.div>
        </AnimatePresence>
      }
      <div className="z-30 flex flex-col md:flex-row gap-4">
        <Text preset={2}>{name}</Text>
        <Text preset={3}>{job}</Text>
      </div>
    </div>
  );
}
