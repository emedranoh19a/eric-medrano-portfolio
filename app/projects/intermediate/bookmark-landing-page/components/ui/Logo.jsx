import Image from "next/image";
import { logoBookmark, logoBookmarkLight } from "../../imageIndex";

export default function Logo({ light }) {
  return (
    <div className="shrink-0 relative w-[147.74px] h-[25px]">
      <Image
        src={light ? logoBookmarkLight : logoBookmark}
        alt="Bookmark Logo"
        fill
        className="objectc-contain"
      />
    </div>
  );
}
