import { cn } from "@/app/utils/utils";
import { ReactNode } from "react";

type SubsectionProps = {
    id: string;
    children: ReactNode;
    className?: string;
}
export default function Subsection({ id, className, children }: SubsectionProps) {
    const subsectionStyles = cn("mb-20 last:mb-0", className);
    return <div id={id} className={subsectionStyles}>{children}</div>
}
