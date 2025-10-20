import SplitSection from "../components/SplitSection";
import { betterLiving, digitalEra } from "../imageIndex";

export default function Intro() {
  return (
    <section id="intro" className="w-full">
      <SplitSection
        title="Mobility for the digital era"
        src={digitalEra}
        alt="A smartphone held by a woman"
        reverse
        pattern={4}
        direction="tl"
      >
        Getting around should be simple (and even fun!) for everyone. We embrace
        technology to provide low cost, smart access to scooters at your
        fingertips.
      </SplitSection>
      <SplitSection
        title="Better urban living"
        src={betterLiving}
        pattern={5}
        direction="br"
      >
        We&apos;re helping connect cities and bring people closer together. Our
        scooters are also fully-electric and we offset the minimal carbon
        footprint for each ride.
      </SplitSection>
    </section>
  );
}
