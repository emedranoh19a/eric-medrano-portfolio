import { cn } from "@/app/utils/utils"
import Image from "next/image"
import Link, { LinkProps } from "next/link"
import { iconBackButton, iconNextButton } from "../../../assets/assetIndex"

type MediaButtonProps = { variant: "left" | "right", disabled?: boolean, href?: LinkProps["href"] }

export default function MediaButton({ variant = "left", disabled = false, href }: MediaButtonProps) {

    const linkStyles = cn("relative inline-block ",
        "w-[16.78px] sm:w-[25.17px] h-4 sm:h-6",
        disabled ? "opacity-15" : "")

    if (disabled) {
        return <div className={linkStyles}>
            <Image src={variant === "left" ? iconBackButton : iconNextButton} className="object-contain" fill alt="previous" />
        </div>
    }
    return <Link href={href} className={linkStyles}>
        <Image src={variant === "left" ? iconBackButton : iconNextButton} className="object-contain" fill alt="next" />
    </Link>
}
