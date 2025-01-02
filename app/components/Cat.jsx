"use client";
import { useRive } from "@rive-app/react-canvas";

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

  return (
    <RiveComponent
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.play()}
      className={className}
    />
  );
}
