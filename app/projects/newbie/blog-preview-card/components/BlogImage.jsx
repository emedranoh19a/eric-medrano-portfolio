import Image from "next/image";
import illustration from "../images/illustration-article.svg";
export default function BlogImage() {
  return (
    <div className="relative rounded-xl overflow-hidden h-60 w-full">
      <Image className="object-cover" fill src={illustration} />
    </div>
  );
}
