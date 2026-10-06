import { cn } from "@/app/utils/utils"
import Image from "next/image"
import Link from "next/link"
import { logo } from "../../../assets/assetIndex"

export default function Logo() {
    const containerCn = cn(
        "relative w-[113.04px] h-8 lg:w-40 lg:h-12"
    )
    return <Link href="/projects/intermediate/galleria-slideshow-site" className={containerCn}>
        <Image src={logo} className="object-contain" fill alt="Galleria logo" />
    </Link>
}
