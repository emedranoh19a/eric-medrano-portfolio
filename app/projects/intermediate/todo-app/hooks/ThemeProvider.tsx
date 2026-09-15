"use client"
import { createContext, ReactNode, useContext, useState } from "react";
type ThemeProviderProps = {
    children: ReactNode;
}
const ThemeContext = createContext(null)

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const [isDark, setIsDark] = useState(false);
    function toggleDark() {
        setIsDark((s) => !s)
    }
    return <ThemeContext.Provider value={{ isDark, toggleDark }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    return useContext(ThemeContext);
}
