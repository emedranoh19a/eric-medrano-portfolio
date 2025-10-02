import Image from "next/image";
import {
  iconFacebook,
  iconInstagram,
  iconPinterest,
  iconTwitter,
  iconYoutube,
} from "../imageIndex";

export default function SNS() {
  return (
    <div className="flex gap-4">
      <Icon icon={iconFacebook} />
      <Icon icon={iconYoutube} />
      <Icon icon={iconTwitter} />
      <Icon icon={iconPinterest} />
      <Icon icon={iconInstagram} />
    </div>
  );
}

function Icon({ icon }) {
  return <Image width={20} height={20} src={icon} alt="" />;
}
