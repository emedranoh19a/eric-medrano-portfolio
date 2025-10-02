import TestimonyCard from "../components/TestimonyCard";
import { testimonies } from "../data/data";

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      className="pt-5 mx-auto sm:max-w-[480px] lg:max-w-[1180px] grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10"
    >
      {testimonies.map((testimony, i) => (
        <TestimonyCard key={i} {...testimony} hasQuote={i === 0} />
      ))}
    </section>
  );
}
