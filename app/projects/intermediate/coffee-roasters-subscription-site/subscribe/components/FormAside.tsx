//TODO: Plan what to do onClick event
//TODO: Style all, and give special styling to the "active" field (Like a Form Wizard???)
import { cn } from "@/app/utils/utils";

const asideItems = [
    { number: 1, label: "Preferences" },
    { number: 2, label: "Bean Type" },
    { number: 3, label: "Quantity" },
    { number: 4, label: "Grind Option" },
    { number: 5, label: "Deliveries" }]

export default function FormAside({ className }: { className: string }) {
    return <aside className={className}>
        <ul className="heading-4 flex flex-col">
            {asideItems.map((asideItem, i) => <AsideItem key={i} {...asideItem} />)}
        </ul>
    </aside>
}

type AsideItemProps = { number: number, label: string }
function AsideItem({ number, label }: AsideItemProps) {
    //everything's opacity is 40, but the current step is 100%
    // . Only the first number is coloured.
    const containerStyles = cn(
        // number === 1 ? "pt-0 pb-6" : number === 5 ? "pb-0 pt-6" : "py-6",
        "py-6 first:pt-0 last:pb-0",
        "cursor-pointer",
        "flex flex-row items-center gap-6")
    const numberStyles = cn(number === 1 ? "text-dark-cyan" : "text-grey");
    const textStyles = cn("text-dark-grey-blue", "", "", "");
    return <li className={containerStyles}>
        <span className={numberStyles}>{String(number).padStart(2, "0")}</span>
        <span className={textStyles}>{label}</span>
    </li>
}
