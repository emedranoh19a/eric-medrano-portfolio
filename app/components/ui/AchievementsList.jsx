import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AchievementsList({ achievements = [] }) {
  const language = "en";

  //State:
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <ul
      ref={ref}
      className="list-inside list-disc tracking-wide text-lg lg:text-2xl text-neutral-600"
    >
      {achievements.map((achievement, index) => (
        <motion.li
          className="mb-4"
          key={index}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: !isInView ? 0 : 1, x: !isInView ? 200 : 0 }}
          // whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 * index, duration: 0.5 }}
        >
          {/* <TextGenerate words={achievement[language]} /> */}
          {achievement[language]}
        </motion.li>
      ))}
      {/* TODO: Agregar 4  proyectos y  su descripción, y sus fotos. */}
    </ul>
  );
}
