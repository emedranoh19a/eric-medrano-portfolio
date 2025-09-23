import Container from "../components/Container";
import RankingStars from "../components/RankingStars";
import Text from "../components/Text";

export default function Testimonials() {
  return (
    <Container
      as="section"
      id="social-proof"
      className="flex flex-col gap-8 lg:items-center lg:text-center"
    >
      <RankingStars />
      <Testimonial />
      <Signature />
    </Container>
  );
}

function Testimonial() {
  return (
    <Text preset={3} className="w-full text-(--neutral-900)">
      &apos;This book club transformed my technical reading from a solitary
      activity into an enriching community experience. The discussions are
      gold!&apos;
    </Text>
  );
}
function Signature() {
  return (
    <Text preset={5} className="text-(--neutral-700) w-full">
      Sarah Chen, Software Architect
    </Text>
  );
}
