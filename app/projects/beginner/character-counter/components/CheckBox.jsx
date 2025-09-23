"use client";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import Text from "./Text";
import { useTheme } from "./ThemeProvider";

export default function CheckBox({ label, name, value, setValue }) {
  //State:
  const { isDark } = useTheme();
  const { register } = useFormContext();

  //Style:
  const labelStyles = clsx(
    isDark ? "text-(--neutral-100)" : "text-(--neutral-900)"
  );
  const checkboxStyles = clsx(
    "w-4 aspect-square rounded-[4px] ",
    "accent-(--purple-400) ouline-none",
    isDark && "bg-(--neutral-800)"
  );
  return (
    <label htmlFor={name} className="flex flex-row gap-2.5 cursor-pointer">
      <input
        // id={name}
        // name={name}
        type="checkbox"
        // checked={value}
        // onClick={setValue}
        className={checkboxStyles}
        {...register(name)}
        id={name}
      />
      <Text as="span" preset={4} className={labelStyles}>
        {label}
      </Text>
    </label>
  );
}
