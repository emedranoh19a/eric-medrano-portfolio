import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import clsx from "clsx";

export function useCommonText() {
    const bp = useBreakpoint();
    const titleStyles = clsx(
        "text-blue-950",
        bp === "base" || bp === "sm" ? "preset-1-mobile" : "preset-2"
    );
    const textStyles = clsx(
        "text-blue-950/50",
        bp === "base" || bp === "sm" ? "preset-2-mobile-regular" : "preset-4"
    );
    return { titleStyles, textStyles }
}
