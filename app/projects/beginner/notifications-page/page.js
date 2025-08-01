"use client"

import { useState } from "react"
import Notification from "./components/Notification"
import StylesSetup from "./components/StylesSetup"
import { notifications as notificationsData } from "./notifications"


export default function Page() {
    //State: 
    const [notifications, setNotifications] = useState(notificationsData)

    //Dataflow:
    const unreadNumber = notifications.reduce((ac, item) => item.isRead ? ac : ac + 1, 0)
    //Handlers:
    function handleUnread() {
        //Compute new
        const newNotifications = notifications.map((notification) => ({ ...notification, isRead: true }))
        setNotifications(newNotifications)
    }
    return <StylesSetup>
        <div className="w-full max-w-sm md:max-w-xl h-fit bg-white lg:mb-48 shadow-sm rounded-lg p-4">
            <div className="w-full flex justify-between mb-2.5">
                <h2 className="text-lg font-bold text-[var(--grayish-blue-900)]">
                    Notifications
                    <span className="bg-[var(--blue)] p-1 px-2 ml-2 rounded-md text-white text-xs">{unreadNumber}</span>
                </h2>
                <button onClick={handleUnread} className="text-sm text-[var(--grayish-blue-300)] font-bold hover:text-[var(--blue)] transition-colors">Mark all as read</button>
            </div>
            <ul className="flex flex-col gap-1.5">
                {notifications.map((notification, i) => <Notification key={i} {...notification} setNotifications={setNotifications} />)}
            </ul>
        </div>
    </StylesSetup>
}

