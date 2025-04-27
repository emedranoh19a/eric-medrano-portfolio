import Icon from "./components/Icon";
import Logo from "./components/Logo";

export default function Footer() {
  return (
    <footer id="footer" className="py-20 bg-white">
      <div className="flex flex-col gap-14 justify-center items-center mx-auto">
        <Logo dark />
        <div className="flex w-fit gap-7">
          <Icon name="facebook" />
          <Icon name="twitter" />
          <Icon name="instagram" />
        </div>
      </div>
    </footer>
  );
}
