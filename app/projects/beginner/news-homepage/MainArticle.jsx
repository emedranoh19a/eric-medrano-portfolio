import { cn } from "@/app/utils/utils";
import Image from "next/image";
import Button from "./components/Button";
import Text from "./components/Text";
import { imageWeb3Desktop, imageWeb3Mobile } from "./imageIndex";

export default function MainArticle({ className }) {
  return (
    <div>
      <div className="relative w-full h-[300px] mb-6">
        <Image
          src={imageWeb3Desktop}
          fill
          alt="image web 3"
          className="object-cover hidden lg:block"
        />
        <Image
          src={imageWeb3Mobile}
          alt="image web 3"
          fill
          className="object-cover block lg:hidden"
        />
      </div>
      <MainArticleContent />
    </div>
  );
}

function MainArticleContent({ className }) {
  const containerCn = cn("flex flex-col lg:flex-row gap-8", className);

  return (
    <div className={containerCn}>
      <Text preset={2} className="text-(--navy-950)">
        The Bright Future of Web 3.0?
      </Text>
      <div className="flex flex-col justify-between gap-6 lg:gap-8">
        <Text preset={6} className="text-(--navy-600)">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </Text>
        <Button text="Read more" className="w-fit" />
      </div>
    </div>
  );
}
