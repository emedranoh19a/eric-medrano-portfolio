import Image from "next/image";
import illustration from "../images/illustration-article.svg";

export function BlogImage() {
  return (
    <div className="relative rounded-xl overflow-hidden max-w-75 h-50 md:max-w-84">
      <Image
        className="object-cover"
        fill
        src={illustration}
        alt="Blog preview image"
      />
    </div>
  );
}
