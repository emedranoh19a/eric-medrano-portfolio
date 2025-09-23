import Image from "next/image";
import Button from "../components/Button";
import Pattern from "../components/Pattern";
import RankingStars from "../components/RankingStars";
import TestimonialAvatars from "../components/TestimonialAvatars";
import Text from "../components/Text";
import { logoBluesky, logoLinkedIn } from "../imageIndex";

export default function Footer() {
  return (
    <footer className="relative z-0 bg-(--neutral-900) pt-12 sm:pt-16 lg:pt-20 px-4 sm:px-8 lg:px-[125px] flex flex-col items-center">
      <Pattern variant="dark" />
      <CTA />
      <hr className="text-(--neutral-900) w-full" />
      <div className="w-full flex flex-col sm:flex-row justify-between items-center py-6 gap-4">
        <Text as="span" className="text-(--neutral-0)" preset={7}>
          &copy; 2024 - Tech Book Club
        </Text>
        <Icons />
      </div>
    </footer>
  );
}
function Icons() {
  return (
    <div className="flex gap-6">
      <div className="relative w-[22px] aspect-square">
        <Image
          alt="Blue Sky icon"
          className="object-contain"
          fill
          src={logoBluesky}
        />
      </div>
      <div className="relative w-[22px] aspect-square">
        <Image
          alt="LinkedIn icon"
          className="object-contain"
          fill
          src={logoLinkedIn}
        />
      </div>
    </div>
  );
}
function CTA() {
  return (
    <>
      <Text
        as="h2"
        preset={2}
        className="text-(--neutral-0) max-w-[753px] mx-auto text-center mb-10"
      >
        Ready to debug your reading list?
      </Text>
      <div className="flex flex-col items-center gap-6">
        <Button
          text="Review membership options"
          variant="alternate"
          className="w-full"
        />
        <TestimonialsBox />
      </div>
    </>
  );
}
function TestimonialsBox() {
  return (
    <div className="flex flex-row gap-3 items-center mb-16">
      <TestimonialAvatars />
      <div className="flex flex-col gap-1">
        <RankingStars />
        <Text as="span" preset={7} className="text-(--neutral-700)">
          200+ developers joined already
        </Text>
      </div>
    </div>
  );
}
