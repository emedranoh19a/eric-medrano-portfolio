import Button from "../components/Button";
import Logo from "../components/Logo";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-16 sm:mb-20">
      <Logo />
      <Button variant="outline" />
    </nav>
  );
}
