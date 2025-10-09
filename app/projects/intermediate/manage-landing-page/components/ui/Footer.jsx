import { footerIcons, links } from "../../data";
import Form from "./Form";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative z-0 py-6 sm:py-12 lg:py-15">
      {/* background */}
      <div className="bg-gray-950 w-screen h-full top-0 absolute left-1/2 -translate-x-[50vw] -z-10" />
      {/* items */}
      <div className="max-w-[327px] mx-auto flex flex-col items-center w-full">
        <Form />
        <List />
        <LogoAndIcons />
        <Copyright />
      </div>
    </footer>
  );
}
function LogoAndIcons() {
  return (
    <div className="flex flex-col-reverse lg:flex-col gap-14 lg:justify-between">
      <Logo light />
      <div className="flex flex-row gap-4">
        {footerIcons.map((footerIcon, i) => (
          <Icon {...footerIcon} key={i} />
        ))}
      </div>
    </div>
  );
}
function List() {
  return (
    <ul className="preset-4-regular text-white grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2">
      {links.map((link, i) => (
        <li className={link.className}>{link.label}</li>
      ))}
    </ul>
  );
}
function Icon({ title, icon: Icon }) {
  return (
    <div className="w-[20px] cursor-pointer aspect-square relative text-red-500 fill-white hover:fill-orange-500">
      {/* <Image src={icon} className="object-contain" fill alt={`${title} icon`} /> */}
      <Icon />
    </div>
  );
}
function Copyright() {
  return (
    <span classNAme="preset-5-medium text-white/50 text-center lg:text-right">
      Copyright 2020. All Rights Reserved
    </span>
  );
}

// Updates in your inbox…
// Go

//
