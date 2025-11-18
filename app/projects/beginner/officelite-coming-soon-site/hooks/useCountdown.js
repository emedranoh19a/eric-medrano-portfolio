import { useEffect, useState } from "react"

function getRemainingTime(target) {
    const now = new Date().getTime()
    const difference = target.getTime() - now

    if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((difference / (1000 * 60)) % 60)
    const seconds = Math.floor((difference / 1000) % 60)

    return { days, hours, minutes, seconds }
}
export function useCountdown(daysAhead = 30) {
    const [targetDate] = useState(() => {
        const d = new Date()
        d.setDate(d.getDate() + daysAhead)
        return d
    })

    const [timeLeft, setTimeLeft] = useState(() => getRemainingTime(targetDate))

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getRemainingTime(targetDate))
        }, 1000)

        return () => clearInterval(interval)
    }, [targetDate])

    return timeLeft
}
