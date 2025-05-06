import { cn } from "@/app/utils/utils";
import { useExtensionsStore } from "../stores/useExtensionsStore";

export default function Toggle({ name = "switch", isActive }) {
  const toggleActive = useExtensionsStore((s) => s.toggleActive);
  //Style:
  const labelStyles = cn(
    "relative inline-flex items-center cursor-pointer rounded-full",
    "focus-within:ring-2 focus-within:ring-[var(--red-700)] focus-within:ring-offset-2"
  );

  const divStyles = cn(
    "peer h-5 w-9 p-0.5",
    "bg-[var(--neutral-300)] rounded-full",
    "after:h-4 after:aspect-square",
    "after:absolute after:left-[2px] after:top-0.5",
    "after:content-[''] after:transition-all",
    "after:rounded-full after:bg-white after:shadow-2xl",
    "peer-checked:bg-[var(--red-700)] peer-checked:after:translate-x-full"
  );

  return (
    <label className={labelStyles}>
      <input
        id={name}
        type="checkbox"
        className="peer sr-only"
        checked={isActive}
        onChange={() => toggleActive(name)}
      />
      <div className={divStyles} />
    </label>
  );
}
