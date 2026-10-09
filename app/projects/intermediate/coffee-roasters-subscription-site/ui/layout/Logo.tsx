import Image from "next/image";
import { logo, logoWhite } from "../../assets/assetIndex";

export default function Logo({ variant = "black" }: { variant: "white" | "black" }) {
    return <div className="relative shrink-0">
        <Image src={variant === "black" ? logo : logoWhite} height={1000} width={1000} style={{ height: "26px", width: "auto" }} alt="Logo" />
    </div>
}
