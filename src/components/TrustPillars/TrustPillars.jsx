import Reveal from '@/components/Reveal'
import { TRUST_PILLARS } from '@/constants/brands'

export default function TrustPillars() {
    return (
        <section className="bg-navy py-16 md:py-20 px-4 md:px-8 lg:px-12">
            <div className="mb-10 md:mb-12">
                <Reveal>
                    <p className="flex items-center gap-[10px] text-[11px] tracking-[0.22em] uppercase text-gold mb-[10px] before:content-[''] before:w-6 before:h-[0.5px] before:bg-gold">
                        Why these brands
                    </p>
                </Reveal>
                <Reveal delay={100}>
                    <h2 className="font-serif text-[clamp(30px,5vw,44px)] font-semibold text-on-dark leading-[1.15]">
                        What we look for before we stock a brand
                    </h2>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {TRUST_PILLARS.map(({ id, number, title, desc }, i) => (
                    <Reveal
                        key={id}
                        delay={i * 100}
                        className="bg-white p-6 md:p-9 rounded-[3px] shadow-xl border border-transparent transition-all duration-300 hover:border-gold/40 hover:-translate-y-1.5"
                    >
                        <div
                            className="font-serif text-[40px] md:text-[48px] font-bold leading-none mb-4 text-transparent [-webkit-text-stroke:1px_rgba(25,65,140,0.15)]"
                            aria-hidden="true"
                        >
                            {number}
                        </div>

                        <h3 className="font-serif text-[20px] md:text-[22px] font-semibold text-navy mb-2.5">
                            {title}
                        </h3>

                        <p className="font-sans text-[13.5px] text-ink/75 leading-[1.8]">
                            {desc}
                        </p>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
