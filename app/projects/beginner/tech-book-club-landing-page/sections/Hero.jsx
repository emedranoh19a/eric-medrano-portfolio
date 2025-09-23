import Button from "../components/Button";
import Container from "../components/Container";
import Glow from "../components/Glow";
import Logo from "../components/Logo";
import Pattern from "../components/Pattern";
import RankingStars from "../components/RankingStars";
import ResponsiveImageSet from "../components/ResponsiveImageSet";
import TestimonialAvatars from "../components/TestimonialAvatars";
import Text from "../components/Text";
import { imgHero } from "../imageIndex";

export default function Hero() {
  return (
    <Container
      className="w-full overflow-hidden relative z-0 flex flex-col gap-12 sm:gap-16 lg:gap-20 bg-(--light-salmon-50) pt-6 sm:pt-8 px-4 sm:px-8 lg:px-[135px] pb-20 lg:pt-8 lg:pb-20"
      as="header"
      id="hero"
    >
      <Pattern />
      <Glow className="-z-10 right-0 bottom-0 translate-x-1/3 translate-y-1/3" />
      <Logo />
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-16">
        <ContentSide />
        <div className="relative w-full h-[384px] md:h-[790px] lg:h-[606px] rounded-2xl overflow-hidden">
          <ResponsiveImageSet
            imageSet={imgHero}
            alt="People reading the same book"
            className="object-top"
          />
        </div>
      </div>
    </Container>
  );
}

function ContentSide() {
  return (
    <div className="h-fit">
      <Text
        preset={1}
        className="mb-6 bg-linear-to-br from-(--light-salmon-500) to-(--neutral-900) bg-clip-text text-transparent"
        as="h1"
      >
        Join the ultimate tech book club
      </Text>
      <Text preset={5} className="mb-8 text-(--neutral-700)">
        Turn your reading time into learning time with fellow tech enthusiasts.
        Get curated recommendations, join vibrant discussions, and level up your
        skills one chapter at a time.
      </Text>
      <Button className="mb-5" text="Review membership options" icon="down" />
      <div className="flex flex-row gap-3 items-center">
        <TestimonialAvatars />
        <div className="flex flex-col gap-1">
          <RankingStars />
          <Text as="span" preset={7} className="text-(--neutral-700)">
            200+ developers joined already
          </Text>
        </div>
      </div>
    </div>
  );
}
