import Button from "../../components/Button";
import Logo from "../../components/Logo";

export default function Nav({ as: Tag = "nav" }) {
  return (
    <Tag className="w-full flex justify-between">
      <Logo />
      <Button text="Free Consultation" />
    </Tag>
  );
}
