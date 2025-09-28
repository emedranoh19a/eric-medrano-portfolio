import Image from "next/image";
import Logo from "../components/Logo";
import {
  iconFacebook,
  iconInstagram,
  iconPinterest,
  iconTwitter,
} from "../imageIndex";

export default function Footer() {
  return (
    <footer className="bg-green-300 px-[38.5px] py-[73.5px] flex flex-col items-center relative ">
      <Logo fill="#3e7467" className="mx-auto" />
      <ul className="mt-10 mb-20 preset-10 text-green-500 gap-14 flex">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <ul className="flex gap-6">
        <SNSIcon src={iconFacebook} alt="facebook icon" />
        <SNSIcon src={iconInstagram} alt="instagram icon" />
        <SNSIcon src={iconTwitter} alt="twitter icon" />
        <SNSIcon src={iconPinterest} alt="pinterest icon" />
      </ul>
    </footer>
  );
}

function SNSIcon({ src, alt }) {
  return (
    <li className="relative w-5 aspect-square">
      <Image src={src} alt={alt} fill className="object-contain" />
    </li>
  );
}
