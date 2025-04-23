import Text from "./Text";

export default function Ingredients() {
  const ingredients = [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ];
  return (
    <section id="ingredients">
      <Text as="h3" variant="title">
        Ingredients
      </Text>
      <ul>
        {ingredients.map((ingredient, index) => (
          <Ingredient key={index} ingredient={ingredient} />
        ))}
      </ul>
    </section>
  );
}

function Ingredient({ ingredient }) {
  return (
    <Text as="li" className="list-disc list-inside mb-2">
      {ingredient}
    </Text>
  );
}
