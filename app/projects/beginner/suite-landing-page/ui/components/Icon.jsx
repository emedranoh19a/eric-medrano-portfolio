import clsx from "clsx";
import Image from "next/image";
import { iconFacebook, iconInstagram, iconTwitter } from "../../assetIndex";

export default function Icon({ variant = "" }) {
  const iconContainerStyles = clsx(
    "relative",
    variant === "facebook" && "h-[20px] w-[20px]",
    variant === "twitter" && "h-[16.25px] w-[20px]",
    variant === "instagram" && "h-[20px] w-[20px]",
    className
  );
  const iconSrc =
    variant === "facebook"
      ? iconFacebook
      : variant === "twitter"
      ? iconTwitter
      : iconInstagram;
  return (
    <div className={iconContainerStyles}>
      <Image src={iconSrc} alt={variant} className="object-contain" fill />
    </div>
  );
}
