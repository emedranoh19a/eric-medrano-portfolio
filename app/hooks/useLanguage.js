import { create } from "zustand"

const initialLanguage = "jp"

export const useLanguage = create((set) => ({
    language: initialLanguage,
    setLanguage: (newLang) => set(() => ({ language: newLang }))

}))
