import Button from "../components/Button";
import Logo from "../components/Logo";

export default function Nav() {
  return (
    <div className="relative z-10 bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-6 px-5">
        <Logo dark />
        <Button variant="orange" />
      </div>
    </div>
  );
}
