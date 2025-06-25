import Icon from "../components/Icon";
import Logo from "../components/Logo";
import Text from "../components/Text";

export default function Footer() {
  return (
    <footer className="relative   container mx-auto pt-16 px-5 sm:px-10 lg:px-20 pb-20 w-full flex flex-col lg:flex-row gap-8 lg:gap-32">
      <Logo />
      <div className="flex flex-col sm:flex-row  sm:justify-between flex-1 gap-8 lg:gap-32">
        <FooterContent />
        <Icons />
      </div>
    </footer>
  );
}
function FooterContent() {
  return (
    <Text preset={5} className="max-w-sm">
      All rights reserved © Equalizer 2021 Have any problems? Contact us via
      social media or email us at <br />{" "}
      <span className="font-bold">equalizer@example.com</span>
    </Text>
  );
}
function Icons() {
  return (
    <div className="flex flex-row gap-8">
      <Icon name="facebook" />
      <Icon name="instagram" />
      <Icon name="twitter" />
    </div>
  );
}
