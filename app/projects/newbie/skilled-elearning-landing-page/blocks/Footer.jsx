import Button from "../components/Button";
import Logo from "../components/Logo";

export default function Footer() {
  return (
    <div className="bg-(--blue-900)">
      <div className="container mx-auto flex justify-between items-center py-6 px-5">
        <Logo />
        <Button variant="purple" />
      </div>
    </div>
  );
}
