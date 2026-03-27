import Reveal from '@/components/Reveal'
import { WHY_TILES } from '@/constants/home'

function WhyTile({ icon, title, desc, delay }) {
    return (
        <Reveal
            delay={delay}
            className="bg-white p-7 rounded-[3px] shadow-[0_15px_40px_rgba(0,0,0,0.2)] border border-transparent transition-all duration-300 hover:border-gold/50 hover:-translate-y-1.5 relative z-0 hover:z-10"
        >
            <span className="block text-[22px] mb-3.5" aria-hidden="true">{icon}</span>
            <h3 className="font-serif text-[21px] font-semibold text-navy mb-2.5">{title}</h3>
            <p className="text-[13.5px] text-ink/75 leading-[1.8]">{desc}</p>
        </Reveal>
    )
}

export default function WhyChooseUs() {
    return (
        <section className="bg-navy py-16 md:py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden">
            {/* Background subtle vertical rule */}
            <div className="hidden md:block absolute right-20 inset-y-0 w-[0.5px] bg-white/5" aria-hidden="true" />

            <div className="mb-10 md:mb-12 relative z-10">
                <Reveal>
                    <p className="flex items-center gap-[10px] text-[11px] tracking-[0.22em] uppercase text-gold mb-[10px] before:content-[''] before:w-6 before:h-[0.5px] before:bg-gold">
                        What sets us apart
                    </p>
                </Reveal>
                <Reveal delay={100}>
                    <h2 className="text-[clamp(30px,5vw,46px)] font-semibold text-on-dark leading-[1.15]">
                        Why contractors &amp; dealers<br />choose us, every time
                    </h2>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {WHY_TILES.map(({ id, icon, title, desc }, i) => (
                    <WhyTile key={id} icon={icon} title={title} desc={desc} delay={(i % 3) * 100} />
                ))}
            </div>
        </section>
    )
}
