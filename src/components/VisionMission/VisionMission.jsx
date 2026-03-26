import Reveal from '@/components/Reveal'
import { VISION_MISSION } from '@/constants/about'

export default function VisionMission() {
    return (
        <section className="bg-cream-dark py-16 md:py-[88px] px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-[2px] border-y border-border-cream">
            {VISION_MISSION.map(({ id, number, type, title, text }, i) => (
                <div
                    key={id}
                    className="bg-cream px-6 md:px-12 py-10 md:py-[52px] border-b md:border-b-0 md:first:border-r border-border-cream"
                >
                    <Reveal delay={i * 100}>
                        <div
                            className="font-serif text-[60px] md:text-[80px] font-bold leading-none mb-4 ghost-text-navy"
                            aria-hidden="true"
                        >
                            {number}
                        </div>
                        <p className="flex items-center gap-[10px] text-[10px] tracking-[0.22em] uppercase text-gold mb-[10px] before:content-[''] before:w-6 before:h-[0.5px] before:bg-gold">
                            {type}
                        </p>
                    </Reveal>

                    <Reveal delay={100 + (i * 100)}>
                        <h3 className="text-[clamp(22px,3vw,30px)] font-semibold text-ink mb-3.5 leading-[1.2]">
                            {title}
                        </h3>
                    </Reveal>

                    <Reveal delay={200 + (i * 100)}>
                        <p className="font-sans text-[14px] text-muted leading-[1.9]">
                            {text}
                        </p>
                    </Reveal>
                </div>
            ))}
        </section>
    )
}
