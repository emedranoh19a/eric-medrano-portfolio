import clsx from "clsx";
import Button from "./Button";
import Logo from "./Logo";
import SNS from "./SNS";

const links = [
  { text: "About us", className: "" }, //1
  { text: "Careers", className: "" },
  { text: "Contact", className: "lg:order-3" }, //3
  { text: "Blog", className: "" }, //5
  { text: "Support", className: "lg:order-5" },
  { text: "Privacy Policy", className: "" },
];
export default function Footer() {
  return (
    <footer className="relative z-0 py-14 lg:px-[47px] ">
      <div className="bg-blue-950 w-screen h-full absolute top-0 left-1/2 -translate-x-[50vw] -z-10" />
      <div className="mx-auto w-full h-full flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
        <div className="h-auto flex flex-col justify-between">
          <Logo light />
          <SNS />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-8 lg:gap-y-6 lg:ml-32">
          {links.map((link, i) => (
            <div
              className={clsx(
                "text-white min-w-40 text-center lg:text-left",
                "hover:text-green-400 transition-colors",
                link.className
              )}
              key={i}
            >
              {link.text}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center  gap-6 lg:ml-auto">
          <Button />
          <span className="block preset-7-regular text-white opacity-50">
            © Digitalbank. All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
