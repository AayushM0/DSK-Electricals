import Reveal from '@/components/Reveal'
import { INFRASTRUCTURE_FEATURES } from '@/constants/about'

export default function Infrastructure() {
    return (
        <section className="py-16 md:py-[88px] px-4 md:px-8 lg:px-12">
            <div className="mb-10 md:mb-12">
                <Reveal>
                    <p className="flex items-center gap-[10px] text-[10px] tracking-[0.22em] uppercase text-gold mb-[10px] before:content-[''] before:w-6 before:h-[0.5px] before:bg-gold">
                        How we operate
                    </p>
                </Reveal>
                <Reveal delay={100}>
                    <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-semibold text-ink leading-[1.15]">
                        Infrastructure &amp; Operations
                    </h2>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {INFRASTRUCTURE_FEATURES.map(({ id, icon, title, desc }, i) => (
                    <Reveal
                        key={id}
                        delay={i * 100}
                        className="group relative border border-border-cream p-6 md:p-9 rounded-[2px] overflow-hidden transition-colors duration-250 hover:border-gold"
                    >
                        {/* Top gold bar that scales on hover */}
                        <div
                            className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"
                            aria-hidden="true"
                        />

                        <div className="text-[28px] mb-4" aria-hidden="true">
                            {icon}
                        </div>

                        <h3 className="font-serif text-[20px] font-semibold text-ink mb-2">
                            {title}
                        </h3>

                        <p className="font-sans text-[13px] text-muted leading-[1.8]">
                            {desc}
                        </p>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
