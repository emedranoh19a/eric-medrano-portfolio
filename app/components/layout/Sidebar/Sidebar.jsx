"use client";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";
// import { IconMenu2, IconX } from "@tabler/icons-react";
import { SidebarProvider } from "./SidebarProvider";

export const Sidebar = ({ children, open, setOpen, animate }) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props) => {
  return (
    <div>
      <DesktopSidebar {...props} />
      <MobileSidebar {...props} />
    </div>
  );
};
