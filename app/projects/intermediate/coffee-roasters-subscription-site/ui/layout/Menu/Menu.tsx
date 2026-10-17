import { cn } from "@/app/utils/utils";
import Link, { LinkProps } from "next/link";

export default function Menu({ variant = "Footer" }: { variant: "Footer" | "Navbar" }) {
    const itemStyles = variant === "Footer" ? "" : "";
    return <menu className="">
        {variant === "Footer" &&
            <ul className="flex flex-col gap-6 sm:gap-8 sm:flex-row items-center text-navigation uppercase text-grey">
                <MenuItem className="hover:text-light-cream" label="home" href="/projects/intermediate/coffee-roasters-subscription-site" />
                <MenuItem className="hover:text-light-cream" label="about" href="/projects/intermediate/coffee-roasters-subscription-site/about" />
                <MenuItem className="hover:text-light-cream" label="create your plan" href="/projects/intermediate/coffee-roasters-subscription-site/subscribe" />
            </ul>}

        {variant === "Navbar" &&
            <>
                <ul className="hidden sm:flex gap-6 sm:gap-8 sm:flex-row items-center text-navigation uppercase text-grey">
                    <MenuItem className="text-dark-grey-blue" label="home" href="/projects/intermediate/coffee-roasters-subscription-site" />
                    <MenuItem className={itemStyles} label="about" href="/projects/intermediate/coffee-roasters-subscription-site/about" />
                    <MenuItem className={itemStyles} label="subscribe" href="/projects/intermediate/coffee-roasters-subscription-site/subscribe" />
                </ul>
            </>
        }
    </menu>
}

function MenuItem({ className, label, href }: { className?: string; label: string; href: LinkProps["href"] }) {
    return <li>
        <Link className={cn("transition-colors", className)} href={href}>
            {label}
        </Link>
    </li>
}
