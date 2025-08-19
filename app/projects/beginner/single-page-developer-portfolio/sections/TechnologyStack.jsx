import Text from "../components/Text";

const techs = [
  { title: "HTML", description: "4 Years Experience" },
  { title: "CSS", description: "4 Years Experience" },
  { title: "JavaScript", description: "4 Years Experience" },
  { title: "Accessibility", description: "4 Years Experience" },
  { title: "React", description: "3 Years Experience" },
  { title: "Sass", description: "3 Years Experience" },
];
export default function TechnologyStack() {
  return (
    <section className="mb-20 sm:mb-24 lg:mb-36 border-t-2 border-[var(--grey)] py-10 sm:py-[52px] lg:py-18 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[58px]">
      {techs.map((tech, index) => (
        <Technology {...tech} key={index} />
      ))}
    </section>
  );
}

function Technology({ title, description }) {
  return (
    <div className="w-full text-center sm:text-left">
      <Text as="h3" className="mb-[14px]" preset={2}>
        {title}
      </Text>
      <Text as="span" className="text-[var(--grey)]">
        {description}
      </Text>
    </div>
  );
}
