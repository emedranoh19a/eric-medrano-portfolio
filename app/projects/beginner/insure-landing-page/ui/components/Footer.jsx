import Image from "next/image";
import {
  bgPatternFooterDesktop,
  bgPatternFooterMobile,
  iconFacebook,
  iconInstagram,
  iconPinterest,
  iconTwitter,
} from "../../imageIndex";
import Logo from "./Logo";
const footerColumns = [
  {
    title: "Our company",
    items: ["how we work", "why insure?", "view plans", "reviews"],
  },
  {
    title: "Help me",
    items: ["faq", "terms of use", "privacy policy", "cookies"],
  },
  { title: "Contact", items: ["sales", "support", "live chat"] },
  { title: "Others", items: ["careers", "press", "licenses"] },
];
export default function Footer() {
  return (
    <footer className="relative z-0">
      <Background />
      <div className="px-6 py-[84px] sm:py-[90px] sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <Logo />
          <SNSLogos />
        </div>
        <hr className="text-gray-200 my-10 lg:mt-8 lg:mb-12" />
        <div className="mx-auto w-fit md:w-full grid grid-cols-1 sm:grid-cols-4 gap-12 sm:gap-16">
          {footerColumns.map((column, index) => (
            <FooterColumn key={index} {...column} />
          ))}
        </div>
      </div>
    </footer>
  );
}
function Background() {
  return (
    <div className="absolute -z-20 h-full w-screen left-1/2 -translate-x-[50vw] bg-gray-50">
      <div className="relative w-full h-full">
        <div className="absolute h-[174px] sm:h-[184px] w-full lg:w-[547px] lg:h-[235px] left-0 top-0">
          <Image
            src={bgPatternFooterMobile}
            alt=""
            fill
            className="object-fill sm:hidden"
          />
          <Image
            src={bgPatternFooterDesktop}
            alt=""
            fill
            className="object-fill hidden sm:block"
          />
        </div>
      </div>
    </div>
  );
}

function SNSLogos() {
  return (
    <div className="flex gap-4">
      <SNSIcon src={iconFacebook} alt="facebook" />
      <SNSIcon src={iconTwitter} alt="twitter" />
      <SNSIcon src={iconPinterest} alt="pinterest" />
      <SNSIcon src={iconInstagram} alt="instagram" />
    </div>
  );
}
function SNSIcon({ src, alt }) {
  return (
    <div className="w-6 aspect-square relative">
      <Image src={src} alt={alt} className="object-contain" fill />
    </div>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div className="uppercase flex flex-col gap-8 whitespace-nowrap">
      <div>
        <span className="preset-8 text-gray-700">{title}</span>
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <span key={index} className="preset-8 text-blue-950 cursor-pointer">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
