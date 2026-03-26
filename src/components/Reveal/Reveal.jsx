import { useState, useEffect, useRef } from 'react'
import { cn } from '@/utils/cn'

const DELAY_MAP = { 0: '', 100: 'delay-100', 200: 'delay-200', 300: 'delay-300', 400: 'delay-400' }

// Fades + slides children into view when they enter the viewport.
export default function Reveal({ children, delay = 0, className, as: Tag = 'div' }) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        // Mount-only: observer is registered once and cleaned up on unmount
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.12 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <Tag
            ref={ref}
            className={cn(
                'transition-all duration-700',
                DELAY_MAP[delay] ?? '',
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7',
                className
            )}
        >
            {children}
        </Tag>
    )
}
