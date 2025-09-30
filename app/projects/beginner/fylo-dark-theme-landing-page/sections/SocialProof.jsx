import TestimonyCard from "../components/TestimonyCard";
import { testimonies } from "../data/data";

export default function SocialProof() {
  return (
    <div>
      {testimonies.map(() => (
        <TestimonyCard />
      ))}
    </div>
  );
}
