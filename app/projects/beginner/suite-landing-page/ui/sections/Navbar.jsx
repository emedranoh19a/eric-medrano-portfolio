import Button from "../components/Button";
import Logo from "../components/Logo";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <Logo />
      <Button variant="outline" />
    </nav>
  );
}
