import clsx from "clsx";
import Image from "next/image";
import {
  iconCompany,
  iconLocation,
  iconTwitter,
  iconWebsite,
} from "../../assetIndex";

export default function Icon({ variant = "" }) {
  //location, twitter, website, company
  const iconProps = {
    location: {
      src: iconLocation,
      alt: "location",
      className: "w-5 h-[16.25px]",
    },
    twitter: { src: iconTwitter, alt: "twitter", className: "w-5 h-[16.5px]" },
    website: { src: iconWebsite, alt: "website", className: "w-5 h-5" },
    company: { src: iconCompany, alt: "company", className: "w-5 h-5" },
  };
  const iconContainerStyles = clsx("relative", iconProps[variant]?.className);

  return (
    <div className={iconContainerStyles}>
      <Image
        src={iconProps[variant]?.src}
        alt={iconProps[variant]?.alt}
        className="object-contain"
        fill
      />
    </div>
  );
}
