"use client"
import { useClickOutside } from "@/app/hooks/useClickOutside";
import { cn } from "@/app/utils/utils";
import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Button from "../../components/Button";
import Overlay from "./Overlay";
const DialogContext = createContext(null);

export default function Dialog({ children }: {
    children: ReactNode;
}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const overlayRoot = document.getElementById("overlay-root")

    return <DialogContext.Provider value={{ isOpen, setIsOpen }}>
        {children}
        {isOpen && createPortal(
            <Overlay />
            , overlayRoot)}
    </DialogContext.Provider>


};

export function DialogTrigger() {
    const { setIsOpen } = useContext(DialogContext);
    return <Button className="absolute z-10 left-4 top-4 sm:top-auto sm:bottom-4" onClick={() => setIsOpen(true)} />
}

export function DialogWindow({ children }: { children: ReactNode }) {
    //State:
    const { isOpen, setIsOpen } = useContext(DialogContext)
    const ref = useRef(null);
    useClickOutside(ref, () => setIsOpen(false));

    const overlayRoot = document.getElementById("overlay-root")
    const flexStyles = cn("relative mx-auto", "w-fit h-full flex flex-col items-center justify-center", "px-6  gap-8.25 sm:gap-10.25")
    return !isOpen ? null : createPortal(
        <div className="w-screen h-screen top-0 left-0 fixed z-20">
            <div className={flexStyles}>
                <CloseButton className=" hidden sm:inline-block ml-auto" />
                <div className="relative z-0 w-fit" ref={ref}>
                    <CloseButton className="inline-block sm:hidden absolute -top-9.5  right-0 -translate-y-full" />
                    {children}
                </div>
            </div>
        </div>
        , overlayRoot)
}

type CloseButonProps = { className?: string; }
function CloseButton({ className }: CloseButonProps) {
    const { setIsOpen } = useContext(DialogContext)
    const buttonStyles = cn(
        " block text-link-2 text-right uppercase text-white hover:text-white/25 transition-colors",
        "cursor-pointer ",
        className)
    return <button className={buttonStyles} onClick={() => setIsOpen(false)}>Close</button>
}
