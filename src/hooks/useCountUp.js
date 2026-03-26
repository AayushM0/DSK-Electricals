import { useState, useEffect, useRef } from 'react'

// Animates a number from 0 to `target` when the returned ref enters the viewport.
export default function useCountUp(target, duration = 1600) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {
        // Mount-only: set up once, torn down on unmount
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || started.current) return
                started.current = true

                const step = target / (duration / 16)
                let current = 0

                const timer = setInterval(() => {
                    current += step
                    if (current >= target) {
                        setCount(target)
                        clearInterval(timer)
                        return
                    }
                    setCount(Math.floor(current))
                }, 16)
            },
            { threshold: 0.5 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [target, duration])

    return { count, ref }
}
