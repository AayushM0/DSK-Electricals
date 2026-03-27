import Reveal from '@/components/Reveal'
import useCountUp from '@/hooks/useCountUp'
import { LEGACY_STATS } from '@/constants/home'

function StatCounter({ target, label, delay }) {
    const { count, ref } = useCountUp(target)

    return (
        <Reveal delay={delay}>
            <div ref={ref}>
                <div className="font-serif text-[40px] sm:text-[48px] font-bold text-gold leading-none">
                    {count}+
                </div>
                <div className="text-[11px] tracking-[0.12em] uppercase text-[#8a7a60] mt-[5px]">
                    {label}
                </div>
            </div>
        </Reveal>
    )
}

export default function LegacySection() {
    return (
        <section className="bg-cream px-4 md:px-8 lg:px-12 py-16 md:py-[100px] flex justify-start md:justify-end relative overflow-hidden border-t border-border-cream">
            {/* Ghost oversized text */}
            <div className="absolute font-serif text-[clamp(100px,20vw,260px)] font-bold left-[-20px] top-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap leading-none z-0 ghost-text-cream" aria-hidden="true">
                TRUST
            </div>

            <div className="relative z-10 max-w-[600px] w-full">
                <Reveal>
                    <p className="flex items-center gap-[10px] text-[11px] tracking-[0.22em] uppercase text-gold mb-[10px] before:content-[''] before:w-6 before:h-[0.5px] before:bg-gold">
                        Our legacy
                    </p>
                </Reveal>

                <Reveal delay={100}>
                    <h2 className="font-serif text-[clamp(28px,4.5vw,48px)] font-semibold text-navy leading-[1.12] mb-6">
                        Decades of Trust.<br />One Address.
                    </h2>
                </Reveal>

                <Reveal delay={200}>
                    <p className="font-sans text-[15px] sm:text-[17.5px] text-ink/80 leading-[1.8] mb-8 max-w-[480px]">
                        Founded with a simple mission — to bring reliable electrical materials to contractors, builders and industries across the region. Today we stock 30+ premium brands and serve hundreds of clients from our warehouse, with same-day dispatch on in-stock items.
                    </p>
                </Reveal>

                <div className="flex flex-wrap gap-8 md:gap-10">
                    {LEGACY_STATS.map(({ id, target, label }, i) => (
                        <StatCounter key={id} target={target} label={label} delay={(i + 2) * 100} />
                    ))}
                </div>
            </div>
        </section>
    )
}
