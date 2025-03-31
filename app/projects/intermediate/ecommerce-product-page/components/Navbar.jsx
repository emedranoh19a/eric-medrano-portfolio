import NavbarMenu from "./NavbarMenu";
import NavbarProfile from "./NavbarProfile";

export default function Navbar() {
  return (
    <nav className="flex w-full justify-between bg-lime-300 p-4 items-between">
      <NavbarMenu />
      <NavbarProfile />
    </nav>
  );
}
