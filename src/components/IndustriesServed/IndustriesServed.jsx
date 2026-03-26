import Reveal from '@/components/Reveal'
import { INDUSTRIES_SERVED } from '@/constants/about'

export default function IndustriesServed() {
    return (
        <section className="bg-navy py-16 md:py-[88px] px-4 md:px-8 lg:px-12">
            <Reveal>
                <p className="flex items-center gap-[10px] text-[10px] tracking-[0.22em] uppercase text-gold mb-[10px] before:content-[''] before:w-6 before:h-[0.5px] before:bg-gold">
                    Who we serve
                </p>
            </Reveal>
            <Reveal delay={100}>
                <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-semibold text-on-dark mb-10 md:mb-12 leading-[1.15]">
                    Industries &amp; clients we supply to
                </h2>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5">
                {INDUSTRIES_SERVED.map(({ id, icon, name }, i) => (
                    <Reveal
                        key={id}
                        delay={i * 100}
                        className="bg-navy px-4 md:px-5 py-6 md:py-8 text-center transition-colors duration-200 cursor-default hover:bg-white/[0.03]"
                    >
                        <div className="text-[24px] md:text-[28px] mb-3" aria-hidden="true">
                            {icon}
                        </div>
                        <div className="text-[11px] md:text-[12px] text-[#5a7a9a] tracking-[0.06em]">
                            {name}
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
