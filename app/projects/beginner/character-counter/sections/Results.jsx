"use client";
import { cn } from "@/app/utils/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import Text from "../components/Text";
import { useTheme } from "../components/ThemeProvider";

export default function Results() {
  return (
    <div className="flex flex-col gap-6">
      <MainStats />
      <DensityStats />
    </div>
  );
}

function MainStats() {
  //State:
  const { watch } = useFormContext();
  const inputText = watch("text") || "";
  const countingSpaces = watch("countSpaces");

  // Logic:
  const charCount = !countingSpaces
    ? inputText.length
    : inputText.replaceAll(" ", "").length;

  // Trim, remove extra spaces, then split for accurate word count
  const wordCount = inputText.trim().split(/\s+/).filter(Boolean).length;

  // Count sentences based on punctuation marks like '.', '!', '?'
  const sentenceCount = (inputText.match(/[^.!?]+[.!?]+/g) || []).length;
  return (
    <div className="flex flex-col sm:flex-row w-full gap-4">
      <MainStat variant="characters" value={charCount} />
      <MainStat variant="words" value={wordCount} />
      <MainStat variant="sentences" value={sentenceCount} />
    </div>
  );
}

function MainStat({ variant = "characters", value = "" }) {
  const containerStyles = cn(
    "relative overflow-hidden z-0 flex flex-col gap-2 w-full",
    "text-[var(--neutral-900)]",
    "p-5 rounded-[12px]",
    variant === "characters" && "bg-[var(--purple-400)]",
    variant === "words" && "bg-[var(--yellow-500)]",
    variant === "sentences" && "bg-[var(--orange-500)]"
  );
  const ornamentalStyles = cn(
    "absolute h-full aspect-square right-0 top-0 z-10 scale-125 translate-x-1/2"
  );

  const label =
    variant === "characters"
      ? "Total Characters"
      : variant === "words"
      ? "Word Count"
      : "Sentence Count";
  const srcFragment =
    variant === "characters"
      ? "character"
      : variant === "words"
      ? "word"
      : "sentence";
  const imgSrc = `/projects/beginner/character-counter/pattern-${srcFragment}-count.svg`;
  return (
    <div className={containerStyles}>
      <div className={ornamentalStyles}>
        <div className="relative w-full h-full">
          <Image src={imgSrc} alt="" fill className="object-contain" />
        </div>
      </div>
      <Text as="span" preset={1}>
        {value || "0"}
      </Text>
      <Text as="span" preset={3}>
        {label}
      </Text>
    </div>
  );
}

function DensityStats() {
  //State:
  const { isDark } = useTheme();
  const { watch } = useFormContext();
  const inputText = watch("text") || "";
  const countingSpaces = watch("countSpaces");
  //Exclude spaces

  //1. Storing values into an object, where the key is the letter.
  let letters = {};
  for (let i in inputText) {
    letters[inputText[i].toLowerCase()] =
      letters[inputText[i].toLowerCase()] + 1
        ? letters[inputText[i].toLowerCase()] + 1
        : 1;
  }
  //2. Then, converting into an object array with fields: key and value
  const densities = Object.entries(letters).map(([key, value]) => ({
    key,
    value,
  }));
  const filteredDensities = densities.filter((item) =>
    countingSpaces ? item.key !== " " : true
  );
  //3. Finally, sorting the data according to the value
  const sortedDensities = filteredDensities.sort((a, b) => b.value - a.value);
  const titleStyles = cn(
    "flex flex-col gap-5 w-full text-[var(--neutral-900)]",
    isDark && "text-[var(--neutral-100)]"
  );
  return (
    <div className={titleStyles}>
      <Text preset={2} className="text-[var(--neutral-900)]" as="h2">
        Letter Density
      </Text>
      {sortedDensities.map((item) => (
        <motion.div
          layout
          key={item.key}
          className="grid grid-cols-[16px_auto_110px] items-center gap-y-3 gap-x-[14px]"
        >
          <Density
            letter={item.key}
            empty={inputText.length === 0}
            letterCount={item.value}
            textLength={inputText.length}
          />
        </motion.div>
      ))}
    </div>
  );
}
function Density({ letter = "E", empty, letterCount, textLength }) {
  const { isDark } = useTheme();
  const barStyles = cn(
    "transition-colors w-full flex-1 bg-[var(--neutral-100)] relative h-full rounded-full",
    isDark && "bg-[var(--neutral-800)]"
  );
  const percentage = `${((letterCount / textLength) * 100).toFixed(2)}`;
  return (
    <>
      <div className="uppercase">{letter}</div>
      <div className={barStyles}>
        <motion.div
          className="absolute bg-[var(--purple-400)] h-full w-1/2 top-0 left-0 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-right whitespace-nowrap">
        {letterCount}/{textLength} ({percentage}%)
      </div>
    </>
  );
}
