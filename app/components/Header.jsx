"use client";

import Cat from "./Cat";

export default function Header() {
  //State:

  //   const idle = useStateMachineInput(rive, "State Machine 1", "Idle");

  //   console.log(rive);
  return (
    <div className="flex justify-center">
      <Cat />
    </div>
  );
}
