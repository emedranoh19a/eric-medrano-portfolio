import DarkThemeToggle from "./DarkThemeToggle";
import Logo from "./Logo";

export default function Header() {
  return (
    <nav className="flex justify-between">
      <Logo />
      <DarkThemeToggle />
    </nav>
  );
}
