import Button from "./Button";
import Text from "./Text";

export default function ThankYouCard() {
  //TODO: fix the width
  return (
    <div className="max-w-[381px]">
      <Text>Thank you!</Text>
      <Text>We&apos;ve added your card details</Text>
      <Button text="Continue" />
    </div>
  );
}
