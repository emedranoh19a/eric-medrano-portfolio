import Logo from "../components/Logo";
import ThemeToggle from "../components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between">
      <Logo />
      <ThemeToggle />
    </nav>
  );
}
