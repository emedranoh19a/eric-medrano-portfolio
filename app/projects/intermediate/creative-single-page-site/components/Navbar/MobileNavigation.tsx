"use client"

import { useClickOutside } from "@/app/hooks/useClickOutside";
import { cn } from "@/app/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
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


    return <div className="lg:hidden">
        <button onClick={handleToggle} className={buttonStyles} style={{ anchorName: "--mobile-menu" }}>
            <Image
                src={open ? iconCross : iconHamburger}
                fill
                className="object-contain"
                alt={open ? "close menu" : "open menu"}
            />
        </button>
        {
            open && <Menu onToggle={handleToggle} />
        }
    </div>
}

function Menu({ onToggle }: { onToggle: () => void }) {
    //Continued development: This margin should be 10
    const router = useRouter();
    const ref = useRef(null);
    useClickOutside(ref, onToggle);
    return <menu
        ref={ref}
        className="fixed mt-16 bg-bg-black text-white flex flex-col gap-6 items-center pt-8 pb-7 px-6.5"
        style={{
            positionAnchor: "--mobile-menu",
            positionArea: "bottom span-left"
        }}
    >
        <Link href="#about" onClick={onToggle}> About</Link>
        <Link href="#services" onClick={onToggle}> Service</Link>
        <Link href="#projects" onClick={onToggle}> Project</Link>
        <Button text="Schedule a Call" color="red" variant="filled" onClick={() => {
            router.push("#cta");
            onToggle();
        }} />
    </menu>
}
