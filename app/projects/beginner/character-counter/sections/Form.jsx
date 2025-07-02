"use client";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import { IoInformationCircleOutline } from "react-icons/io5";
import CheckBox from "../components/CheckBox";
import Text from "../components/Text";
import TextArea from "../components/TextArea";
import { useTheme } from "../components/ThemeProvider";

export default function Form() {
  //State:
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  const { isDark } = useTheme();

  const inputText = watch("text") || "";
  const hasLimit = watch("characterLimit");
  const wordCount = inputText.trim(" ").split(/\s+/).filter(Boolean).length;
  const readingTime = Number(wordCount) / 250;
  //   const [config, setConfig] = useState({
  //     countSpaces: true,
  //     characterLimit: true,
  //   });

  //Style:
  const titleStyles = clsx(
    "mx-auto mb-10 inline-block max-w-[510px] mx-auto text-center transition-colors",
    !isDark ? "text-[var(--neutral-900)]" : "text-[var(--neutral-100)]"
  );

  return (
    <div className="flex flex-col items-center">
      <Text as="h1" preset={1} className={titleStyles}>
        Analyze your text in real-time.
      </Text>
      <TextArea register={register} key={hasLimit ? "withLimit" : "noLimit"} />
      {errors?.text && <ErrorMessage message={errors.text.message} />}

      <div className="flex flex-col mt-[10px] sm:flex-row w-full sm:justify-between gap-3">
        <div className="flex flex-col sm:flex-row gap-3 sm:flex-row">
          <CheckBox
            // value={config.countSpaces}
            // setValue={() =>
            //   setConfig((prev) => ({
            //     ...prev,
            //     countSpaces: !prev.countSpaces,
            //   }))
            // }
            name="countSpaces"
            label="Exclude Spaces"
          />
          {/* <CheckBox
            // value={config.characterLimit}
            // setValue={() =>
            //   setConfig((prev) => ({
            //     ...prev,
            //     characterLimit: !prev.characterLimit,
            //   }))
            // }
            name="characterLimit"
            label="Set Character Limit"
          /> */}
        </div>
        <Text
          preset={4}
          className={` transition-colors ${
            !isDark ? "text-[var(--neutral-900)]" : "text-[var(--neutral-100)]"
          }`}
        >
          Approx. reading time: {readingTime.toFixed(1)} minutes
        </Text>
      </div>
    </div>
  );
}
function ErrorMessage({ message = "Message for the error" }) {
  //const { watch } = useFormContext();
  //   const inputText = watch("text");

  return (
    <div className="w-full text-left flex flex-row gap-2 items-center mt-1">
      <span>
        {" "}
        <IoInformationCircleOutline className="text-[var(--orange-800)]" />
      </span>
      <Text className="text-[var(--orange-800)]" as="span" preset={4}>
        {message}
      </Text>
    </div>
  );
}
