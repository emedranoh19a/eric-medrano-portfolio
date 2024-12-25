"use client";

import Cat from "../Cat";

export default function Header() {
  //State:
  {
    /* TODO: Hero section. with contact links? */
  }

  //   const idle = useStateMachineInput(rive, "State Machine 1", "Idle");

  //   console.log(rive);
  return (
    <section className="h-screen" id="home">
      <div className="flex justify-center">
        <Cat />
      </div>
    </section>
  );
}
