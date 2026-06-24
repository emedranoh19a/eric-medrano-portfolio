"use client";

import { useRive } from "@rive-app/react-canvas";

export default function Cat({ className = "" }) {
  //Note: You have to specify the width.
  //State:
  const { rive, RiveComponent } = useRive({
    // src: "/rive/cat_2.riv",
    // src: "https://rjicfqvivttizcwzxpaj.supabase.co/storage/v1/object/sign/Rive/animations/cat.riv?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmQ0MTZjNi1jOWU5LTRhZjctYmMzZS1hYjRmYjZmMGNlZmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJSaXZlL2FuaW1hdGlvbnMvY2F0LnJpdiIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODIxMjI5MDAsImV4cCI6MTgxMzY1ODkwMH0.yTA5NBd1o1JZWA21UTSSaigfbfclfFLJSB06UewA4jQ",
    src: "https://rjicfqvivttizcwzxpaj.supabase.co/storage/v1/object/sign/Rive/animations/cat.riv?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmQ0MTZjNi1jOWU5LTRhZjctYmMzZS1hYjRmYjZmMGNlZmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJSaXZlL2FuaW1hdGlvbnMvY2F0LnJpdiIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODIxOTA1NjcsImV4cCI6MTc4MjI3Njk2N30.Thy1BdJvHnug8lgqXpjXcc-wsTS3dMw7JnNANgpiMDc",
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
