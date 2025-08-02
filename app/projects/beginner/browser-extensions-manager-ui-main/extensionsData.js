import { consolePlus, devLens, domSnapshot, gridGuides, jsonWizard, linkChecker, markupNotes, palettePicker, speedBoost, styleSpy, tabMasterPro, viewportBuddy } from "./imageIndex"

export const extensions = [
    {
        logo: devLens,
        name: "DevLens",
        description: "Quickly inspect page layouts and visualize element boundaries.",
        isActive: true,
    },
    {
        logo: styleSpy,
        name: "StyleSpy",
        description: "Instantly analyze and copy CSS from any webpage element.",
        isActive: true,
    },
    {
        logo: speedBoost,
        name: "SpeedBoost",
        description: "Optimizes browser resource usage to accelerate page loading.",
        isActive: false,
    },
    {
        logo: jsonWizard,
        name: "JSONWizard",
        description: "Formats, validates, and prettifies JSON responses in-browser.",
        isActive: true,
    },
    {
        logo: tabMasterPro,
        name: "TabMaster Pro",
        description: "Organizes browser tabs into groups and sessions.",
        isActive: true,
    },
    {
        logo: viewportBuddy,
        name: "ViewportBuddy",
        description: "Simulates various screen resolutions directly within the browser.",
        isActive: false,
    },
    {
        logo: markupNotes,
        name: "Markup Notes",
        description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
        isActive: true,
    },
    {
        logo: gridGuides,
        name: "GridGuides",
        description: "Overlay customizable grids and alignment guides on any webpage.",
        isActive: false,
    },
    {
        logo: palettePicker,
        name: "Palette Picker",
        description: "Instantly extracts color palettes from any webpage.",
        isActive: true,
    },
    {
        logo: linkChecker,
        name: "LinkChecker",
        description: "Scans and highlights broken links on any page.",
        isActive: true,
    },
    {
        logo: domSnapshot,
        name: "DOM Snapshot",
        description: "Capture and export DOM structures quickly.",
        isActive: false,
    },
    {
        logo: consolePlus,
        name: "ConsolePlus",
        description: "Enhanced developer console with advanced filtering and logging.",
        isActive: true,
    },
]
