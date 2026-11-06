"use client"

import { cn } from "@/app/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { iconCross, iconHamburger } from "../../assets/assetIndex";
import Button from "../Button";

export default function MobileNavigation() {
    const [open, setOpen] = useState<boolean>(false);

    const buttonStyles = cn(
        "relative cursor-pointer",
        //close styles:
        "w-5 aspect-square",
        //open styles 
        "w-6 h-4.5"
    )
    function handleToggle() {
        setOpen((s) => !s)
    }


    return <div className="sm:hidden">
        <button onClick={handleToggle} className={buttonStyles} style={{ anchorName: "--mobile-menu" }}>
            <Image
                src={open ? iconCross : iconHamburger}
                fill
                className="object-contain"
                alt={open ? "close menu" : "open menu"}
            />
        </button>
        {/* //TODO: */}
        {
            open && <Menu />
        }
    </div>
}

// .anchor {
//     anchor-name: --example-anchor;
//   }
// .target {
//   position: fixed;
//   position-anchor: --example-anchor;
//   position-area: top;
//   position-try-fallbacks: flip-block;
//   /*
//     Will automatically switch to top margin when the
//     target is under the anchor:
//   */
//   margin-bottom: 8px;
// }

function Menu() {
    //Continued development: This margin should be 10
    return <menu
        className="fixed mt-12.5 bg-bg-black text-white flex flex-col gap-6 items-center pt-8 pb-7 px-6.5"
        style={{
            positionAnchor: "--mobile-menu",
            positionArea: "bottom span-left"
        }}
    >
        <Link href="#about"> About</Link>
        <Link href="#services"> Service</Link>
        <Link href="#projects"> Project</Link>
        <Button text="Schedule a Call" color="red" variant="filled" />
    </menu>
}
