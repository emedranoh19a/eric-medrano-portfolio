import { cn } from "@/app/utils/utils"

export default function Footer() {
    const footerCn = cn(
        "text-center font-regular text-[14px] tracking-[-0.19px]",
        //TODO: Change the colors on dark mode
        "text-[#9495A5]", //dark 5B5E7E
        "")
    return <footer className={footerCn}>Drag and drop to reorder list</footer>
}
