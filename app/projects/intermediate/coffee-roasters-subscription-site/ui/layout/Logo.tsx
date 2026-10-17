import Image from "next/image";
import Link from "next/link";
import { logo, logoWhite } from "../../assets/assetIndex";

export default function Logo({ variant = "black" }: { variant: "white" | "black" }) {
    return <Link href="/projects/intermediate/coffee-roasters-subscription-site" className="relative shrink-0 cursor-pointer ">
        <Image src={variant === "black" ? logo : logoWhite} height={1000} width={1000} style={{ height: "26px", width: "auto" }} alt="Logo" />
    </Link>
}
