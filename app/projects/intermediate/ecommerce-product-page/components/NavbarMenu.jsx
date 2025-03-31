import Image from "next/image";
const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

export default function NavbarMenu() {
  return (
    <div className="flex flex-row-reverse md:flex-row gap-3 md:gap-6">
      <div className="relative h-10 w-20">
        <Image
          fill
          className="object-contain"
          alt="Logo of Sneakers"
          src="/projects/intermediate/ecommerce-product-page/images/logo.svg"
        />
      </div>
      {/* Navbar for screens */}
      <ul className="hidden md:flex flex-row items-center gap-2 text-[var(--dark-grayish-blue)] text-sm">
        {menuItems.map((menuItem, i) => (
          <div key={i} className="">
            {menuItem}
          </div>
        ))}
      </ul>
      <button className="inline-block md:hidden relative">
        <Image
          height={17}
          width={17}
          className="object-contain"
          alt="Logo of Sneakers"
          src="/projects/intermediate/ecommerce-product-page/images/icon-menu.svg"
        />{" "}
      </button>
      {/* Navbar for mobile devices*/}
    </div>
  );
}
