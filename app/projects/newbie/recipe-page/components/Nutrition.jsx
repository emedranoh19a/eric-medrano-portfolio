import clsx from "clsx";
import Text from "./Text";

export default function Nutrition() {
  return (
    <section id="nutrition">
      <Text as="h3" variant="title">
        Nutrition
      </Text>
      <Text>
        The table below shows nutritional values per serving without the
        additional fillings.
      </Text>
      <NutritionTable />
    </section>
  );
}

function NutritionTable() {
  const nutritionData = {
    calories: "277kcal",
    carbs: "0g",
    protein: "20g",
    fat: "22g",
  };
  return (
    <div className="grid grid-cols-2">
      {Object.entries(nutritionData).map(([key, value], index) => (
        <TableItem
          key={key}
          field={key}
          value={value}
          hasBorder={index !== 3}
        />
      ))}
    </div>
  );
}

function TableItem({ field, value, hasBorder = true }) {
  const cellStyles = clsx(
    "py-2",

    hasBorder && "border-b-2 border-solid border-[var(--stone-150)]"
  );
  return (
    <>
      <div className={clsx(cellStyles, "col-start-1 capitalize pl-4")}>
        <Text className="mb-0">{field}</Text>
      </div>
      <div
        className={clsx(
          cellStyles,
          "col-start-2 font-bold text-[var(--brown-800)]"
        )}
      >
        <Text className="mb-0">{value}</Text>
      </div>
    </>
  );
}
