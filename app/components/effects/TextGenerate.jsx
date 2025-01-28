"use client";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function TextGenerate({
  words,
  className,
  filter = true,
  duration = 0.5,
}) {
  //State:
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        //TODO: set a good timing. It is OK to not attach to a useInView hook
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  //Dataflow:
  let wordsArray = words.split(" ");

  //Slot:
  function RenderWords() {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  }

  return (
    <div className={className}>
      <div className="mt-4">
        <div className="text-black text-2xl leading-snug tracking-wide font-thin">
          <RenderWords />
        </div>
      </div>
    </div>
  );
}
