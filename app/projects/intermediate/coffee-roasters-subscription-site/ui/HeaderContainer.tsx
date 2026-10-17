import { cn } from "@/app/utils/utils"
import Image, { StaticImageData } from "next/image"
import { ReactNode } from "react"

type HeaderContainerProps = {
    className?: string,
    children: ReactNode,
    imgMobile: StaticImageData,
    imgTablet: StaticImageData,
    imgDesktop: StaticImageData
}
export default function HeaderContainer(
    { className, children, imgMobile, imgTablet, imgDesktop }: HeaderContainerProps
) {
    const containerStyles = cn(
        "relative z-0 overflow-hidden rounded-[10px]",
        "py-[100px] sm:py-[104px] lg:py-[117px]",
        "px-6 sm:px-[58px] lg:px-[85px]",
        className
    )
    return <div className={containerStyles}>
        <div className="-z-10 bg-black w-full h-full absolute top-0 left-0">
            <Image src={imgMobile} className="object-cover sm:hidden" fill alt="coffee" />
            <Image src={imgTablet} className="object-cover hidden sm:inline-block lg:hidden" fill alt="coffee" />
            <Image src={imgDesktop} className="object-cover hidden lg:inline-block" fill alt="coffee" />
        </div>
        {children}
    </div>
}
