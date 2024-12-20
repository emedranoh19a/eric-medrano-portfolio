"use client";
// import {
//   IconArrowLeft,
//   IconBrandTabler,
//   IconSettings,
//   IconUserBolt,
// } from "@tabler/icons-react";
import { sidebarLinks } from "@/app/data";
import { cn } from "@/app/utils/utils";
import { useState } from "react";
import { Sidebar, SidebarBody } from "./Sidebar";
import SidebarLink from "./SidebarLink";
import SidebarLogo from "./SidebarLogo";
import SidebarLogoIcon from "./SidebarLogoIcon";
// import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";

export function SidebarDemo() {
  //State:
  const [open, setOpen] = useState(false);

  //Style:
  const containerStyles = cn(
    "flex flex-col flex-1 md:flex-row",
    "w-full max-w-screen min-h-screen ",
    "mx-auto",

    "rounded-md"
  );

  return (
    <div className={containerStyles}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 relative h-full min-h-screen ">
          {/* <div
    className="bg-red-500 w-40 h-40 bg-blue-500 absolute top-0 right-0 translate-x-full rounded-br-[-30px]"
    style={{
      mask: `
          right 0 bottom calc(var(--s) + var(--r)) var(--_m),
          right calc(var(--s) + var(--r)) bottom 0 var(--_m),
          radial-gradient(var(--s) at 100% 100%, #0000 99%, #000 101%) 
            calc(-1 * var(--r)) calc(-1 * var(--r)) no-repeat,
          conic-gradient(from 90deg at calc(100% - var(--s) - 2 * var(--r)) calc(100% - var(--s) - 2 * var(--r)), 
            #0000 25%, #000 0)
        `,
    }}
  ></div> */}
          {/* TODO: Insert here a fancy corner */}

          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <SidebarLogo /> : <SidebarLogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {sidebarLinks.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Eric Medrano",
                href: "#",
                // icon: (
                //   <Image
                //     src="https://assets.aceternity.com/manu.png"
                //     className="h-7 w-7 flex-shrink-0 rounded-full"
                //     width={50}
                //     height={50}
                //     alt="Avatar"
                //   />
                // ),
                icon: "",
              }}
            />
          </div>
          {/* <div className="bg-red-500 w-40 h-40 bg-blue-500 absolute top-0 right-0">
    hello
  </div>{" "} */}
        </SidebarBody>
      </Sidebar>
      {/* <Dashboard /> */}
      {/* TODO: insert the children in here */}
      Body
      {/* TODO:Add the children in here */}
    </div>
  );
}
