import Text from "./Text";

export default function Overview() {
  return (
    <section id="overview">
      <Text as="h1" variant="mainTitle">
        Simple Omelette Recipe
      </Text>
      <Text>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </Text>
      <PreparationTime />
    </section>
  );
}

function PreparationTime() {
  const preparationDetails = [
    { property: "Total", description: "Approximately 10 minutes" },
    { property: "Preparation", description: "5 minutes" },
    { property: "Cooking", description: "5 minutes" },
  ];
  return (
    <div className="bg-(--rose-50) p-4 rounded-lg">
      <Text as="h3" variant="prepTitle" className="mb-2">
        Preparation time
      </Text>
      <ul>
        {preparationDetails.map((item, index) => (
          <PreparationDetail key={index} {...item} />
        ))}
      </ul>
    </div>
  );
}

function PreparationDetail({ property, description }) {
  return (
    <Text as="li" className="list-disc list-inside mb-2">
      <span className="font-bold">{property}:</span> {description}
    </Text>
  );
}
