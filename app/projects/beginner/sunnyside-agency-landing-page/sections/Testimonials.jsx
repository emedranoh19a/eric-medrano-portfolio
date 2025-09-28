import TestimonialCard from "../components/TestimonialCard";
import { imageEmily, imageJennie, imageThomas } from "../imageIndex";

const testimonials = [
  {
    name: "Emily R.",
    job: "Marketing Director",
    quote:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    image: imageEmily,
  },
  {
    name: "Thomas S.",
    job: "Chief Operating Officer",
    quote:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    image: imageThomas,
  },
  {
    name: "Jennie F.",
    job: "Business Owner",
    quote:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    image: imageJennie,
  },
];
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-[55px] sm:py-[71px] lg:py-[162px] px-[22.px] sm:px-20 lg:px-40"
    >
      <h2 className="preset-6 mb-14 sm:mb-20 text-grey-400 uppercase text-center">
        Client testimonials
      </h2>
      <div className="flex flex-col gap-14 lg:flex-row gap-8 text-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard {...testimonial} key={index} />
        ))}
      </div>
    </section>
  );
}
