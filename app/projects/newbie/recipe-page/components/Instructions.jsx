import Text from "./Text";

export default function Instructions() {
  const instructions = [
    {
      instruction: "Beat the eggs",
      description:
        " In a bowl, beat the eggs with a pinch of salt and pepperuntil they are well mixed. You can add a tablespoon of water or milk for afluffier texture",
    },
    {
      instruction: "Heat the pan",
      description:
        "Place a non-stick frying pan over medium heat and add butteror oil",
    },
    {
      instruction: "Cook the omelette",
      description:
        "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface",
    },
    {
      instruction: "Add fillings (optional)",
      description:
        "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette",
    },
    {
      instruction: "Fold and serve",
      description:
        "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate",
    },
    {
      instruction: "Enjoy",
      description: "Serve hot, with additional salt and pepper if needed",
    },
  ];
  return (
    <section id="instructions">
      <Text as="h2" variant="title">
        Instructions
      </Text>
      <ol className="list-decimal list-inside">
        {instructions.map((item, index) => (
          <InstructionStep key={index} {...item} />
        ))}
      </ol>
    </section>
  );
}

function InstructionStep({ description, instruction }) {
  return (
    <Text as="li">
      <span className="font-bold">{instruction}:</span> {description}
    </Text>
  );
}
