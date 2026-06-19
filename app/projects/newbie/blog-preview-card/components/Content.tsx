import { cn } from "@/app/utils/utils";
import { Text } from "./Text";
export function Content() {
  const contentStyles = cn("max-w-75 md:max-w-84 flex flex-col items-start gap-3 w-fit h-fit");
  return (
    <div className={contentStyles}>
      <Category />
      <Text preset={3} as="span">
        Published 21 Dec 2023
      </Text>
      <Text preset={1} as="h1">
        HTML & CSS foundations
      </Text>
      <Text preset={2} className="text-(--gray-500)">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </Text>
    </div>
  );
}

function Category() {
  const chipStyles = cn(
    "flex flex-row gap-2 justify-center items-center",
    "py-1 px-3",
    "bg-(--yellow)",
    "gap-2 rounded-sm",
  );
  return (
    <div className={chipStyles}>
      <Text className="" preset={4} as="span">
        Learning
      </Text>
    </div>
  );
}
