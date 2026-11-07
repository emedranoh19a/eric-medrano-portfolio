import { cn } from "@/app/utils/utils";

type ArrowButtonProps = {
    variant: "left" | "right";
    className?: string;
    isDisabled: boolean;
    onClick: () => void;
}
export default function ArrowButton({ isDisabled, variant, className, onClick }: ArrowButtonProps) {
    const buttonStyles = cn(
        "cursor-pointer disabled:cursor-none",
        "relative inline-block rounded-full",
        "w-10 aspect-square",
        isDisabled && "opacity-40",
        className
    );
    return <button className={buttonStyles} disabled={isDisabled} onClick={onClick}>
        {variant === "left" ? <ArrowPrevious /> : <ArrowNext />}
    </button>
}

function ArrowNext() {
    return <svg className="stroke-red hover:stroke-light-red transition-colors" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
            <circle cx="20" cy="20" r="19.5" />
            <path strokeWidth="2" d="M17.5 15l5 5-5 5" />
        </g>
    </svg>
}

function ArrowPrevious() {
    return <svg className="stroke-red hover:stroke-light-red transition-colors" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <g transform="matrix(-1 0 0 1 40 0)" fill="none" fillRule="evenodd">
            <circle cx="20" cy="20" r="19.5" />
            <path strokeWidth="2" d="M17.5 15l5 5-5 5" />
        </g>
    </svg>

}
