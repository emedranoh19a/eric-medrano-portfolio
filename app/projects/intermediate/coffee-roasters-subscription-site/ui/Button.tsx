import { cn } from "@/app/utils/utils";

type ButtonProps = {
    label: string;
    className?: string;
}
export default function Button({ label, className }: ButtonProps) {
    const buttonStyles = cn("", "", className)
    return <button className={buttonStyles}>{label}</button>
}
