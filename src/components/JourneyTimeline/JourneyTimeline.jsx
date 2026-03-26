import Reveal from '@/components/Reveal'
import { TIMELINE_EVENTS } from '@/constants/about'

function TimelineItem({ title, desc, delay }) {
    return (
        <Reveal delay={delay} className="flex-1 pt-14 pr-8 relative">
            {/* Dot marker */}
            <div
                className="absolute top-5 left-0 w-4 h-4 rounded-full bg-navy border-[1.5px] border-gold before:content-[''] before:absolute before:inset-[3px] before:rounded-full before:bg-gold"
                aria-hidden="true"
            />

            <h3 className="font-serif text-[18px] font-semibold text-on-dark mb-2">
                {title}
            </h3>

            <p className="font-sans text-[12px] text-[#3a5a7a] leading-[1.8]">
                {desc}
            </p>
        </Reveal>
    )
}

export default function JourneyTimeline() {
    return (
        <section className="bg-navy py-[88px] px-12 relative overflow-hidden">
            {/* Ghost text background */}
            <div
                className="absolute font-serif text-[200px] font-bold right-[-30px] top-1/2 -translate-y-1/2 pointer-events-none leading-none z-0 ghost-text-white"
                aria-hidden="true"
            >
                JOURNEY
            </div>

            <div className="relative z-10 mb-14">
                <Reveal>
                    <p className="flex items-center gap-[10px] text-[10px] tracking-[0.22em] uppercase text-gold mb-[10px] before:content-[''] before:w-6 before:h-[0.5px] before:bg-gold">
                        Our journey
                    </p>
                </Reveal>
                <Reveal delay={100}>
                    <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-semibold text-on-dark leading-[1.15]">
                        From vision to where we stand today
                    </h2>
                </Reveal>
            </div>

            {/* Horizontal timeline track */}
            <div className="relative z-10 flex gap-0 before:content-[''] before:absolute before:top-7 before:left-0 before:right-0 before:h-[0.5px] before:bg-white/10">
                {TIMELINE_EVENTS.map((event, i) => (
                    <TimelineItem
                        key={event.id}
                        {...event}
                        delay={i * 100}
                    />
                ))}
            </div>
        </section>
    )
}
