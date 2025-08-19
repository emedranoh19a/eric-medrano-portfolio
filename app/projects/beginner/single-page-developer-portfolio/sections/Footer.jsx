import { cn } from "@/app/utils/utils";
import Image from "next/image";
import Text from "../components/Text";
import {
  iconFrontendMentor,
  iconGithub,
  iconLinkedin,
  iconTwitter,
} from "../imageIndex";
const icons = [
  { name: "github", src: iconGithub },
  { name: "frontend mentor", src: iconFrontendMentor },
  { name: "linkedin", src: iconLinkedin },
  { name: "twitter", src: iconTwitter },
];
export default function Footer({ as: Tag = "footer" }) {
  const iconsContainer = cn("flex flex-row gap-6", Tag === "nav" && "mr-6");
  return (
    <Tag className="pt-10 pb-14 sm:pt-[30px] sm:pb-10 lg:pt-[47px] lg:pb-[92px] w-full lg:col-span-2 flex flex-col gap-5 items-center sm:flex-row justify-between">
      <Logo />
      <div className={iconsContainer}>
        {icons.map((icon, i) => (
          <Icon {...icon} key={i} />
        ))}
      </div>
    </Tag>
  );
}
function Logo() {
  return (
    <div>
      <Text className="font-bold text-[24px] leading-[32px] tracking-[-0.33px]">
        adamkeyes
      </Text>
    </div>
  );
}
function Icon({ name, src }) {
  return (
    <div className="w-5 aspect-square relative">
      <Image src={src} fill alt={`${name} icon`} className="object-contain" />
    </div>
  );
}
