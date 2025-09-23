import Image from "next/image";
import Text from "../components/Text";
import eatingIcon from "../images/icon-eating.svg";
import iconExercise from "../images/icon-exercise.svg";
import sleepIcon from "../images/icon-sleep.svg";
const features = [
  {
    title: "Healthy eating",
    icon: eatingIcon,
    text: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
  },
  {
    title: "Regular exercise",
    icon: iconExercise,
    text: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
  },
  {
    title: "Adequate sleep",
    icon: sleepIcon,
    text: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
  },
];
export default function Features() {
  return (
    <section
      id="features"
      className="relative z-0 py-12 px-8 flex flex-col lg:flex-row gap-10 lg:gap-8 lg:py-24 lg:px-32"
    >
      <Layer />
      {features.map((feature, i) => (
        <Feature {...feature} key={i} />
      ))}
    </section>
  );
}
function Layer() {
  return (
    <div className="bg-linear-to-r from-(--gradient-start-transparent) to-(--gradient-end) inset-0 absolute -z-10 lg:mr-10 lg:rounded-[35px] opacity-25" />
  );
}
function Feature({ title, icon, text }) {
  return (
    <div className="flex flex-col gap-8 sm:flex-row lg:flex-col">
      <div className="w-16 aspect-square relative">
        <Image
          src={icon}
          alt={`${title} icon`}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col flex-1 gap-6">
        <Text as="h3" preset={4} className="text-(--blue-900)">
          {title}
        </Text>
        <Text preset={6} className="text-(--grey-500)">
          {text}
        </Text>
      </div>
    </div>
  );
}
