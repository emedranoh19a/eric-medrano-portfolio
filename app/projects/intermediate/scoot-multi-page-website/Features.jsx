import SplitSection from "./components/SplitSection";
import { nearYou, payments, telemetry } from "./imageIndex";

export default function Features() {
  return (
    <section id="features">
      <SplitSection
        title="Easy to use riding telemetry"
        src={telemetry}
        alt="A woman handling a home"
        reverse
        pattern={1}
        direction="bl"
        withButton
      >
        The Scoot app is available with riding telemetry. This means it can show
        you your average speed, how long you&apos;ve been using the scooter,
        your traveling distance, and many more things all in an easy to use app.
      </SplitSection>
      <SplitSection
        title="Coming to a city near you"
        src={nearYou}
        alt="A road and buildings"
        pattern={2}
        direction="br"
        withButton
      >
        Scoot is available in 4 major cities so far. We&apos;re expanding
        rapidly, so be sure to let us know if you want to see us in your
        hometown. We&apos;re aiming to let our scooters loose on 23 cities over
        the coming year.
      </SplitSection>
      <SplitSection
        title="Zero hassle payments"
        src={payments}
        alt="A man taking money from his wallet"
        reverse
        pattern={3}
        direction="bl"
        withButton
      >
        Our payment is as easy as one two three. We accept most credit cards and
        debit cards. You can also link your PayPal account inside the app. Need
        to pay later? No worries! You can defer payment for up to a month.
      </SplitSection>
    </section>
  );
}
