"use client";
import { cloneElement, createContext, useContext } from "react";

const DropdownContext = createContext();

function NavbarDropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return <div> navbarDropdown</div>;
}

function Trigger() {
  const values = useContext(DropdownContext);

  return cloneElement(children, {
    onClick: () => setIsOpen(!isOpen),
  });
}

function Menu() {
  return <div>Menu</div>;
}

NavbarDropdown.Trigger = Trigger;
NavbarDropdown.Menu = Menu;
export default NavbarDropdown;
