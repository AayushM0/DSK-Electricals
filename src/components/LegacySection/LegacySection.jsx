import Reveal from '@/components/Reveal'
import useCountUp from '@/hooks/useCountUp'
import { LEGACY_STATS } from '@/constants/home'

function StatCounter({ target, label, delay }) {
    const { count, ref } = useCountUp(target)

    return (
        <Reveal delay={delay}>
            <div ref={ref}>
                <div className="font-serif text-[42px] font-bold text-navy leading-none">
                    {count}+
                </div>
                <div className="text-[10px] tracking-[0.12em] uppercase text-[#8a7a60] mt-[5px]">
                    {label}
                </div>
            </div>
        </Reveal>
    )
}

export default function LegacySection() {
    return (
        <section className="bg-cream py-24 px-12 py-[100px] flex justify-end relative overflow-hidden border-t border-border-cream">
            {/* Ghost oversized text */}
            <div className="absolute font-serif text-[clamp(100px,20vw,260px)] font-bold left-[-20px] top-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap leading-none z-0 ghost-text-cream" aria-hidden="true">
                TRUST
            </div>

            <div className="relative z-10 max-w-[600px] w-full">
                <Reveal>
                    <p className="flex items-center gap-[10px] text-[10px] tracking-[0.22em] uppercase text-gold mb-[10px] before:content-[''] before:w-6 before:h-[0.5px] before:bg-gold">
                        Our legacy
                    </p>
                </Reveal>

                <Reveal delay={100}>
                    <h2 className="text-[clamp(24px,3.5vw,36px)] font-semibold text-ink mb-[14px] leading-[1.2]">
                        Decades of Trust.<br />One Address.
                    </h2>
                </Reveal>

                <Reveal delay={200}>
                    <p className="text-[14px] text-muted leading-[1.85] mb-9 max-w-[480px]">
                        Founded with a simple mission — to bring reliable electrical materials to contractors, builders and industries across the region. Today we stock 30+ premium brands and serve hundreds of clients from our warehouse, with same-day dispatch on in-stock items.
                    </p>
                </Reveal>

                <div className="flex gap-10">
                    {LEGACY_STATS.map(({ id, target, label }, i) => (
                        <StatCounter key={id} target={target} label={label} delay={(i + 2) * 100} />
                    ))}
                </div>
            </div>
        </section>
    )
}
