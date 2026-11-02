"use client"
import { createContext, ReactNode, useContext, useState } from "react";

const LanguageContext = createContext(null)
type Language = "ja" | "en" | "es"
export default function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");
    return <LanguageContext value={{ language, setLanguage }}>
        {children}
    </LanguageContext>

}


export function useLanguage() {
    return useContext(LanguageContext)
}
