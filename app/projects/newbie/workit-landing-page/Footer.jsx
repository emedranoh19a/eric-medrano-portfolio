import Icon from "./components/Icon";
import Logo from "./components/Logo";
import { iconFacebook, iconInstagram, iconTwitter } from "./imageIndex";

export default function Footer() {
  return (
    <footer id="footer" className="pb-14 xl: pb-40 bg-white">
      <div className="flex flex-col gap-14 justify-center items-center mx-auto">
        <Logo dark />
        <div className="flex w-fit gap-7">
          <Icon name="facebook" src={iconFacebook} />
          <Icon name="twitter" src={iconTwitter} />
          <Icon name="instagram" src={iconInstagram} />
        </div>
      </div>
    </footer>
  );
}
