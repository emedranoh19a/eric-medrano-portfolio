import Logo from "./Logo";
const footerItems = [
  {
    title: "Product",
    items: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  },
  { title: "Company", items: ["About", "Team", "Blog", "Careers"] },
  { title: "Connect", items: ["Contact", "Newsletter", "LinkedIn"] },
];
export default function Footer() {
  return (
    <footer className="text-white relative z-0 py-18 px-6 sm:px-10 sm:py-18 lg:px-41 lg:px-18">
      <div className="bg-gray-950 w-screen h-full top-0 absolute left-1/2 -translate-x-[50vw] -z-10 rounded-tr-[100px]" />
      <div className="flex flex-col sm:flex-row justify-between gap-18 sm:gap-[126px] lg:gap-[184px] w-full">
        <Logo className="mx-auto sm:mx-none" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-4 lg:gap-8 sm:grid-cols-3 text-center sm:text-left flex-1">
          {footerItems.map((footerItem, i) => (
            <FooterSection key={i} {...footerItem} />
          ))}
        </div>
      </div>
    </footer>
  );
}
function FooterSection({ title, items }) {
  return (
    <div>
      <h3 className="preset-6-bold mb-8">{title}</h3>
      <ul className="preset-6-regular">
        {items.map((item, i) => (
          <li key={i} className="hover:underline cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
