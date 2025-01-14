export default function AchievementsList({ achievements = [] }) {
  const language = "en";
  return (
    <ul className="list-inside list-disc tracking-wide text-lg lg:text-2xl text-neutral-600">
      {achievements.map((achievement, index) => (
        <li className="mb-4" key={index}>
          {achievement[language]}
        </li>
      ))}
      {/* TODO: Agregar 4  proyectos y  su descripción, y sus fotos. */}
    </ul>
  );
}
