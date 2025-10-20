import BubbleFeature from "../components/BubbleFeature";
import Subtitle from "../components/Subtitle";
import { ourValuesFeatues } from "../data";

export default function Values() {
  return (
    <section className="mb-[145px] md:mb-30" id="features">
      <Subtitle text="Our values" className="text-center" />
      <ul className="flex flex-col lg:flex-row gap-14 lg:gap-[30px]">
        {ourValuesFeatues.map((feature, i) => (
          <BubbleFeature key={i} {...feature} number={i + 1} />
        ))}
      </ul>
    </section>
  );
}
