import { useEffect, useState } from 'react'

const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
}

function getCurrentBreakpoint(width) {
    if (width >= breakpoints['2xl']) return '2xl'
    if (width >= breakpoints.xl) return 'xl'
    if (width >= breakpoints.lg) return 'lg'
    if (width >= breakpoints.md) return 'md'
    if (width >= breakpoints.sm) return 'sm'
    return 'base'
}

export function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState(() =>
        typeof window !== 'undefined' ? getCurrentBreakpoint(window.innerWidth) : 'base'
    )

    useEffect(() => {
        function handleResize() {
            const newBreakpoint = getCurrentBreakpoint(window.innerWidth)
            setBreakpoint(newBreakpoint)
        }

        handleResize() // run on mount
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return breakpoint
}
