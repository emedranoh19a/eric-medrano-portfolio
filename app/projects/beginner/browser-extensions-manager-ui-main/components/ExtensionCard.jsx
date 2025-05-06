"use client";
import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { useExtensionsStore } from "../stores/useExtensionsStore";
import Button from "./Button";
import { useDarkMode } from "./DarkThemeProvider";
import Text from "./Text";
import Toggle from "./Toggle";

export default function ExtensionCard({ logo, name, description, isActive }) {
  const { isDark } = useDarkMode();
  const containerStyles = cn(
    "border border-[var(--neutral-200)] rounded-[20px]",
    "p-6 flex flex-col justify-between",
    "bg-[var(--neutral-0)]",
    isDark && "bg-[var(--neutral-800)] border-[var(--neutral-600)]"
    // isActive && "bg-lime-500"
  );

  return (
    <div className={containerStyles}>
      <ExtensionInfo logo={logo} name={name} description={description} />
      <ExtensionActions isActive={isActive} name={name} />
    </div>
  );
}

function ExtensionInfo({ logo, name, description }) {
  const { isDark } = useDarkMode();
  const containerStyles = cn(
    "flex flex-row min-h-36 justify-start items-start gap-4"
  );
  const titleStyles = cn(
    "text-[var(--neutral-900)]",
    isDark && "text-[var(--neutral-0)]"
  );
  const paragraphStyles = cn(
    "text-[var(--neutral-600)]",
    isDark && "text-[var(--neutral-300)]"
  );
  return (
    <div className={containerStyles}>
      <Image height={36} width={36} src={logo} alt="" />
      <div className="flex flex-col gap-2">
        <Text as="h3" className={titleStyles} preset={2}>
          {name}
        </Text>
        <Text as="p" className={paragraphStyles} preset={5}>
          {description}
        </Text>
      </div>
    </div>
  );
}

function ExtensionActions({ name, isActive }) {
  //State:
  const removeExtension = useExtensionsStore((s) => s.removeExtension);
  //Style:
  const buttonStyles = cn(
    "hover:bg-[var(--red-700)] hover:text-[var(--neutral-0)]"
  );

  return (
    <div className="flex justify-between items-center">
      <Button
        text="Remove"
        className={buttonStyles}
        onClick={() => removeExtension(name)}
      />
      <Toggle isActive={isActive} name={name} />
    </div>
  );
}
