import clsx from "clsx";
import Text from "./Text";

export default function Navigation() {
  return (
    <>
      <NavigationSlot />
      <NavigationSlot />
      <NavigationSlot />
      <NavigationSlot />
    </>
  );
}

function NavigationSlot() {
  //Style:
  const containerStyles = clsx(
    "flex flex-col gap-2 right-0 border-r-1 border-white justify-center items-start absolute w-56 h-5"
  );

  const labelBoxStyles = clsx("inline-flex justify-start items-start gap-3");

  return (
    <div className={containerStyles}>
      <div className={labelBoxStyles}>
        <Text preset={8} className="font-bold">
          00
        </Text>
        <Text preset={8}>HOME</Text>
      </div>
    </div>
  );
}
