import { iconCalendar, iconPlanning, iconReminders, iconTodo } from "../imageIndex"

export const navItems = [
    { label: "features", hasChildren: true, from: "right" },
    { label: "company", hasChildren: true, from: "left" },
    { label: "career", hasChildren: false, from: null },
    { label: "about", hasChildren: false, from: null },
]
export const secondaryNav = {
    features: [
        { label: "Todo List", icon: iconTodo },
        { label: "Calendar", icon: iconCalendar },
        { label: "Reminders", icon: iconReminders },
        { label: "Planning", icon: iconPlanning }
    ],
    company: [
        { label: "History", icon: "" },
        { label: "Our Team", icon: "" },
        { label: "Blog", icon: "" }
    ]
}
