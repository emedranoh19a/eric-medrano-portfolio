import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import Image from "next/image";
import Curve from "../components/Curve";
import Text from "../components/Text";
import iconAge from "../images/icon-age.svg";
import iconGender from "../images/icon-gender.svg";
import iconMuscle from "../images/icon-muscle.svg";
import iconPregnancy from "../images/icon-pregnancy.svg";
import iconRace from "../images/icon-race.svg";

const limitations = [
  {
    title: "gender",
    icon: iconGender,
    className: "lg:-translate-x-[20%]",
    text: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    title: "age",
    icon: iconAge,
    className: "",
    text: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  {
    title: "muscle",
    icon: iconMuscle,
    className: "",
    text: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    title: "pregnancy",
    icon: iconPregnancy,
    className: "lg:-translate-x-[30%]",
    text: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
  },
  {
    title: "race",
    icon: iconRace,
    className: "sm:translate-x-1/2 lg:-translate-x-[30%]",
    text: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },
];

export default function Limitations() {
  const sectionCn = clsx(
    "relative mt-[82px] mx-[22px] lg:mx-36 pb-24 flex flex-col gap-14"
  );
  return (
    <section className={sectionCn}>
      <Content />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 max-w-3xl mx-auto lg:mr-0 lg:ml-0lg:ml-auto">
        <div className="hidden lg:block" />
        {limitations.map((lim, i) => (
          <Limitation {...lim} key={i} />
        ))}
      </div>
    </section>
  );
}
function Content() {
  return (
    <div className="text-center lg:text-left sm:col-span-2 lg:absolute lg:left-0 lg:top-0 lg:max-w-[40%]">
      <Text as="h2" className="text-[var(--blue-900)] mb-8" preset={3}>
        Limitations of BMI
      </Text>
      <Text
        preset={6}
        className="relative text-[var(--grey-500)] max-w-md mx-auto"
      >
        Although BMI is often a practical indicator of healthy weight, it is not
        suited for every person. Specific groups should carefully consider their
        BMI outcomes, and in certain cases, the measurement may not be
        beneficial to use.
        <Curve className="hidden lg:block top-full left-1/2" />
      </Text>
    </div>
  );
}
function Limitation({ title, text, icon, className }) {
  const containerCn = cn(
    "p-6 sm:p-8 flex flex-col gap-4 shadow-xl rounded-2xl shadow-slate-300/40",
    className
  );
  return (
    <div className={containerCn}>
      <div className="flex gap-4 justify-start">
        <div className="relative aspect-square w-8">
          <Image
            className="object-contain"
            fill
            src={icon}
            alt={`${title} icon`}
          />
        </div>
        <Text as="h3" className="text-[var(--blue-900)] capitalize" preset={5}>
          {title}
        </Text>
      </div>
      <Text className="text-[var(--grey-500)]" preset={6}>
        {text}
      </Text>
    </div>
  );
}
