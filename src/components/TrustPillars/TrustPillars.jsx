import Reveal from '@/components/Reveal'
import { TRUST_PILLARS } from '@/constants/brands'

export default function TrustPillars() {
    return (
        <section className="bg-navy py-20 px-12">
            <div className="mb-12">
                <Reveal>
                    <p className="flex items-center gap-[10px] text-[10px] tracking-[0.22em] uppercase text-gold mb-[10px] before:content-[''] before:w-6 before:h-[0.5px] before:bg-gold">
                        Why these brands
                    </p>
                </Reveal>
                <Reveal delay={100}>
                    <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-semibold text-on-dark leading-[1.15]">
                        What we look for before we stock a brand
                    </h2>
                </Reveal>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {TRUST_PILLARS.map(({ id, number, title, desc }, i) => (
                    <Reveal
                        key={id}
                        delay={i * 100}
                        className="border border-white/10 p-9 rounded-[2px] transition-colors duration-250 hover:border-gold/40"
                    >
                        <div
                            className="font-serif text-[48px] font-bold leading-none mb-4 text-transparent [-webkit-text-stroke:1px_rgba(196,169,106,0.3)]"
                            aria-hidden="true"
                        >
                            {number}
                        </div>

                        <h3 className="font-serif text-[20px] font-semibold text-on-dark mb-2.5">
                            {title}
                        </h3>

                        <p className="font-sans text-[12px] text-[#3a5a7a] leading-[1.8]">
                            {desc}
                        </p>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
