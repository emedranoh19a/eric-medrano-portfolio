import SplitSection from "../components/SplitSection";
import { joinUs } from "../imageIndex";

export default function About() {
  return (
    <section id="about">
      <SplitSection
        title="Care to join our mission? "
        src={joinUs}
        alt="A man leading a team"
        reverse
        pattern={1}
        direction="bl"
        withButton
        buttonLabel="Say hello"
      >
        We&apos;re always looking for ambitious individuals to help us on our
        journey. If you&apos;re passionate about our mission to provide clean,
        accessible transport to improve urban living we want to hear from you!
      </SplitSection>{" "}
    </section>
  );
}
