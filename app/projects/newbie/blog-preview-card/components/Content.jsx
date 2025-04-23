import { cn } from "@/app/utils/utils";
import Text from "./Text";

export default function Content() {
  const contentStyles = cn("flex flex-col items-start gap-3 w-fit h-fit");
  return (
    <div className={contentStyles}>
      <Category />
      <Text preset={3} as="span">
        Published 21 Dec 2023
      </Text>
      <Text preset={1} as="h1">
        HTML & CSS foundations
      </Text>
      <Text preset={2} className="text-[var(--gray-500)]">
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
    "bg-[var(--yellow)]",
    "gap-2 rounded"
  );
  return (
    <div className={chipStyles}>
      <Text className="" preset={4} as="span">
        Learning
      </Text>
    </div>
  );
}

// /* Learning */

// width: 58px;
// height: 21px;

// /* text-preset-3-bold */
// font-family: 'Figtree';
// font-style: normal;
// font-weight: 800;
// font-size: 14px;
// line-height: 150%;
// /* identical to box height, or 21px */

// color: #111111;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Publish Date */

// width: 143px;
// height: 21px;

// /* text-preset-3 */
// font-family: 'Figtree';
// font-style: normal;
// font-weight: 500;
// font-size: 14px;
// line-height: 150%;
// /* identical to box height, or 21px */

// color: #111111;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Title */

// width: 279px;
// height: 30px;

// font-family: 'Figtree';
// font-style: normal;
// font-weight: 800;
// font-size: 20px;
// line-height: 150%;
// /* identical to box height, or 30px */

// color: #111111;

// /* Inside auto layout */
// flex: none;
// order: 2;
// align-self: stretch;
// flex-grow: 0;

// /* Description */

// width: 279px;
// height: 63px;

// font-family: 'Figtree';
// font-style: normal;
// font-weight: 500;
// font-size: 14px;
// line-height: 150%;
// /* or 21px */

// color: #6B6B6B;

// /* Inside auto layout */
// flex: none;
// order: 3;
// align-self: stretch;
// flex-grow: 0;
