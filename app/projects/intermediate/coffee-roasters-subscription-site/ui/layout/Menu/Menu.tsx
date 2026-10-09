import { cn } from "@/app/utils/utils";
import { LinkProps } from "next/link";

export default function Menu({ variant = "Footer" }: { variant: "Footer" | "Navbar" }) {
    const itemStyles = variant === "Footer" ? "" : "";
    return <menu>
        {variant === "Footer" &&
            <ul className="flex flex-col gap-6 sm:gap-8 sm:flex-row items-center text-navigation uppercase text-grey">
                <MenuItem className="hover:text-light-cream" />
                <MenuItem className="hover:text-light-cream" />
                <MenuItem className="hover:text-light-cream" />
            </ul>}

        {variant === "Navbar" &&
            <ul className="hidden sm:flex flex-col gap-6 sm:gap-8 sm:flex-row items-center text-navigation uppercase text-grey">
                <MenuItem className="hover:text-dark-grey-blue" />
                <MenuItem className={itemStyles} />
                <MenuItem className={itemStyles} />
            </ul>}
    </menu>
}

function MenuItem({ className, label, href }: { className?: string; label: string; href: LinkProps["href"] }) {
    //TODO: add the link component
    return <li>
        <span className={cn("transition-colors", className)}>
            Item
        </span>
    </li>
}
