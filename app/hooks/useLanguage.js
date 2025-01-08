"use client"
import { createContext, useContext } from "react"

const LanguageContext = createContext(null)

export default function LanguageProvider() {
    //State: 
    const [language, setLanguage] = useState("en")

    //TODO: Extract with an effect the language set in the local storage.
    //TODO: set the language in local storage.
    //Handle state
    return <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
    </LanguageContext.Provider>
}

export function useLanguage() {
    const { language, setLanguage } = useContext(LanguageContext)
    return { language, setLanguage }
}
