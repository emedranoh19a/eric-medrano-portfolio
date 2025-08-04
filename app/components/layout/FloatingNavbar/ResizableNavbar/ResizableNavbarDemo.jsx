"use client";
import {
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
  ResizableNavbar,
} from "./ResizableNavbar.jsx";

export default function ResizableNavbarDemo() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  // <ResizableNavbar>
  {
    /* Desktop Navigation */
  }

  // </ResizableNavbar>
  return (
    <ResizableNavbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton variant="secondary">Login</NavbarButton>
          <NavbarButton variant="primary">Book a call</NavbarButton>
        </div>
      </NavBody>
    </ResizableNavbar>
  );
}
