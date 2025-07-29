"use client";

import clsx from "clsx";
import { useState } from "react";
import SelectionButton from "./SelectionButton";
import Text from "./Text";

export default function Card() {
  //State: Control Imperial or Metric Form
  const [mode, setMode] = useState("metric");
  const cardStyles = clsx("p-8 grid grid-cols-2");

  return (
    <div className={cardStyles}>
      <Text preset={4} className="col-span-2 text-[var(--blue-900)]">
        Enter your details below
      </Text>
      <SelectionButton label="metric" value={mode === "metric"} />
      <SelectionButton label="imperial" value={mode === "imperial"} />
    </div>
  );
}
