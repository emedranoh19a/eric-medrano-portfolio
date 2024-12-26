"use client";

import { sidebarLinks } from "@/app/data";
import { cn } from "@/app/utils/utils";
import { useState } from "react";
import { Sidebar, SidebarBody } from "./Sidebar";
import SidebarLink from "./SidebarLink";
import SidebarLogo from "./SidebarLogo";
import SidebarLogoIcon from "./SidebarLogoIcon";

export function SidebarDemo({ children }) {
  //State:
  const [open, setOpen] = useState(false);

  //Style:
  const containerStyles = cn(
    "flex flex-col md:flex-row",
    "w-full max-w-screen min-h-screen h-fit",
    "mx-auto",
    "rounded-md"
  );

  return (
    <div className={containerStyles}>
      <Sidebar open={open} setOpen={setOpen}>
        {/* Display related styles will conflict with "hidden" */}
        <SidebarBody className="gap-10 relative self-stretch h-full ">
          {/* TODO: Insert here a fancy corner */}

          <div className="top-0 left-20">
            <div className="flex flex-col overflow-x-hidden sticky h-fit">
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
                  // TODO Add image of me.
                  // icon: (
                  //   <Image
                  //     src="https://assets.aceternity.com/manu.png"
                  //     className="h-7 w-7 flex-shrink-0 rounded-full"
                  //     width={50}
                  //     height={50}
                  //     alt="Avatar"
                  //   />
                  // ),
                  icon: "", //This is essentially, my avatar, .
                }}
              />
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="h-fit overflow-y-scroll flex-1 mx-auto w-full">
        {children}
      </div>
    </div>
  );
}
