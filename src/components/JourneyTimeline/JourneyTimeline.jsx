import Reveal from '@/components/Reveal'
import { TIMELINE_EVENTS } from '@/constants/about'

function TimelineItem({ title, desc, delay }) {
    return (
        <Reveal delay={delay} className="flex-1 pt-0 pl-8 pb-8 md:pb-0 md:pt-14 md:pl-0 pr-0 md:pr-8 relative">
            {/* Dot marker */}
            <div
                className="absolute top-1 md:top-5 left-0 w-4 h-4 rounded-full bg-navy border-[1.5px] border-gold before:content-[''] before:absolute before:inset-[3px] before:rounded-full before:bg-gold"
                aria-hidden="true"
            />
            {/* Mobile vertical line */}
            <div className="md:hidden absolute top-6 bottom-[-16px] left-[7px] w-[0.5px] bg-white/10" aria-hidden="true" />

            <h3 className="font-serif text-[20px] font-semibold text-on-dark mb-2">
                {title}
            </h3>

            <p className="font-sans text-[13.5px] text-white/90 leading-[1.8]">
                {desc}
            </p>
        </Reveal>
    )
}

export default function JourneyTimeline() {
    return (
        <section className="bg-navy py-16 md:py-[88px] px-4 md:px-8 lg:px-12 relative overflow-hidden">
            {/* Ghost text background */}
            <div
                className="absolute font-serif text-[100px] md:text-[200px] font-bold right-[-10px] md:right-[-30px] top-1/2 -translate-y-1/2 pointer-events-none leading-none z-0 ghost-text-white"
                aria-hidden="true"
            >
                JOURNEY
            </div>

            <div className="relative z-10 mb-10 md:mb-14">
                <Reveal>
                    <p className="flex items-center gap-[10px] text-[11px] tracking-[0.22em] uppercase text-gold mb-[10px] before:content-[''] before:w-6 before:h-[0.5px] before:bg-gold">
                        Our journey
                    </p>
                </Reveal>
                <Reveal delay={100}>
                    <h2 className="font-serif text-[clamp(30px,5vw,46px)] font-semibold text-on-dark leading-[1.15]">
                        From vision to where we stand today
                    </h2>
                </Reveal>
            </div>

            {/* Horizontal timeline track for desktop */}
            <div className="relative z-10 flex flex-col md:flex-row gap-0 md:before:content-[''] md:before:absolute md:before:top-7 md:before:left-0 md:before:right-0 md:before:h-[0.5px] md:before:bg-white/10">
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
