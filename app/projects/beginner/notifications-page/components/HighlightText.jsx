import { cn } from "@/app/utils/utils";

//THis is an idea for highlighting:
export default function HighlightText({
  text,
  highlight,
  highlightType,
  isRead,
}) {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span
            key={index}
            className={cn(
              "font-bold",
              highlightType === "normal" && "text-[var(--grayish-blue-500)]",
              highlightType === "link" && "text-[var(--blue)]"
            )}
          >
            {part}
          </span>
        ) : (
          part
        )
      )}
      {!isRead && (
        <span className="w-1.5 aspect-square bg-[var(--red)] rounded-full inline-block ml-1 " />
      )}
    </>
  );
}
