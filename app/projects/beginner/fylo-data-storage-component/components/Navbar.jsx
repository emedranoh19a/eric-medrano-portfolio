import Icons from "./Icons";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="w-full max-w-[350px] bg-blue-850 p-10 flex justify-start rounded-lg rounded-tr-[100px]">
      <div className="flex flex-col gap-8">
        <Logo />
        <Icons />
      </div>
    </nav>
  );
}
