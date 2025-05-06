import { create } from "zustand"
import { extensions as initialExtensions } from "../extensionsData"

export const useExtensionsStore = create((set) => ({
    extensions: initialExtensions,
    filterField: "All",
    setFilterField: (field) => set(() => ({ filterField: field })),
    toggleActive: (name) => set((state) => {
        const newExtensions = state.extensions.map(
            (extension) => extension.name === name ?
                { ...extension, isActive: !extension.isActive } : extension
        )
        return { extensions: newExtensions }
    }),

    removeExtension: (name) => set((state) => {
        const tempExtensions = state.extensions.filter((e) => e.name !== name)
        return { extensions: tempExtensions }
    }),
    resetExtensions: () => set(() => ({ extensions: initialExtensions }))
}))
