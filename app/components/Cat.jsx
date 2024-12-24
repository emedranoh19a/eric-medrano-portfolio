"use client";
import { useRive } from "@rive-app/react-canvas";
import { cn } from "../utils/utils";

export default function Cat({ className = "" }) {
  //Note: You have to specify the width.
  //State:
  const { rive, RiveComponent } = useRive({
    src: "/rive/cat_2.riv",
    stateMachines: "State Machine 1",
    artboard: "Cat",
    autoplay: true,
    automaticallyHandleEvents: true,
  });

  //Style:
  const containerStyles = cn("w-40 aspect-square", className);

  return (
    <div className={containerStyles}>
      {/* TODO: Get the cat back */}
      {/* <RiveComponent
        onMouseEnter={() => rive && rive.play()}
        onMouseLeave={() => rive && rive.play()}
      /> */}
      <div className="grid place-items-center w-full h-full bg-gray-200">
        Cat
      </div>
    </div>
  );
}
