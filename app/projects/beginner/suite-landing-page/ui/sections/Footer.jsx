import Icon from "../components/Icon";
import Logo from "../components/Logo";

export default function Footer() {
  return (
    <footer className="pb-10 lg:pb-20 items-center flex flex-col sm:flex-row justify-between gap-8">
      <Logo />
      <p className="preset-8 text-neutral-500">Copyright - Suite</p>
      <SNS />
    </footer>
  );
}

function SNS() {
  return (
    <ul className="flex flex-row gap-8">
      <Icon variant="facebook" />
      <Icon variant="twitter" />
      <Icon variant="instagram" />
    </ul>
  );
}
