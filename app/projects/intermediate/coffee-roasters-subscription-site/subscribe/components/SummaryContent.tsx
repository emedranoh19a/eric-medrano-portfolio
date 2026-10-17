import { cn } from "@/app/utils/utils"

export default function SummaryContent({ variant }: { variant?: "modal" }) {
    const containerStyles = cn(
        variant !== "modal" ? "text-white bg-dark-grey-blue" : "text-grey",
        variant !== "modal" ? "py-8 sm:py-7 px-6 sm:px-11 lg:px-16" : "",
        "rounded-lg",
    )
    const titleStyles = cn(
        "",
        variant !== "modal" ? "opacity-50  uppercase mb-2 body" : "px-6 sm:px-11 lg:px-16 heading-2 px-6 sm:px-14 py-7 sm:pt-12 sm:pb-10 text-[28px] text-white sm:text-[40px] bg-dark-grey-blue"
    )
    const bodyStyles = cn(
        "heading-4",
        variant !== "modal" ? "" : "pt-10 sm:pt-[57px] px-6 sm:px-11 lg:px-16"
    )
    return <div className={containerStyles}>
        <h3 className={titleStyles}>Order Summary</h3>
        <p className={bodyStyles}>
            “I drink my coffee as <StyledSpan label="Filter" />,
            with a <StyledSpan label="Decaf" /> type of bean.
            <StyledSpan label=" 250g" /> ground ala <StyledSpan label="Cafetiare" />,
            sent to me <StyledSpan label="______" />.”
        </p>
    </div>
}
function StyledSpan({ label }: { label?: string | null }) {
    return <span className="text-dark-cyan">{label ? label : "____"}</span>
}
