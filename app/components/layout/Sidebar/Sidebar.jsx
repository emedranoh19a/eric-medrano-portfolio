"use client";
import DesktopSidebar from "./DesktopSidebar";
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
      {/* TODO: Tackle the mobile navigation from here. */}
      <DesktopSidebar {...props} />
      {/* <MobileSidebar {...props} /> */}
    </div>
  );
};
